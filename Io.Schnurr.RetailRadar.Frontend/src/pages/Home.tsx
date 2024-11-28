import ScrollToTop from "@features/landingpage/components/Common/ScrollToTop"
import DonationBlock from "@features/landingpage/components/Home/DonationBlock"
import FeatureBlock from "@features/landingpage/components/Home/FeatureBlock"
import WelcomeBlock from "@features/landingpage/components/Home/WelcomeBlock"
import PageLayout from "@features/landingpage/components/Layout/PageLayout"
import { getLocalizedResourceFile } from "@lib/i18n/i18nUtils"
import { useTranslation } from "react-i18next"

const Home = () => {
    const { t } = useTranslation(["welcome, feature, donation"])

    return (
        <PageLayout
            headerContent={getLocalizedResourceFile("header")}
            footerContent={getLocalizedResourceFile("footer")}>
            <ScrollToTop scrollToId="welcome" />
            <WelcomeBlock
                title={t("welcome:title")}
                subtitle={t("welcome:subtitle")}
                imageSource={t("welcome:imageSource")}
            />
            <FeatureBlock
                title={t("feature:title")}
                subtitle={t("feature:subtitle")}
                listings={t("feature:listings", { returnObjects: true })}
                imageSource={t("feature:imageSource")}
            />
            <DonationBlock
                title={t("donation:title")}
                subtitle={t("donation:subtitle")}
                subtitle2={t("donation:subtitle2")}
                buttonLabel={t("donation:buttonLabel")}
                buttonUrl={t("donation:buttonUrl")}
                imageSource={t("donation:imageSource")}
            />
        </PageLayout>
    )
}

export default Home
