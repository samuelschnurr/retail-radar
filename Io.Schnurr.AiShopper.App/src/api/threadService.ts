import { Thread } from "../types/thread"
import apiClient from "./apiClient"

export function postThread(): Promise<Thread | null> {
    return apiClient.post("/thread").then(async res => {
        if (res && res.data) {
            return res.data as Thread
        }
        return null
    })
}
