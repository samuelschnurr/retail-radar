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

export async function createThread() {
    const newThread = await postThread()
    state.thread.set(newThread)

    addChatConversationMessage(newThread.welcomeMessage.content, "incoming")
}

export async function createMessage(content: string) {
    const currentThreadState = state.thread.get()
    const createdMessage = await postMessage({
        threadId: currentThreadState?.id,
        content: content
    } as Message)

    state.thread.merge({ lastRunId: createdMessage.run.id })
    addChatConversationMessage(createdMessage.content, "outgoing")
}

export async function refreshLastMessageStatus() {
    const currentState = state.get()
    const response = await getMessage(currentState.thread!.id, currentState.thread!.lastRunId)

    if (response?.run?.status === "completed" && response?.content) {
        addChatConversationMessage(response.content, "incoming")
    }
}

function addChatConversationMessage(content: string, direction: string) {
    const newMessage = {
        message: content,
        direction: direction
    } as MessageModel

    state.partner.isTyping.set(direction === "outgoing")
    state.messages.merge(messages => [...messages, newMessage])
}
