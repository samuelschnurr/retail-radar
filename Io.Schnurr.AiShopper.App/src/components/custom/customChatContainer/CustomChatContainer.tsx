import {
    ChatContainer,
    ConversationHeader,
    MessageInput,
    MessageList
} from "@chatscope/chat-ui-kit-react"
import { Immutable } from "@hookstate/core"

import { ChatConversation } from "../../../types/chatConversation"
import CustomConversationHeader from "../../core/CustomConversationHeader"
import CustomMessageInput from "../../core/CustomMessageInput"
import CustomMessageList from "../../core/CustomMessageList"
import styles from "./CustomChatContainer.module.css"

interface CustomChatContainerProps {
    chatConversation: Immutable<ChatConversation>
    handleSend: (content: string) => void
}

const CustomChatContainer = (props: CustomChatContainerProps) => {
    const { chatConversation: chat, handleSend } = props

    return (
        <ChatContainer className={styles.fullHeight}>
            <CustomConversationHeader as={ConversationHeader} chat={chat} />
            <CustomMessageList as={MessageList} chat={chat} />
            <CustomMessageInput
                as={MessageInput}
                handleSend={handleSend}
                isInputDisabled={chat.partner.isTyping}
            />
        </ChatContainer>
    )
}
export default CustomChatContainer
