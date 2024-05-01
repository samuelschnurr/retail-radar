import { MessageInput } from "@chatscope/chat-ui-kit-react"
import { useEffect, useRef } from "react"

import { createUserMessage, useConversation } from "../../../states/conversation"
import { MessageInputContainerProps } from "./types"

const MessageInputContainer = (_props: MessageInputContainerProps) => {
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

export default MessageInputContainer
