import { MessageInput } from "@chatscope/chat-ui-kit-react"
import { useEffect, useRef } from "react"

import { createUserMessage, useConversation } from "../../../states/conversation"
import { useThread } from "../../../states/thread"
import { MessageInputContainerProps } from "./types"

const MessageInputContainer = (_props: MessageInputContainerProps) => {
    const messageInputRef = useRef<HTMLInputElement>(null)
    const isTyping = useConversation().isTyping
    const threadId = useThread().id

    useEffect(() => {
        if (!isTyping && messageInputRef.current) {
            messageInputRef.current.focus()
        }
    }, [isTyping])

    return (
        <MessageInput
            ref={messageInputRef}
            onSend={textContent => createUserMessage(threadId!, textContent)}
            placeholder="Nachricht hier eingeben"
            attachButton={false}
            disabled={isTyping}
        />
    )
}

export default MessageInputContainer
