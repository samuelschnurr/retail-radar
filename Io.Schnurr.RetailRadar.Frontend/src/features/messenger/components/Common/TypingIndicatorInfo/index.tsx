import { TypingIndicator } from "@chatscope/chat-ui-kit-react"

import { TypingIndicatorInfoProps } from "./types"

const TypingIndicatorInfo = (props: TypingIndicatorInfoProps) => {
    const { userName, isTyping } = props

    return isTyping ? <TypingIndicator content={`${userName} schreibt`} /> : <></>
}

export default TypingIndicatorInfo
