import { MessageModel } from "@chatscope/chat-ui-kit-react"

import { ChatPartner } from "./chatPartner"

export interface ChatConversation {
    partner: ChatPartner
    messages: MessageModel[]
}
