import { Thread } from "../types/thread"
import apiClient from "./apiClient"

export async function postThread(): Promise<Thread | null> {
    const response = await apiClient.post("thread")

    if (response && response.data) {
        return response.data as Thread
    }

    return null
}
