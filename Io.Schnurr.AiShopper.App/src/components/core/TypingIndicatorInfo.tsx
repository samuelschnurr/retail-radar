import { TypingIndicator } from "@chatscope/chat-ui-kit-react"
import { ReactElement } from "react"

interface TypingIndicatorInfoProps {
    userName: string | undefined
    isTyping: boolean
}

const TypingIndicatorInfo = (props: TypingIndicatorInfoProps): ReactElement => {
    const { userName, isTyping } = props

    return isTyping ? <TypingIndicator content={`${userName} schreibt`} /> : <></>
}

export default TypingIndicatorInfo
