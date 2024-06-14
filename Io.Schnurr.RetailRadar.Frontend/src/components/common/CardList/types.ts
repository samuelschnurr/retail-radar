import { Message } from "@chatscope/chat-ui-kit-react"

export interface CardListProps {
    cardContents: string[]
    onClick: (message: string) => void
    as?: string | typeof Message
}
