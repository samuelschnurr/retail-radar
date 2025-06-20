import { MessageInput } from "@chatscope/chat-ui-kit-react"
import { useCallback, useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"

import { createUserMessage, useConversation } from "../../../states/conversation"
import { useThread } from "../../../states/thread"
import { MessageInputContainerProps } from "./types"

const MessageInputContainer = (_props: MessageInputContainerProps) => {
    const { t } = useTranslation("messages")
    const messageInputRef = useRef<HTMLInputElement>(null)
    const { isTyping } = useConversation()
    const { id: threadId } = useThread()

    const pasteAsPlainText = useCallback((e: React.ClipboardEvent<HTMLDivElement>) => {
        e.preventDefault()
        const selection = window.getSelection()

        if (selection) {
            const range = selection.getRangeAt(0)

            // Clean the html by getting only the text content from the pasted data
            const text = e.clipboardData.getData("text/plain")

            // Something can be actually selected, so we need to delete it
            range.deleteContents()

            // Paste clean text at the cursor position
            range.insertNode(document.createTextNode(text))

            // Move cursor to the end ef the pasted text
            selection.collapseToEnd()

            // Get the editor reference
            const editor = document.querySelector(
                ".cs-message-input__content-editor"
            ) as HTMLDivElement

            if (editor) {
                // The value was inserted into the editor without changing the state.
                // We don't want to change the state, because it causes problems with placing the cursor in the right place,
                // and if the input was empty the send button will remain disabled.
                // So we need to dispatch the "input" event manually.
                // This will trigger the onChange event, and the state will be updated
                editor.dispatchEvent(new Event("input", { bubbles: true }))
            }
        }
    }, [])

    useEffect(() => {
        if (!isTyping && messageInputRef.current) {
            messageInputRef.current.focus()
        }
    }, [isTyping])

    return (
        <MessageInput
            ref={messageInputRef}
            onSend={textContent => createUserMessage(threadId!, textContent)}
            onPaste={pasteAsPlainText}
            placeholder={t("messages:inputTextMessage")}
            attachButton={false}
            disabled={isTyping}
        />
    )
}

export default MessageInputContainer
