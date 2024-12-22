import {
    BugOutlined,
    CloseOutlined,
    CoffeeOutlined,
    ShopOutlined,
    SyncOutlined
} from "@ant-design/icons"
import { Avatar, ConversationHeader, UserStatus } from "@chatscope/chat-ui-kit-react"
import AvatarIcon from "@features/messenger/components/Common/AvatarIcon"
import BounceButton from "@features/messenger/components/Common/BounceButton"
import { setRegion, useMarketplace } from "@features/messenger/states/marketplace"
import { MarketplaceRegion } from "@features/messenger/types/marketplaceRegion"
import { Divider, Dropdown } from "antd"
import { MenuItemType } from "antd/lib/menu/hooks/useItems"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

import { resetConversation } from "../../../states/conversation"
import { resetThread, useThread } from "../../../states/thread"
import { StyledButton, StyledConversationHeader } from "./styles"
import { ConversationHeaderContainerProps } from "./types"

const ConversationHeaderContainer = (_props: ConversationHeaderContainerProps) => {
    const { t } = useTranslation(["toolbar", "avatar", "marketplace"])
    const { isLoading, id } = useThread()
    const { region } = useMarketplace()
    const navigate = useNavigate()

    const items: MenuItemType[] = t("marketplace:regions", { returnObjects: true }) as []

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

    const handleChangeMarketplace = (key: MarketplaceRegion) => {
        if (key !== region) {
            setRegion(key)
        }
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
                <Dropdown
                    menu={{
                        items,
                        selectable: true,
                        defaultSelectedKeys: [region],
                        onSelect: ({ key }) => {
                            handleChangeMarketplace(key as MarketplaceRegion)
                        }
                    }}>
                    <div>
                        <StyledButton
                            icon={<ShopOutlined />}
                            title={t("toolbar:marketplaceButton:label")}
                        />
                    </div>
                </Dropdown>
                <Divider type="vertical" />
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
