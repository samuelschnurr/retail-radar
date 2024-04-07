import {
    Avatar,
    ChatContainer,
    ConversationHeader,
    InfoButton,
    Message,
    MessageInput,
    MessageList,
    MessageModel
} from "@chatscope/chat-ui-kit-react"

import { ChatConversation } from "../../../types/chatConversation"
import styles from "./CustomChatContainer.module.css"
import { Immutable } from "@hookstate/core"
import { CustomTypingIndicator } from "../customTypingIndicator"

interface CustomChatContainerProps {
    chatConversation: Immutable<ChatConversation>
    handleSend: (content: string) => void
}

const CustomChatContainer = (props: CustomChatContainerProps) => {
    const { chatConversation: chat, handleSend } = props

    return (
        <ChatContainer className={styles.fullHeight}>
            <ConversationHeader>
                <Avatar
                    name={chat.partner.name}
                    src={chat.partner.src}
                    status={chat.partner.status}
                />
                <ConversationHeader.Content info="online" userName={chat.partner.name} />
                <ConversationHeader.Actions>
                    <InfoButton />
                </ConversationHeader.Actions>
            </ConversationHeader>
            <MessageList typingIndicator={<CustomTypingIndicator chatPartner={chat.partner} />}>
                {chat.messages.map((item: MessageModel, index: number) => (
                    <Message key={index} model={item} />
                ))}
            </MessageList>
            <MessageInput
                onSend={handleSend}
                placeholder="Nachricht hier eingeben"
                attachButton={false}
                disabled={chat.partner.isTyping}
            />
        </ChatContainer>
    )
}
export default CustomChatContainer
