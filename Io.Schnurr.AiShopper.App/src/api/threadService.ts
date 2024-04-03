import { Thread } from "../types/thread"
import apiClient from "./apiClient"

export async function postThread(): Promise<Thread> {
    return apiClient.post("/thread").then(async res => {
        if (res?.data) {
            return res.data
        }
        return null
    })
}
