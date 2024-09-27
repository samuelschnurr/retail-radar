import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css"

import { ConversationHeader, MessageInput, MessageList } from "@chatscope/chat-ui-kit-react"
import { useEffect } from "react"

import { addChatConversationMessage } from "../../features/messenger/states/conversation"
import { createThread, useThread } from "../../features/messenger/states/thread"
import ConversationHeaderContainer from "./../../features/messenger/components/ConversationHeaderContainer"
import MessageInputContainer from "./../../features/messenger/components/MessageInputContainer"
import MessageListContainer from "./../../features/messenger/components/MessageListContainer"
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
