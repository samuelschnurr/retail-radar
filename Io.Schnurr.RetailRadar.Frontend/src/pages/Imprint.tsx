import CommonBlock from "@features/homepage/components/Common/CommonBlock"
import MainLayout from "@features/homepage/components/Layout/MainLayout"
import ImprintContent from "@features/homepage/locales/ImprintContent.json"

const Imprint = () => {
    return (
        <MainLayout>
            <CommonBlock content={ImprintContent} />
        </MainLayout>
    )
}

export default Imprint
