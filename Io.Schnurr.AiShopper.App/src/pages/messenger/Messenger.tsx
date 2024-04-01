import {
    Avatar,
    ChatContainer,
    ConversationHeader,
    InfoButton,
    Message,
    MessageInput,
    MessageList,
    MessageModel,
    TypingIndicator
} from "@chatscope/chat-ui-kit-react"

import { addChatConversationMessage, useChatConversation } from "../../states/chatConversation"
import styles from "./Messenger.module.css"

function Messenger() {
    const chat = useChatConversation()

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
            <MessageList
                typingIndicator={<TypingIndicator content={`${chat.partner.name} schreibt`} />}>
                {chat.messages.map((item: MessageModel, index: number) => (
                    <Message key={index} model={item} />
                ))}
            </MessageList>
            <MessageInput
                onSend={handleSend}
                placeholder="Nachricht hier eingeben"
                attachButton={false}
            />
        </ChatContainer>
    )
}

function handleSend(text: string) {
    const messageModel = {
        message: text,
        direction: "outgoing"
    } as MessageModel

    addChatConversationMessage(messageModel)
}

export default Messenger
