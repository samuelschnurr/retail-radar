import { BugOutlined, CloseOutlined, CoffeeOutlined, SyncOutlined } from "@ant-design/icons"
import { Avatar, ConversationHeader, UserStatus } from "@chatscope/chat-ui-kit-react"
import AvatarIcon from "@features/messenger/components/Common/AvatarIcon"
import BounceButton from "@features/messenger/components/Common/BounceButton"
import { Divider } from "antd"
import { useNavigate } from "react-router-dom"

import avatar from "../../../locales/de/AvatarContent.json"
import ToolbarContent from "../../../locales/de/ToolbarContent.json"
import { resetConversation } from "../../../states/conversation"
import { resetThread, useThread } from "../../../states/thread"
import { StyledButton, StyledConversationHeader } from "./styles"
import { ConversationHeaderContainerProps } from "./types"

const ConversationHeaderContainer = (_props: ConversationHeaderContainerProps) => {
    const { isLoading, id } = useThread()
    const navigate = useNavigate()

    const openDonationSite = () => {
        window.open("https://ko-fi.com/sampa", "_blank")
    }

    const sendBugReport = () => {
        const { mailReceiver, mailSubject, mailBody } = ToolbarContent.bugButton
        const subject = encodeURIComponent(mailSubject)
        const body = encodeURIComponent(`${mailBody}${id}`)
        const mailtoLink = `mailto:${mailReceiver}?subject=${subject}&body=${body}`
        window.location.href = mailtoLink
    }

    const handleRefresh = () => {
        resetThread()
        resetConversation()
    }

    const handleClose = () => {
        navigate("/")
    }

    return (
        <StyledConversationHeader>
            <AvatarIcon
                info={avatar.info}
                src={avatar.imageSource}
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
                    label={ToolbarContent.donationButton.label}
                    onClick={openDonationSite}
                />
                <StyledButton
                    icon={<BugOutlined />}
                    title={ToolbarContent.bugButton.label}
                    onClick={sendBugReport}
                />
                <Divider type="vertical" />
                <StyledButton
                    icon={<SyncOutlined />}
                    disabled={isLoading}
                    title={ToolbarContent.refreshButton.label}
                    onClick={handleRefresh}
                />
                <StyledButton
                    icon={<CloseOutlined />}
                    title={ToolbarContent.closeButton.label}
                    onClick={handleClose}
                />
            </ConversationHeader.Actions>
        </StyledConversationHeader>
    )
}

export default ConversationHeaderContainer
