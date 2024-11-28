import CommonBlock from "@features/landingpage/components/Common/CommonSection"
import ScrollToTop from "@features/landingpage/components/Common/ScrollToTop"
import PageLayout from "@features/landingpage/components/Layout/PageLayout"
import { getLocalizedResourceFile } from "@lib/i18n/i18nUtils"

const Privacy = () => {
    return (
        <PageLayout headerContent={getLocalizedResourceFile("header")}>
            <ScrollToTop scrollToId="header" />
            <CommonBlock htmlContent={getLocalizedResourceFile("privacy")} />
        </PageLayout>
    )
}

export default Privacy
