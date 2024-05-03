import { MessageInput, MessageInputProps } from "@chatscope/chat-ui-kit-react"

export interface MessageInputContainerProps extends MessageInputProps {
    as?: string | typeof MessageInput
}
