import ScrollToTop from "@features/landingpage/components/Common/ScrollToTop"
import DonationBlock from "@features/landingpage/components/Home/DonationBlock"
import FeatureBlock from "@features/landingpage/components/Home/FeatureBlock"
import WelcomeBlock from "@features/landingpage/components/Home/WelcomeBlock"
import PageLayout from "@features/landingpage/components/Layout/PageLayout"
import { useTranslation } from "react-i18next"

const Home = () => {
    const { t } = useTranslation(["welcome, feature, donation"])

    return (
        <PageLayout>
            <ScrollToTop scrollToId="welcome" />
            <WelcomeBlock
                title={t("welcome:title")}
                subTitle={t("welcome:subTitle")}
                imageSource={t("welcome:imageSource")}
            />
            <FeatureBlock
                title={t("feature:title")}
                subTitle={t("feature:subTitle")}
                listings={t("feature:listings")}
                imageSource={t("feature:imageSource")}
            />
            <DonationBlock
                title={t("donation:title")}
                subTitle={t("donation:subTitle")}
                subTitle2={t("donation:subTitle2")}
                buttonText={t("donation:buttonText")}
                buttonLink={t("donation:buttonLink")}
                imageSource={t("donation:imageSource")}
            />
        </PageLayout>
    )
}

export default Home
