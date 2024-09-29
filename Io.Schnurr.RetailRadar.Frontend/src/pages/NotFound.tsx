import CommonBlock from "@features/homepage/components/Common/CommonBlock"
import PageLayout from "@features/homepage/components/Layout/PageLayout"
import NotFoundContent from "@features/homepage/locales/NotFoundContent.json"

const NotFound = () => {
    return (
        <PageLayout>
            <CommonBlock content={NotFoundContent} />
        </PageLayout>
    )
}

export default NotFound
