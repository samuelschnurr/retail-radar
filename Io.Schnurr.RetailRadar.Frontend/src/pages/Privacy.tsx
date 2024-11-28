import CommonBlock from "@features/landingpage/components/Common/CommonSection"
import ScrollToTop from "@features/landingpage/components/Common/ScrollToTop"
import PageLayout from "@features/landingpage/components/Layout/PageLayout"
import { getLocalizedResourceFile } from "@lib/i18n/i18nUtils"

const Privacy = () => {
    return (
        <PageLayout>
            <ScrollToTop scrollToId="header" />
            <CommonBlock htmlContent={getLocalizedResourceFile("Privacy")} />
        </PageLayout>
    )
}

export default Privacy
