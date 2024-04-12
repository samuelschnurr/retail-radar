import { hookstate, useHookstate } from "@hookstate/core"
import { devtools } from "@hookstate/devtools"

import { postThread } from "../api/threadService"
import { Thread } from "../types/thread"

const defaultState = { id: null, welcomeMessage: null } as Thread

const state = hookstate<Thread>({ ...defaultState }, devtools({ key: "aishopper-thread" }))

export const useThread = () => useHookstate(state).value

export async function createThread() {
    const response = await postThread()

    if (response) {
        state.set(response)
    }
}

export const resetThread = () => {
    state.set({ ...defaultState })
}
