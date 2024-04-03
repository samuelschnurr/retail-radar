import { MessageModel } from "@chatscope/chat-ui-kit-react"

import { ChatPartner } from "./chatPartner"
import { Thread } from "./thread"

export type ChatConversation = {
    thread: Thread | null
    partner: ChatPartner
    messages: MessageModel[]
}
