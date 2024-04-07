import { Message } from "../types/message"
import apiClient from "./apiClient"

export function getMessage(threadId: string, runId: string): Promise<Message | null> {
    return apiClient.get(`message?threadId=${threadId}&runId=${runId}`).then(async res => {
        if (res && res.data) {
            return res.data as Message
        }
        return null
    })
}

export function postMessage(message: Message): Promise<Message | null> {
    return apiClient.post("/message", message).then(async res => {
        if (res && res.data) {
            return res.data as Message
        }
        return null
    })
}
