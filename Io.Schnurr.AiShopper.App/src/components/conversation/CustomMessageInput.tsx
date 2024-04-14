import { MessageInput, MessageInputProps } from "@chatscope/chat-ui-kit-react"
import { useEffect, useRef } from "react"

import { createUserMessage, useConversation } from "../../states/conversation"

interface CustomMessageInputProps extends MessageInputProps {
    as?: string | typeof MessageInput
}

const CustomMessageInput = (_props: CustomMessageInputProps) => {
    const messageInputRef = useRef<HTMLInputElement>(null)
    const isTyping = useConversation().isTyping

    useEffect(() => {
        if (!isTyping && messageInputRef.current) {
            messageInputRef.current.focus()
        }
    }, [isTyping])

    return (
        <MessageInput
            ref={messageInputRef}
            onSend={createUserMessage}
            placeholder="Nachricht hier eingeben"
            attachButton={false}
            disabled={isTyping}
        />
    )
}

export default CustomMessageInput
