import CommonBlock from "@features/landingpage/components/Common/CommonSection"
import PageLayout from "@features/landingpage/components/Layout/PageLayout"
import ImprintContent from "@features/landingpage/locales/de/ImprintContent.json"

const Imprint = () => {
    return (
        <PageLayout>
            <CommonBlock content={ImprintContent} />
        </PageLayout>
    )
}

export default Imprint
