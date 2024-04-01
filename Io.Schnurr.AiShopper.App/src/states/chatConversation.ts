import { AvatarProps } from "@chatscope/chat-ui-kit-react/src/components/Avatar/Avatar"
import { MessageModel } from "@chatscope/chat-ui-kit-react/src/components/Message/Message"
import { hookstate, useHookstate } from "@hookstate/core"
import { devtools } from "@hookstate/devtools"

import assistantImage from "./../assets/images/ProfileJames.jpg"

export interface ChatConversation {
    partner: AvatarProps
    messages: MessageModel[]
}

export const defaultState = {
    partner: {
        name: "James",
        status: "available",
        src: assistantImage
    } as AvatarProps,
    messages: []
} as ChatConversation

const state = hookstate<ChatConversation>(defaultState, devtools({ key: "chat-conversation" }))

export const useChatConversation = () => useHookstate(state).value

export const addChatConversationMessage = (message: MessageModel) =>
    state.messages.set(messages => [...messages, message])
