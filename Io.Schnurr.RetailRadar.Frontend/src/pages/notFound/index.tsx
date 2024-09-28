import CommonBlock from "@features/homepage/components/Common/CommonBlock"
import MainLayout from "@features/homepage/components/Layout/MainLayout"

import { NotFoundSection } from "./styles"

const NotFound = () => {
    return (
        <MainLayout>
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
