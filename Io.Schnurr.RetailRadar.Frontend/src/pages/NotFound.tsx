import CommonBlock from "@features/landingpage/components/Common/CommonSection"
import PageLayout from "@features/landingpage/components/Layout/PageLayout"
import NotFoundContent from "@features/landingpage/locales/de/NotFoundContent.json"

const NotFound = () => {
    return (
        <PageLayout>
            <CommonBlock content={NotFoundContent} />
        </PageLayout>
    )
}

export default NotFound
