import { TypingIndicator } from "@chatscope/chat-ui-kit-react"
import { ReactElement } from "react"

interface CustomTypingIndicatorProps {
    partnerName: string | undefined
    partnerIsTyping: boolean
}

const CustomTypingIndicator = (props: CustomTypingIndicatorProps): ReactElement => {
    const { partnerName, partnerIsTyping } = props
    return partnerIsTyping ? <TypingIndicator content={`${partnerName} schreibt`} /> : <></>
}

export default CustomTypingIndicator
