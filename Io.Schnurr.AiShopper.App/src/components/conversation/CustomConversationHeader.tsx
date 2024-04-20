import {
    Avatar,
    Button,
    ConversationHeader,
    ConversationHeaderProps,
    UserStatus
} from "@chatscope/chat-ui-kit-react"
import { faArrowsRotate, faMugSaucer, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"

import { AssistantIcon } from "../../common/AssistantIcon"
import assistant from "../../content/AssistantContent.json"
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
            <AssistantIcon
                info={assistant.info}
                src={assistant.src}
                status={assistant.status}
                as={Avatar}
            />
            <ConversationHeader.Content info={assistant.info} userName={assistant.name} />
            <ConversationHeader.Actions>
                <BounceButton
                    icon={faMugSaucer}
                    startDelay={30000}
                    intervalDelay={10000}
                    bounceDuration={5000}
                    onClick={() => {
                        window.open("https://ko-fi.com/sampa", "_blank")
                    }}
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
