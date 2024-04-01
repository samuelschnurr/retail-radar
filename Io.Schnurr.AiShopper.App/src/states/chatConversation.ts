import { MessageModel } from "@chatscope/chat-ui-kit-react/src/components/Message/Message"
import { hookstate, useHookstate } from "@hookstate/core"
import { devtools } from "@hookstate/devtools"

import { ChatConversation } from "../types/chatConversation"
import { ChatPartner } from "../types/chatPartner"
import assistantImage from "./../assets/images/ProfileJames.jpg"

export const defaultState = {
    partner: {
        name: "James",
        status: "available",
        src: assistantImage,
        isTyping: false
    } as ChatPartner,
    messages: []
} as ChatConversation

const state = hookstate<ChatConversation>(defaultState, devtools({ key: "chat-conversation" }))

export const useChatConversation = () => useHookstate(state).value

export const addChatConversationMessage = (message: MessageModel) =>
    state.messages.set(messages => [...messages, message])
