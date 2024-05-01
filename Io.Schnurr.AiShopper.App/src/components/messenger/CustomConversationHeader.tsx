import { CloseOutlined, CoffeeOutlined, SyncOutlined } from "@ant-design/icons"
import {
    Avatar,
    Button,
    ConversationHeader,
    ConversationHeaderProps,
    UserStatus
} from "@chatscope/chat-ui-kit-react"
import { useNavigate } from "react-router-dom"

import { resetConversation } from "../../states/conversation"
import { resetThread, useThread } from "../../states/thread"
import AvatarIcon from "../common/AvatarIcon"
import BounceButton from "../common/BounceButton"
import avatar from "./../../content/AvatarContent.json"

interface CustomConversationHeaderProps extends ConversationHeaderProps {
    as?: string | typeof ConversationHeader
}

const CustomConversationHeader = (_props: CustomConversationHeaderProps) => {
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
                <Button
                    icon={<SyncOutlined />}
                    disabled={isLoading}
                    style={{ fontSize: "16px" }}
                    onClick={() => {
                        resetThread()
                        resetConversation()
                    }}
                />
                <Button
                    icon={<CloseOutlined />}
                    style={{ fontSize: "16px" }}
                    onClick={() => {
                        navigate("/")
                    }}
                />
            </ConversationHeader.Actions>
        </ConversationHeader>
    )
}

export default CustomConversationHeader
