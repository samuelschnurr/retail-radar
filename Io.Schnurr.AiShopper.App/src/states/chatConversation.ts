import { MessageModel } from "@chatscope/chat-ui-kit-react/src/components/Message/Message"
import { hookstate, useHookstate } from "@hookstate/core"
import { devtools } from "@hookstate/devtools"

import { getMessage, postMessage } from "../api/messageService"
import { postThread } from "../api/threadService"
import { ChatConversation } from "../types/chatConversation"
import { ChatPartner } from "../types/chatPartner"
import { Message } from "../types/message"
import assistantImage from "./../assets/images/ProfileJames.jpg"

const defaultPartner = {
    name: "James",
    status: "available",
    src: assistantImage,
    isTyping: true
} as ChatPartner

const defaultState = {
    thread: null,
    partner: { ...defaultPartner },
    messages: []
} as ChatConversation

const state = hookstate<ChatConversation>(
    { ...defaultState },
    devtools({ key: "chat-conversation" })
)

export const useChatConversation = () => useHookstate(state).value

export const resetChatConversation = () => {
    state.set({ ...defaultState, partner: { ...defaultPartner } })
}

export async function createThread() {
    const response = await postThread()

    if (response) {
        state.thread.set(response)
        addChatConversationMessage(response.id, response.welcomeMessage.content, "incoming")
    }
}

export async function createUserMessage(content: string) {
    const currentThreadState = state.thread.get()
    addChatConversationMessage(currentThreadState?.id, content, "outgoing")
    const response = await postMessage({
        threadId: currentThreadState?.id,
        content: content
    } as Message)

    if (response) {
        state.thread.merge({ lastRunId: response.run.id })
    }
}

export async function getAssistantMessage() {
    const currentState = state.get()
    if (currentState.thread) {
        const message = await getMessage(currentState.thread!.id, currentState.thread!.lastRunId)

        if (message && message.run?.status === "completed" && message.content) {
            addChatConversationMessage(message.threadId, message.content, "incoming")
        }
    }
}

export function addErrorConversationMessage() {
    addChatConversationMessage(
        state.get().thread?.id,
        "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
        "incoming"
    )
}

function addChatConversationMessage(
    threadId: string | undefined,
    content: string,
    direction: string
) {
    const newMessage = {
        message: content,
        direction: direction
    } as MessageModel

    if (threadId === state.thread.get()?.id) {
        state.partner.isTyping.set(direction === "outgoing")
        state.messages.set(messages => [...messages, newMessage])
    }
}
