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

const Messenger = () => {
    const chatConversation = useChatConversation()
    const isRequestRunning = useHookstate(false)
    const intervalDelay = chatConversation.partner.isTyping ? 1000 : null

    useEffect(() => {
        createThread()
    }, [])

    useInterval(async () => {
        if (isRequestRunning.get() || !chatConversation.partner.isTyping) {
            return
        }

        isRequestRunning.set(true)
        await getAssistantMessage()
        isRequestRunning.set(false)
    }, intervalDelay)

    return (
        <CustomChatContainer chatConversation={chatConversation} handleSend={createUserMessage} />
    )
}

export default Messenger
