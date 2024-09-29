import CommonBlock from "@features/homepage/components/Common/CommonBlock"
import PageLayout from "@features/homepage/components/Layout/PageLayout"
import PrivacyContent from "@features/homepage/locales/PrivacyContent.json"

const Privacy = () => {
    return (
        <PageLayout>
            <CommonBlock htmlContent={PrivacyContent} />
        </PageLayout>
    )
}

export default Privacy
