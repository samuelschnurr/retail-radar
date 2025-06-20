import CommonSection from "@features/landingpage/components/Common/CommonSection"
import PageLayout from "@features/landingpage/components/Layout/PageLayout"
import { getLocalizedResourceFile } from "@lib/i18n/i18nUtils"

const NotFound = () => {
    return (
        <PageLayout
            headerContent={getLocalizedResourceFile("header")}
            footerContent={getLocalizedResourceFile("footer")}>
            <CommonSection content={getLocalizedResourceFile("notfound")} />
        </PageLayout>
    )
}

export default NotFound
