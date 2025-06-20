import { Message, MessageList, MessageModel } from "@chatscope/chat-ui-kit-react"
import CardList from "@features/messenger/components/Common/CardList"
import TypingIndicatorInfo from "@features/messenger/components/Common/TypingIndicatorInfo"
import { useMarketplace } from "@features/messenger/states/marketplace"
import { useHookstate } from "@hookstate/core"
import useInterval from "@lib/hooks/useInterval"
import { useTranslation } from "react-i18next"

import {
    createUserMessage,
    getAssistantMessage,
    useConversation
} from "../../../states/conversation"
import { useThread } from "../../../states/thread"
import { MessageListContainerProps } from "./types"

const MessageListContainer = (_props: MessageListContainerProps) => {
    const { t } = useTranslation(["avatar", "messages"])
    const thread = useThread()
    const conversation = useConversation()
    const { region } = useMarketplace()
    const isRequestRunning = useHookstate(false)
    const intervalDelay = conversation.isTyping ? 2500 : null
    // First message: Welcome, Second Message: Marketplace
    const showExampleMessages =
        thread.id !== null && thread.id !== "0" && conversation.messages.length === 2

    const pollMessages = async () => {
        try {
            if (isRequestRunning.get() || !conversation.isTyping) {
                return
            }
            isRequestRunning.set(true)
            await getAssistantMessage(thread.id, region)
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
                    <TypingIndicatorInfo
                        isTypingText={t("avatar:isTypingText")}
                        isTyping={conversation.isTyping}
                    />
                }>
                {conversation.messages.map((item: MessageModel, index: number) => (
                    <Message key={index} model={item} />
                ))}
                {showExampleMessages && (
                    <CardList
                        as={Message}
                        cardContents={t("messages:welcomeMessages", { returnObjects: true }) as []}
                        onClick={message => createUserMessage(thread.id, message)}
                    />
                )}
            </MessageList>
        </>
    )
}

export default MessageListContainer
