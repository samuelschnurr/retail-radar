import CommonBlock from "@features/homepage/components/Common/CommonSection"
import PageLayout from "@features/homepage/components/Layout/PageLayout"
import ImprintContent from "@features/homepage/locales/de/ImprintContent.json"

const Imprint = () => {
    return (
        <PageLayout>
            <CommonBlock content={ImprintContent} />
        </PageLayout>
    )
}

export default Imprint
