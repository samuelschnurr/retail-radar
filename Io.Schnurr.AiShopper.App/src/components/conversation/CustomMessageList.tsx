import { Message, MessageList, MessageListProps, MessageModel } from "@chatscope/chat-ui-kit-react"
import { useHookstate } from "@hookstate/core"

import assistant from "../../content/AssistantContent.json"
import useInterval from "../../hooks/useInterval"
import { getAssistantMessage, useConversation } from "../../states/conversation"
import { useThread } from "../../states/thread"
import TypingIndicatorInfo from "../core/TypingIndicatorInfo"

interface CustomMessageListProps extends MessageListProps {
    as?: string | typeof MessageList
}

const CustomMessageList = (_props: CustomMessageListProps) => {
    const thread = useThread()
    const conversation = useConversation()
    const isRequestRunning = useHookstate(false)
    const intervalDelay = conversation.isTyping ? 1000 : null

    useInterval(async () => {
        if (isRequestRunning.get() || !conversation.isTyping) {
            return
        }

        isRequestRunning.set(true)
        await getAssistantMessage(thread.id)
        isRequestRunning.set(false)
    }, intervalDelay)

    return (
        <MessageList
            typingIndicator={
                <TypingIndicatorInfo userName={assistant.name} isTyping={conversation.isTyping} />
            }>
            {conversation.messages.map((item: MessageModel, index: number) => (
                <Message key={index} model={item} />
            ))}
        </MessageList>
    )
}

export default CustomMessageList
