import { useHookstate } from "@hookstate/core"
import { useEffect } from "react"

import { CustomChatContainer } from "../../components/custom/customChatContainer"
import useInterval from "../../hooks/useInterval"
import {
    createThread,
    createUserMessage,
    getAssistantMessage,
    useChatConversation
} from "../../states/chatConversation"

const REQUEST_DELAY = 3000

const Messenger = () => {
    const chatConversation = useChatConversation()
    const isRequestRunning = useHookstate(false)

    useEffect(() => {
        createThread()
    }, [])

    useInterval(() => {
        if (!isRequestRunning.get() && chatConversation.partner.isTyping) {
            isRequestRunning.set(true)
            getAssistantMessage()
            isRequestRunning.set(false)
        }
    }, REQUEST_DELAY)

    return (
        <CustomChatContainer
            chatConversation={chatConversation}
            handleSend={content => createUserMessage(content)}
        />
    )
}

export default Messenger
