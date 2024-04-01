import { TypingIndicator } from "@chatscope/chat-ui-kit-react"
import type { ReactElement } from "react"
import React from "react"

import { ChatPartner } from "../types/chatPartner"

function CustomTypingIndicator(props: ChatPartner): ReactElement {
    const { isTyping, name } = props
    return isTyping ? <TypingIndicator content={`${name} schreibt`} /> : <></>
}

export default CustomTypingIndicator
