import {
    ChatContainer,
    ConversationHeader,
    MessageInput,
    MessageList
} from "@chatscope/chat-ui-kit-react"
import { useEffect } from "react"

import CustomConversationHeader from "../../components/conversation/CustomConversationHeader"
import CustomMessageInput from "../../components/conversation/CustomMessageInput"
import CustomMessageList from "../../components/conversation/CustomMessageList"
import { addChatConversationMessage } from "../../states/conversation"
import { createThread, useThread } from "../../states/thread"
import styles from "./Messenger.module.css"

const Messenger = () => {
    const thread = useThread()

    useEffect(() => {
        if (thread.id || thread.isLoading) {
            return
        }

        const initMessenger = async () => {
            await createThread()
            addChatConversationMessage(thread.welcomeMessage?.content!, "incoming")
        }

        initMessenger()
    }, [thread])

    return (
        <ChatContainer className={styles.fullHeight}>
            <CustomConversationHeader as={ConversationHeader} />
            <CustomMessageList as={MessageList} />
            <CustomMessageInput as={MessageInput} />
        </ChatContainer>
    )
}

export default Messenger
