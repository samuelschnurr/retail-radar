import CommonBlock from "@features/landingpage/components/Common/CommonSection"
import ScrollToTop from "@features/landingpage/components/Common/ScrollToTop"
import PageLayout from "@features/landingpage/components/Layout/PageLayout"
import PrivacyContent from "@features/landingpage/locales/de/PrivacyContent.json"

const Privacy = () => {
    return (
        <PageLayout>
            <ScrollToTop scrollToId="header" />
            <CommonBlock htmlContent={PrivacyContent} />
        </PageLayout>
    )
}

export default Privacy
