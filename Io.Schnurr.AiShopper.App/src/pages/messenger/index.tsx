import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css"

import { ConversationHeader, MessageInput, MessageList } from "@chatscope/chat-ui-kit-react"
import { useEffect } from "react"

import ConversationHeaderContainer from "../../components/messenger/ConversationHeaderContainer"
import MessageInputContainer from "../../components/messenger/MessageInputContainer"
import MessageListContainer from "../../components/messenger/MessageListContainer"
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
            <ConversationHeaderContainer as={ConversationHeader} />
            <MessageListContainer as={MessageList} />
            <MessageInputContainer as={MessageInput} />
        </StyledChatContainer>
    )
}

export default Messenger
