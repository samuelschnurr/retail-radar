import { TypingIndicator } from "@chatscope/chat-ui-kit-react"
import { ReactElement } from "react"

import { TypingIndicatorInfoProps } from "./types"

const TypingIndicatorInfo = (props: TypingIndicatorInfoProps): ReactElement => {
    const { userName, isTyping } = props

    return isTyping ? <TypingIndicator content={`${userName} schreibt`} /> : <></>
}

export default TypingIndicatorInfo
