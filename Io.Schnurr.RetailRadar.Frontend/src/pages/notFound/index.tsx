import CommonBlock from "@features/homepage/components/Common/CommonBlock"
import Header from "@features/homepage/components/Layout/Header"
import MainLayout from "@features/homepage/components/Layout/MainLayout"
import HeaderContent from "@features/homepage/locales/HeaderContent.json"

import { NotFoundSection } from "./styles"

const NotFound = () => {
    return (
        <MainLayout>
            <Header src={HeaderContent.src} button={HeaderContent.button} />
            <NotFoundSection>
                <CommonBlock
                    content={[
                        {
                            title: "Fehler",
                            subTitle: "Die gewünschte Seite konnte nicht gefunden werden.",
                            texts: []
                        }
                    ]}
                />
            </NotFoundSection>
        </MainLayout>
    )
}

export default NotFound
