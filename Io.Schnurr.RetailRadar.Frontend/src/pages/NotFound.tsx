import CommonBlock from "@features/homepage/components/Common/CommonBlock"
import PageLayout from "@features/homepage/components/Layout/PageLayout"

const NotFound = () => {
    return (
        <PageLayout>
            <CommonBlock
                content={[
                    {
                        title: "Fehler",
                        subTitle: "Die gewünschte Seite konnte nicht gefunden werden.",
                        texts: []
                    }
                ]}
            />
        </PageLayout>
    )
}

export default NotFound
