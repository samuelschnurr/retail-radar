import { MessageInput, MessageInputProps } from "@chatscope/chat-ui-kit-react"

interface CustomMessageInputProps extends MessageInputProps {
    as?: string | typeof MessageInput
    handleSend: (content: string) => void
    isInputDisabled: boolean
}

const CustomMessageInput = (props: CustomMessageInputProps) => {
    const { handleSend, isInputDisabled } = props

    return (
        <MessageInput
            onSend={handleSend}
            placeholder="Nachricht hier eingeben"
            attachButton={false}
            disabled={isInputDisabled}
        />
    )
}

export default CustomMessageInput
