import { CloseOutlined, CoffeeOutlined, SyncOutlined } from "@ant-design/icons"
import { Avatar, ConversationHeader, UserStatus } from "@chatscope/chat-ui-kit-react"
import { useNavigate } from "react-router-dom"

import avatar from "../../../content/AvatarContent.json"
import { resetConversation } from "../../../states/conversation"
import { resetThread, useThread } from "../../../states/thread"
import AvatarIcon from "../../common/AvatarIcon"
import BounceButton from "../../common/BounceButton"
import { StyledButton } from "./styles"
import { ConversationHeaderContainerProps } from "./types"

const ConversationHeaderContainer = (_props: ConversationHeaderContainerProps) => {
    const { isLoading } = useThread()
    const navigate = useNavigate()
    return (
        <ConversationHeader>
            <AvatarIcon
                info={avatar.info}
                src={avatar.src}
                status={avatar.status as UserStatus}
                as={Avatar}
            />
            <ConversationHeader.Content info={avatar.info} userName={avatar.name} />
            <ConversationHeader.Actions>
                <BounceButton
                    icon={<CoffeeOutlined />}
                    startDelay={30000}
                    intervalDelay={10000}
                    bounceDuration={5000}
                    onClick={() => {
                        window.open("https://ko-fi.com/sampa", "_blank")
                    }}
                />
                <StyledButton
                    icon={<SyncOutlined />}
                    disabled={isLoading}
                    onClick={() => {
                        resetThread()
                        resetConversation()
                    }}
                />
                <StyledButton
                    icon={<CloseOutlined />}
                    onClick={() => {
                        navigate("/")
                    }}
                />
            </ConversationHeader.Actions>
        </ConversationHeader>
    )
}

export default ConversationHeaderContainer
