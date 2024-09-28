import CommonBlock from "@features/homepage/components/CommonBlock"
import Container from "@features/homepage/components/Container"
import Footer from "@features/homepage/components/Footer"
import Header from "@features/homepage/components/Header"
import FooterContent from "@features/homepage/locales/FooterContent.json"
import HeaderContent from "@features/homepage/locales/HeaderContent.json"
import ImprintContent from "@features/homepage/locales/ImprintContent.json"

import { ImprintSection } from "./styles"

const Imprint = () => {
    return (
        <>
            <Header src={HeaderContent.src} button={HeaderContent.button} />
            <ImprintSection>
                <Container>
                    <CommonBlock content={ImprintContent} />
                </Container>
            </ImprintSection>
            <Footer src={FooterContent.src} />
        </>
    )
}

export default Imprint
