import CommonBlock from "@features/homepage/components/Common/CommonSection"
import ScrollToTop from "@features/homepage/components/Common/ScrollToTop"
import PageLayout from "@features/homepage/components/Layout/PageLayout"
import PrivacyContent from "@features/homepage/locales/de/PrivacyContent.json"

const Privacy = () => {
    return (
        <PageLayout>
            <ScrollToTop scrollToId="header" />
            <CommonBlock htmlContent={PrivacyContent} />
        </PageLayout>
    )
}

export default Privacy
