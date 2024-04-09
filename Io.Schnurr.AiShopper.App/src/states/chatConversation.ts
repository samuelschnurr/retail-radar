import { MessageModel } from "@chatscope/chat-ui-kit-react/src/components/Message/Message"
import { hookstate, useHookstate } from "@hookstate/core"
import { devtools } from "@hookstate/devtools"

import { getMessage, postMessage } from "../api/messageService"
import { postThread } from "../api/threadService"
import { ChatConversation } from "../types/chatConversation"
import { Message } from "../types/message"
import assistantImage from "./../assets/images/ProfileJames.jpg"

export const defaultState = {
    thread: null,
    partner: {
        name: "James",
        status: "available",
        src: assistantImage,
        isTyping: true
    },
    messages: []
} as ChatConversation

const state = hookstate<ChatConversation>(defaultState, devtools({ key: "chat-conversation" }))

export const useChatConversation = () => useHookstate(state).value

export function createThread() {
    postThread().then(res => {
        if (res) {
            state.thread.set(res)
            addChatConversationMessage(res.welcomeMessage.content, "incoming")
        }
    })
}

export function createUserMessage(content: string) {
    const currentThreadState = state.thread.get()

    postMessage({
        threadId: currentThreadState?.id,
        content: content
    } as Message).then(res => {
        if (res) {
            state.thread.merge({ lastRunId: res.run.id })
            addChatConversationMessage(res.content, "outgoing")
        }
    })
}

export async function getAssistantMessage() {
    const currentState = state.get()
    const message = await getMessage(currentState.thread!.id, currentState.thread!.lastRunId)

    if (message && message.run?.status === "completed" && message.content) {
        addChatConversationMessage(message.content, "incoming")
    }
}

function addChatConversationMessage(content: string, direction: string) {
    const newMessage = {
        message: content,
        direction: direction
    } as MessageModel

    state.partner.isTyping.set(direction === "outgoing")
    state.messages.set(messages => [...messages, newMessage])
}

export function addErrorConversationMessage() {
    addChatConversationMessage(
        "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
        "incoming"
    )
}
