import { MessageInput, MessageInputProps } from "@chatscope/chat-ui-kit-react"

import { createUserMessage, useConversation } from "../../states/conversation"

interface CustomMessageInputProps extends MessageInputProps {
    as?: string | typeof MessageInput
}

const CustomMessageInput = (_props: CustomMessageInputProps) => {
    const isTyping = useConversation().isTyping

    return (
        <MessageInput
            onSend={createUserMessage}
            placeholder="Nachricht hier eingeben"
            attachButton={false}
            disabled={isTyping}
        />
    )
}

export default CustomMessageInput
