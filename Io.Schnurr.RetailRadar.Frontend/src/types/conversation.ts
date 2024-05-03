import { MessageModel } from "@chatscope/chat-ui-kit-react"

export type Conversation = {
    messages: MessageModel[]
    lastRunId: string | null
    isTyping: boolean
}
