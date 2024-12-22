import apiClient from "@lib/api/apiClient"

import { MarketplaceRegion } from "../types/marketplaceRegion"
import { Message } from "../types/message"

export async function getMessage(
    threadId: string,
    runId: string,
    region: MarketplaceRegion
): Promise<Message | null> {
    const response = await apiClient.get(
        `message?threadId=${threadId}&runId=${runId}&marketplaceRegion=${region}`
    )

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
