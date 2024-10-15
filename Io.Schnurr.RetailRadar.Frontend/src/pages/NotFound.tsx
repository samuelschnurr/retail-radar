import CommonBlock from "@features/homepage/components/Common/CommonSection"
import PageLayout from "@features/homepage/components/Layout/PageLayout"
import NotFoundContent from "@features/homepage/locales/de/NotFoundContent.json"

const NotFound = () => {
    return (
        <PageLayout>
            <CommonBlock content={NotFoundContent} />
        </PageLayout>
    )
}

export default NotFound
