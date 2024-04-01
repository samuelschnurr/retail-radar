import { MessageModel } from "@chatscope/chat-ui-kit-react"

import { ChatPartner } from "./chatPartner"

export type ChatConversation = {
    partner: ChatPartner
    messages: MessageModel[]
}
