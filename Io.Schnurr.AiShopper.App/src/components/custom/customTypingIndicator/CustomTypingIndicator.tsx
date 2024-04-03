import { TypingIndicator } from "@chatscope/chat-ui-kit-react"
import { ReactElement } from "react"

import { ChatPartner } from "../../../types/chatPartner"

interface CustomTypingIndicatorProps {
    chatPartner: ChatPartner
}

function CustomTypingIndicator(props: CustomTypingIndicatorProps): ReactElement {
    const { chatPartner } = props
    return chatPartner.isTyping ? (
        <TypingIndicator content={`${chatPartner.name} schreibt`} />
    ) : (
        <></>
    )
}

export default CustomTypingIndicator
