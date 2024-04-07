import { Message } from "../types/message"
import apiClient from "./apiClient"

export function getMessage(threadId: string, runId: string): Promise<Message> {
    return apiClient.get(`message?threadId=${threadId}&runId=${runId}`).then(async res => {
        if (res?.data) {
            return res.data
        }
        return null
    })
}

export function postMessage(message: Message): Promise<Message> {
    return apiClient.post("/message", message).then(async res => {
        if (res?.data) {
            return res.data
        }
        return null
    })
}
