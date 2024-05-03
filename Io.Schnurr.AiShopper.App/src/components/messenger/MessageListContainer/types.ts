import { MessageList, MessageListProps } from "@chatscope/chat-ui-kit-react"

export interface MessageListContainerProps extends MessageListProps {
    as?: string | typeof MessageList
}
