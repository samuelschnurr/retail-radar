import {
    Avatar,
    Button,
    ChatContainer,
    ConversationHeader,
    Message,
    MessageInput,
    MessageList,
    MessageModel
} from "@chatscope/chat-ui-kit-react"
import { faArrowsRotate, faMugSaucer, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Immutable } from "@hookstate/core"
import { useNavigate } from "react-router-dom"

import { resetChatConversation } from "../../../states/chatConversation"
import { ChatConversation } from "../../../types/chatConversation"
import BounceButton from "../../core/BounceButton"
import { CustomTypingIndicator } from "../customTypingIndicator"
import styles from "./CustomChatContainer.module.css"

interface CustomChatContainerProps {
    chatConversation: Immutable<ChatConversation>
    handleSend: (content: string) => void
}

const CustomChatContainer = (props: CustomChatContainerProps) => {
    const { chatConversation: chat, handleSend } = props
    const navigate = useNavigate()

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
                    <BounceButton
                        icon={faMugSaucer}
                        startDelay={30000}
                        intervalDelay={10000}
                        bounceDuration={5000}
                    />
                    <Button
                        icon={<FontAwesomeIcon icon={faArrowsRotate} />}
                        onClick={() => {
                            resetChatConversation()
                        }}
                    />
                    <Button
                        icon={<FontAwesomeIcon icon={faXmark} />}
                        onClick={() => {
                            resetChatConversation()
                            navigate("/")
                        }}
                    />
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
