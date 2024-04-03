import { MessageModel } from "@chatscope/chat-ui-kit-react"

import { CustomChatContainer } from "../../components/custom/customChatContainer"
import { addChatConversationMessage, useChatConversation } from "../../states/chatConversation"

function Messenger() {
    const chatConversation = useChatConversation()

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
