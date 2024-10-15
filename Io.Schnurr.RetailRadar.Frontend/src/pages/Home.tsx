import ScrollToTop from "@features/homepage/components/Common/ScrollToTop"
import DonationBlock from "@features/homepage/components/DonationBlock"
import FeatureBlock from "@features/homepage/components/FeatureBlock"
import PageLayout from "@features/homepage/components/Layout/PageLayout"
import WelcomeBlock from "@features/homepage/components/WelcomeBlock"
import DonationBlockContent from "@features/homepage/locales/de/DonationBlockContent.json"
import FeatureBlockContent from "@features/homepage/locales/de/FeatureBlockContent.json"
import WelcomeBlockContent from "@features/homepage/locales/de/WelcomeBlockContent.json"

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
