import { MessageModel } from "@chatscope/chat-ui-kit-react/src/components/Message/Message"
import { hookstate, useHookstate } from "@hookstate/core"
import { devtools } from "@hookstate/devtools"

import { postThread } from "../api/threadService"
import { ChatConversation } from "../types/chatConversation"
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

export function addChatConversationMessage(message: MessageModel) {
    state.messages.set(messages => [...messages, message])
    let isLastMessageFromUser = state.messages.get().at(-1)?.direction === "outgoing"
    state.partner.isTyping.set(isLastMessageFromUser)
}

export async function createNewThread() {
    const newThread = await postThread()
    state.thread.set(newThread)

    const welcomeMessage = {
        message: newThread.welcomeMessage.content,
        direction: "incoming"
    } as MessageModel

    addChatConversationMessage(welcomeMessage)
}
