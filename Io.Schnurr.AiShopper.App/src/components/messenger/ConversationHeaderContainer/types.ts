import { ConversationHeader, ConversationHeaderProps } from "@chatscope/chat-ui-kit-react"

export interface ConversationHeaderContainerProps extends ConversationHeaderProps {
    as?: string | typeof ConversationHeader
}
