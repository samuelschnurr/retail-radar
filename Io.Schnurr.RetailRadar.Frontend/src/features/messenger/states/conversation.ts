import { MessageModel } from "@chatscope/chat-ui-kit-react"
import { hookstate, useHookstate } from "@hookstate/core"
import { devtools } from "@hookstate/devtools"

import { getMessage, postMessage } from "../services/messageService"
import { Conversation } from "../types/conversation"
import { Message } from "../types/message"
import { MessageDirection } from "../types/messageDirection"

const defaultState = { messages: [], lastRunId: null, isTyping: true } as Conversation

const state = hookstate<Conversation>(
    { ...defaultState },
    devtools({ key: "retailradar-conversation" })
)

export const useConversation = () => useHookstate(state).value

export const resetConversation = () => {
    state.set({ ...defaultState })
}

export async function createUserMessage(threadId: string | null, content: string) {
    state.merge({ lastRunId: null })
    addChatConversationMessage(content, "outgoing")

    const response = await postMessage({
        threadId: threadId,
        content: content
    } as Message)

    if (response) {
        state.merge({ lastRunId: response.run.id })
    }
}

export async function getAssistantMessage(threadId: string | null) {
    if (!threadId) {
        return
    }

    const currentState = state.get()

    if (threadId && currentState.lastRunId) {
        const message = await getMessage(threadId, currentState.lastRunId)

        if (
            message &&
            message.run?.status === "completed" &&
            message.content &&
            currentState.lastRunId === message.run.id
        ) {
            addChatConversationMessage(message.content, "incoming")
        }
    }
}

export function addErrorConversationMessage(errorMessage: string) {
    addChatConversationMessage(errorMessage, "incoming")
}

export function addChatConversationMessage(content: string, direction: MessageDirection) {
    if (!content) {
        return
    }

    const newMessage = {
        message: content,
        direction: direction
    } as MessageModel

    state.isTyping.set(direction === "outgoing")
    state.messages.set(messages => [...messages, newMessage])
}
