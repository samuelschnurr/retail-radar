import { Message, MessageList, MessageModel } from "@chatscope/chat-ui-kit-react"
import { useHookstate } from "@hookstate/core"

import avatar from "../../../content/AvatarContent.json"
import useInterval from "../../../hooks/useInterval"
import { getAssistantMessage, useConversation } from "../../../states/conversation"
import { useThread } from "../../../states/thread"
import TypingIndicatorInfo from "../../common/TypingIndicatorInfo"
import { MessageListContainerProps } from "./types"

const MessageListContainer = (_props: MessageListContainerProps) => {
    const thread = useThread()
    const conversation = useConversation()
    const isRequestRunning = useHookstate(false)
    const intervalDelay = conversation.isTyping ? 2500 : null

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
        <MessageList
            typingIndicator={
                <TypingIndicatorInfo userName={avatar.name} isTyping={conversation.isTyping} />
            }>
            {conversation.messages.map((item: MessageModel, index: number) => (
                <Message key={index} model={item} />
            ))}
        </MessageList>
    )
}

export default MessageListContainer
