import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css"

import { ConversationHeader, MessageInput, MessageList } from "@chatscope/chat-ui-kit-react"
import ConversationHeaderContainer from "@features/messenger/components/Layout/ConversationHeaderContainer"
import MessageInputContainer from "@features/messenger/components/Layout/MessageInputContainer"
import MessageListContainer from "@features/messenger/components/Layout/MessageListContainer"
import MessengerLayout from "@features/messenger/components/Layout/MessengerLayout"
import { addChatConversationMessage } from "@features/messenger/states/conversation"
import { useMarketplace } from "@features/messenger/states/marketplace"
import { createThread, useThread } from "@features/messenger/states/thread"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"

const Messenger = () => {
    const thread = useThread()
    const { region } = useMarketplace()
    const { t } = useTranslation(["messages", "marketplace"])
    const regions = t("marketplace:regions", { returnObjects: true }) as {
        key: string
        label: string
    }[]

    useEffect(() => {
        if (thread.id || thread.isLoading) {
            return
        }

        const initMessenger = async () => {
            const isThreadCreated = await createThread()

            if (isThreadCreated) {
                addChatConversationMessage(thread.welcomeMessage?.content!, "incoming")
                addChatConversationMessage(
                    t("messages:marketplaceMessage").replace(
                        "{region}",
                        regions.find(r => r.key === region)!.label
                    ),
                    "incoming"
                )
            }
        }

        initMessenger()
    }, [thread, t, regions, region])

    return (
        <MessengerLayout>
            <ConversationHeaderContainer as={ConversationHeader} />
            <MessageListContainer as={MessageList} />
            <MessageInputContainer as={MessageInput} />
        </MessengerLayout>
    )
}

export default Messenger
