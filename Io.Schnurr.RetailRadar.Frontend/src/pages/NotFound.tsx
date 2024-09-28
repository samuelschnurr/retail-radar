import CommonBlock from "@features/homepage/components/Common/CommonBlock"
import MainLayout from "@features/homepage/components/Layout/MainLayout"

const NotFound = () => {
    return (
        <MainLayout>
            <CommonBlock
                content={[
                    {
                        title: "Fehler",
                        subTitle: "Die gewünschte Seite konnte nicht gefunden werden.",
                        texts: []
                    }
                ]}
            />
        </MainLayout>
    )
}

export default NotFound
