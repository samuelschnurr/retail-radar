import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css"

import { ConversationHeader, MessageInput, MessageList } from "@chatscope/chat-ui-kit-react"
import ConversationHeaderContainer from "@features/messenger/components/Layout/ConversationHeaderContainer"
import MessageInputContainer from "@features/messenger/components/Layout/MessageInputContainer"
import MessageListContainer from "@features/messenger/components/Layout/MessageListContainer"
import MessengerLayout from "@features/messenger/components/Layout/MessengerLayout"
import { addChatConversationMessage } from "@features/messenger/states/conversation"
import { createThread, useThread } from "@features/messenger/states/thread"
import { useEffect } from "react"

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
        <MessengerLayout>
            <ConversationHeaderContainer as={ConversationHeader} />
            <MessageListContainer as={MessageList} />
            <MessageInputContainer as={MessageInput} />
        </MessengerLayout>
    )
}

export default Messenger
