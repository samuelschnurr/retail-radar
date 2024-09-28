import CommonBlock from "@features/homepage/components/Common/CommonBlock"
import MainLayout from "@features/homepage/components/Layout/MainLayout"
import ImprintContent from "@features/homepage/locales/ImprintContent.json"

import { ImprintSection } from "./styles"

const Imprint = () => {
    return (
        <MainLayout>
            <ImprintSection>
                <CommonBlock content={ImprintContent} />
            </ImprintSection>
        </MainLayout>
    )
}

export default Imprint
