import { MessageModel } from "@chatscope/chat-ui-kit-react"
import { useEffect } from "react"

import { CustomChatContainer } from "../../components/custom/customChatContainer"
import {
    addChatConversationMessage,
    createNewThread,
    useChatConversation
} from "../../states/chatConversation"

const Messenger = () => {
    const chatConversation = useChatConversation()

    useEffect(() => {
        createNewThread()
    }, [])

    return <CustomChatContainer chatConversation={chatConversation} handleSend={sendMessage} />
}

function sendMessage(text: string) {
    const messageModel = {
        message: text,
        direction: "outgoing"
    } as MessageModel

    addChatConversationMessage(messageModel)
}

export default Messenger
