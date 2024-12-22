import ScrollToTop from "@features/landingpage/components/Common/ScrollToTop"
import DonationBlock from "@features/landingpage/components/Home/DonationBlock"
import FeatureBlock from "@features/landingpage/components/Home/FeatureBlock"
import WelcomeBlock from "@features/landingpage/components/Home/WelcomeBlock"
import PageLayout from "@features/landingpage/components/Layout/PageLayout"
import { getLocalizedResourceFile } from "@lib/i18n/i18nUtils"

const Home = () => {
    return (
        <PageLayout
            headerContent={getLocalizedResourceFile("header")}
            footerContent={getLocalizedResourceFile("footer")}>
            <ScrollToTop scrollToId="welcome" />
            <WelcomeBlock content={getLocalizedResourceFile("welcome")} />
            <FeatureBlock content={getLocalizedResourceFile("feature")} />
            <DonationBlock content={getLocalizedResourceFile("donation")} />
        </PageLayout>
    )
}

export default Home
