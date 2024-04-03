import { MessageRole } from "./messageRole"
import { Run } from "./run"

export type Message = {
    id: string
    threadId: string
    content: string
    role: MessageRole
    run: Run
}
