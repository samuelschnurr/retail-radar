import { Message } from "../types/message"
import apiClient from "./apiClient"

export async function getMessage(threadId: string, runId: string): Promise<Message | null> {
    const response = await apiClient.get(`message?threadId=${threadId}&runId=${runId}`)

    if (response && response.data) {
        return response.data as Message
    }

    return null
}

export async function postMessage(message: Message): Promise<Message | null> {
    const response = await apiClient.post("message", message)

    if (response && response.data) {
        return response.data as Message
    }

    return null
}
