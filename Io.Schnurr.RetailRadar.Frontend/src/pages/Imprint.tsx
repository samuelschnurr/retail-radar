import CommonBlock from "@features/landingpage/components/Common/CommonSection"
import PageLayout from "@features/landingpage/components/Layout/PageLayout"
import { getLocalizedResourceFile } from "@lib/i18n/i18nUtils"

const Imprint = () => {
    return (
        <PageLayout
            headerContent={getLocalizedResourceFile("header")}
            footerContent={getLocalizedResourceFile("footer")}>
            <CommonBlock content={getLocalizedResourceFile("imprint")} />
        </PageLayout>
    )
}

export default Imprint
