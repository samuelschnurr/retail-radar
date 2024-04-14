import {
    Avatar,
    Button,
    ConversationHeader,
    ConversationHeaderProps
} from "@chatscope/chat-ui-kit-react"
import { faArrowsRotate, faMugSaucer, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"

import { partnerJames } from "../../data/partner"
import { resetConversation } from "../../states/conversation"
import { resetThread, useThread } from "../../states/thread"
import BounceButton from "../core/BounceButton"

interface CustomConversationHeaderProps extends ConversationHeaderProps {
    as?: string | typeof ConversationHeader
}

const CustomConversationHeader = (_props: CustomConversationHeaderProps) => {
    const { isLoading } = useThread()
    const navigate = useNavigate()

    return (
        <ConversationHeader>
            <Avatar name={partnerJames.name} src={partnerJames.src} status={partnerJames.status} />
            <ConversationHeader.Content info={partnerJames.info} userName={partnerJames.name} />
            <ConversationHeader.Actions>
                <BounceButton
                    icon={faMugSaucer}
                    startDelay={30000}
                    intervalDelay={10000}
                    bounceDuration={5000}
                />
                <Button
                    icon={<FontAwesomeIcon icon={faArrowsRotate} />}
                    disabled={isLoading}
                    onClick={() => {
                        resetThread()
                        resetConversation()
                    }}
                />
                <Button
                    icon={<FontAwesomeIcon icon={faXmark} />}
                    onClick={() => {
                        navigate("/")
                    }}
                />
            </ConversationHeader.Actions>
        </ConversationHeader>
    )
}

export default CustomConversationHeader
