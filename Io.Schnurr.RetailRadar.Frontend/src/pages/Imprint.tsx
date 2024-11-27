import CommonBlock from "@features/landingpage/components/Common/CommonSection"
import PageLayout from "@features/landingpage/components/Layout/PageLayout"
import { getLocalizedResourceFile } from "@lib/i18n/i18nUtils"

const Imprint = () => {
    return (
        <PageLayout>
            <CommonBlock content={getLocalizedResourceFile("ImprintContent")} />
        </PageLayout>
    )
}

export default Imprint
