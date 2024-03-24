import {
    Avatar,
    AvatarProps,
    ChatContainer,
    ConversationHeader,
    InfoButton,
    Message,
    MessageInput,
    MessageList,
    MessageModel,
    TypingIndicator
} from "@chatscope/chat-ui-kit-react"

import styles from "./Chat.module.css"

interface ChatcontainerProps {
    avatar: AvatarProps
    messages: MessageModel[]
}

function Chatcontainer(props: ChatcontainerProps) {
    const { avatar } = props
    const { messages } = props

    return (
        <ChatContainer className={styles.fullHeight}>
            <ConversationHeader>
                <Avatar name={avatar.name} src={avatar.src} status={avatar.status} />
                <ConversationHeader.Content info="online" userName={avatar.name} />
                <ConversationHeader.Actions>
                    <InfoButton />
                </ConversationHeader.Actions>
            </ConversationHeader>
            <MessageList typingIndicator={<TypingIndicator content={`${avatar.name} schreibt`} />}>
                {messages.map((item: MessageModel, index: number) => (
                    <Message key={index} model={item} />
                ))}
            </MessageList>
            <MessageInput placeholder="Nachricht hier eingeben" attachButton={false} />
        </ChatContainer>
    )
}

export default Chatcontainer
