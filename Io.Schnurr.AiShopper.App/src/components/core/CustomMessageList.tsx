import { Message, MessageList, MessageListProps, MessageModel } from "@chatscope/chat-ui-kit-react"
import { Immutable } from "@hookstate/core"

import { ChatConversation } from "../../types/chatConversation"
import { CustomTypingIndicator } from "../custom/customTypingIndicator"

interface CustomMessageListProps extends MessageListProps {
    as?: string | typeof MessageList
    chat: Immutable<ChatConversation>
}

const CustomMessageList = (props: CustomMessageListProps) => {
    const { chat } = props

    return (
        <MessageList
            typingIndicator={
                <CustomTypingIndicator
                    partnerName={chat.partner.name}
                    partnerIsTyping={chat.partner.isTyping}
                />
            }>
            {chat.messages.map((item: MessageModel, index: number) => (
                <Message key={index} model={item} />
            ))}
        </MessageList>
    )
}

export default CustomMessageList
