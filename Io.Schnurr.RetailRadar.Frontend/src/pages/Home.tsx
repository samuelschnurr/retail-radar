import ScrollToTop from "@features/landingpage/components/Common/ScrollToTop"
import DonationBlock from "@features/landingpage/components/Home/DonationBlock"
import FeatureBlock from "@features/landingpage/components/Home/FeatureBlock"
import WelcomeBlock from "@features/landingpage/components/Home/WelcomeBlock"
import PageLayout from "@features/landingpage/components/Layout/PageLayout"
import DonationBlockContent from "@features/landingpage/locales/de/DonationBlockContent.json"
import FeatureBlockContent from "@features/landingpage/locales/de/FeatureBlockContent.json"
import WelcomeBlockContent from "@features/landingpage/locales/de/WelcomeBlockContent.json"

const Home = () => {
    return (
        <PageLayout>
            <ScrollToTop scrollToId="welcome" />
            <WelcomeBlock
                title={WelcomeBlockContent.title}
                subTitle={WelcomeBlockContent.subTitle}
                src={WelcomeBlockContent.src}
            />
            <FeatureBlock
                title={FeatureBlockContent.title}
                subTitle={FeatureBlockContent.subTitle}
                listings={FeatureBlockContent.listings}
                src={FeatureBlockContent.src}
            />
            <DonationBlock
                title={DonationBlockContent.title}
                subTitle={DonationBlockContent.subTitle}
                subTitle2={DonationBlockContent.subTitle2}
                button={DonationBlockContent.button}
                src={DonationBlockContent.src}
            />
        </PageLayout>
    )
}

export default Home
