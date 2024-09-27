import { hookstate, useHookstate } from "@hookstate/core"
import { devtools } from "@hookstate/devtools"

import { postThread } from "../services/threadService"
import { Thread } from "../types/thread"

const defaultState = { id: null, welcomeMessage: null, isLoading: false } as Thread

const state = hookstate<Thread>({ ...defaultState }, devtools({ key: "retailradar-thread" }))

export const useThread = () => useHookstate(state).value

export async function createThread() {
    state.isLoading.set(true)
    const response = await postThread()

    if (response) {
        state.set(response)
    } else {
        state.id.set("0")
    }

    state.isLoading.set(false)
}

export const resetThread = () => {
    state.set({ ...defaultState })
}
