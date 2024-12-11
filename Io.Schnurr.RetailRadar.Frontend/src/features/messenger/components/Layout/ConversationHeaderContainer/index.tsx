import { BugOutlined, CloseOutlined, CoffeeOutlined, SyncOutlined } from "@ant-design/icons"
import { Avatar, ConversationHeader, UserStatus } from "@chatscope/chat-ui-kit-react"
import AvatarIcon from "@features/messenger/components/Common/AvatarIcon"
import BounceButton from "@features/messenger/components/Common/BounceButton"
import { Divider } from "antd"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

import { resetConversation } from "../../../states/conversation"
import { resetThread, useThread } from "../../../states/thread"
import { StyledButton, StyledConversationHeader } from "./styles"
import { ConversationHeaderContainerProps } from "./types"

const ConversationHeaderContainer = (_props: ConversationHeaderContainerProps) => {
    const { t } = useTranslation(["toolbar", "avatar"])
    const { isLoading, id } = useThread()
    const navigate = useNavigate()

    const openDonationSite = () => {
        window.open(t("toolbar:donationButton:url"), "_blank")
    }

    const sendBugReport = () => {
        const subject = encodeURIComponent(t("toolbar:bugButton:mailSubject"))
        const body = encodeURIComponent(`${t("toolbar:bugButton:mailBody")}${id}`)
        const mailtoLink = `mailto:${t(
            "toolbar:bugButton:mailReceiver"
        )}?subject=${subject}&body=${body}`
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
                info={t("avatar:info")}
                src={t("avatar:imageSource")}
                status={t("avatar:status") as UserStatus}
                as={Avatar}
            />
            <ConversationHeader.Content info={t("avatar:info")} userName={t("avatar:name")} />
            <ConversationHeader.Actions>
                <BounceButton
                    icon={<CoffeeOutlined />}
                    startDelay={30000}
                    intervalDelay={10000}
                    bounceDuration={5000}
                    label={t("toolbar:donationButton:label")}
                    onClick={openDonationSite}
                />
                <StyledButton
                    icon={<BugOutlined />}
                    title={t("toolbar:bugButton:label")}
                    onClick={sendBugReport}
                />
                <Divider type="vertical" />
                <StyledButton
                    icon={<SyncOutlined />}
                    disabled={isLoading}
                    title={t("toolbar:refreshButton:label")}
                    onClick={handleRefresh}
                />
                <StyledButton
                    icon={<CloseOutlined />}
                    title={t("toolbar:closeButton:label")}
                    onClick={handleClose}
                />
            </ConversationHeader.Actions>
        </StyledConversationHeader>
    )
}

export default ConversationHeaderContainer
