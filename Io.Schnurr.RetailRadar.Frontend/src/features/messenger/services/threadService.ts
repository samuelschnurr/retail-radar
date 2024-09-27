import apiClient from "@lib/api/apiClient"

import { Thread } from "../types/thread"

export async function postThread(): Promise<Thread | null> {
    const response = await apiClient.post("thread")

    if (response && response.data) {
        return response.data as Thread
    }

    return null
}
