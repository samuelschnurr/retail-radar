import {
    Avatar,
    Button,
    ConversationHeader,
    ConversationHeaderProps
} from "@chatscope/chat-ui-kit-react"
import { faArrowsRotate, faMugSaucer, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Immutable } from "@hookstate/core"
import { useNavigate } from "react-router-dom"

import { createThread, resetChatConversation } from "../../states/chatConversation"
import { ChatConversation } from "../../types/chatConversation"
import BounceButton from "./BounceButton"

interface CustomConversationHeaderProps extends ConversationHeaderProps {
    as?: string | typeof ConversationHeader
    chat: Immutable<ChatConversation>
}

const CustomConversationHeader = (props: CustomConversationHeaderProps) => {
    const { chat } = props
    const navigate = useNavigate()

    return (
        <ConversationHeader>
            <Avatar name={chat.partner.name} src={chat.partner.src} status={chat.partner.status} />
            <ConversationHeader.Content info="online" userName={chat.partner.name} />
            <ConversationHeader.Actions>
                <BounceButton
                    icon={faMugSaucer}
                    startDelay={30000}
                    intervalDelay={10000}
                    bounceDuration={5000}
                />
                <Button
                    icon={<FontAwesomeIcon icon={faArrowsRotate} />}
                    onClick={() => {
                        resetChatConversation()
                        createThread()
                    }}
                />
                <Button
                    icon={<FontAwesomeIcon icon={faXmark} />}
                    onClick={() => {
                        resetChatConversation()
                        navigate("/")
                    }}
                />
            </ConversationHeader.Actions>
        </ConversationHeader>
    )
}

export default CustomConversationHeader
