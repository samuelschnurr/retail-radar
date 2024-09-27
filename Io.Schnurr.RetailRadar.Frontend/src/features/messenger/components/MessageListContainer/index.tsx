import { Message, MessageList, MessageModel } from "@chatscope/chat-ui-kit-react"
import { useHookstate } from "@hookstate/core"

import useInterval from "../../../../lib/hooks/useInterval"
import { createUserMessage, getAssistantMessage, useConversation } from "../../states/conversation"
import { useThread } from "../../states/thread"
import CardList from "./../../../../components/Shared/CardList"
import TypingIndicatorInfo from "./../../../../components/Shared/TypingIndicatorInfo"
import avatar from "./../../locales/AvatarContent.json"
import ExampleMessages from "./../../locales/ExampleMessagesContent.json"
import { MessageListContainerProps } from "./types"

const MessageListContainer = (_props: MessageListContainerProps) => {
    const thread = useThread()
    const conversation = useConversation()
    const isRequestRunning = useHookstate(false)
    const intervalDelay = conversation.isTyping ? 2500 : null
    const showExampleMessages = conversation.messages.length === 1

    const pollMessages = async () => {
        try {
            if (isRequestRunning.get() || !conversation.isTyping) {
                return
            }
            isRequestRunning.set(true)
            await getAssistantMessage(thread.id)
            isRequestRunning.set(false)
        } catch (error) {
            console.error(`An error occured while using useInterval within pollMessages: ${error}`)
        }
    }

    useInterval(pollMessages, intervalDelay)

    return (
        <>
            <MessageList
                typingIndicator={
                    <TypingIndicatorInfo userName={avatar.name} isTyping={conversation.isTyping} />
                }>
                {conversation.messages.map((item: MessageModel, index: number) => (
                    <Message key={index} model={item} />
                ))}
                {showExampleMessages && (
                    <CardList
                        as={Message}
                        cardContents={ExampleMessages}
                        onClick={message => createUserMessage(thread.id, message)}
                    />
                )}
            </MessageList>
        </>
    )
}

export default MessageListContainer
