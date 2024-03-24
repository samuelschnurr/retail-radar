import {
    Avatar,
    ChatContainer,
    ConversationHeader,
    InfoButton,
    Message,
    MessageInput,
    MessageList,
    MessageSeparator,
    TypingIndicator
} from "@chatscope/chat-ui-kit-react"

import assistantImage from "./../assets/images/ProfileJames.jpg"
import styles from "./Chat.module.css"
const assistantName = "James"

function Chat() {
    return (
        <ChatContainer className={styles.chatContainer}>
            <ConversationHeader>
                <Avatar name={assistantName} src={assistantImage} status="available" />
                <ConversationHeader.Content info="online" userName={assistantName} />
                <ConversationHeader.Actions>
                    <InfoButton />
                </ConversationHeader.Actions>
            </ConversationHeader>
            <MessageList
                typingIndicator={<TypingIndicator content={`${assistantName} schreibt`} />}>
                <MessageSeparator content="Heute" />
                <Message
                    model={{
                        direction: "incoming",
                        message: "Hallo mein Freund",
                        position: "single",
                        sender: assistantName,
                        sentTime: "vor 15 Minuten"
                    }}></Message>
                <Message
                    model={{
                        direction: "incoming",
                        message: "Bitte sende eine Nachricht!",
                        position: "single",
                        sender: assistantName,
                        sentTime: "vor 15 Minuten"
                    }}></Message>
            </MessageList>
            <MessageInput placeholder="Nachricht hier eingeben" attachButton={false} />
        </ChatContainer>
    )
}

export default Chat
