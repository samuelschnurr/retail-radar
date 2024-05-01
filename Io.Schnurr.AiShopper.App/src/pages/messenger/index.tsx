import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css"

import { ConversationHeader, MessageInput, MessageList } from "@chatscope/chat-ui-kit-react"
import { useEffect } from "react"

import CustomConversationHeader from "../../components/messenger/CustomConversationHeader"
import CustomMessageInput from "../../components/messenger/CustomMessageInput"
import CustomMessageList from "../../components/messenger/CustomMessageList"
import { addChatConversationMessage } from "../../states/conversation"
import { createThread, useThread } from "../../states/thread"
import { StyledChatContainer } from "./styles"
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
        <StyledChatContainer>
            <CustomConversationHeader as={ConversationHeader} />
            <CustomMessageList as={MessageList} />
            <CustomMessageInput as={MessageInput} />
        </StyledChatContainer>
    )
}

export default Messenger
