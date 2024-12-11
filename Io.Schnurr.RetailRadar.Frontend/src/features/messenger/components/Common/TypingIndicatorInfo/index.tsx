import { TypingIndicator } from "@chatscope/chat-ui-kit-react"

import { TypingIndicatorInfoProps } from "./types"

const TypingIndicatorInfo = (props: TypingIndicatorInfoProps) => {
    const { isTypingText, isTyping } = props

    return isTyping ? <TypingIndicator content={isTypingText} /> : <></>
}

export default TypingIndicatorInfo
