import CommonBlock from "@features/homepage/components/CommonBlock"
import Container from "@features/homepage/components/Container"
import Footer from "@features/homepage/components/Footer"
import Header from "@features/homepage/components/Header"
import FooterContent from "@features/homepage/locales/FooterContent.json"
import HeaderContent from "@features/homepage/locales/HeaderContent.json"

import { NotFoundSection } from "./styles"

const NotFound = () => {
    return (
        <>
            <Header src={HeaderContent.src} button={HeaderContent.button} />
            <NotFoundSection>
                <Container>
                    <CommonBlock
                        content={[
                            {
                                title: "Fehler",
                                subTitle: "Die gewünschte Seite konnte nicht gefunden werden.",
                                texts: []
                            }
                        ]}
                    />
                </Container>
            </NotFoundSection>
            <Footer src={FooterContent.src} />
        </>
    )
}

export default NotFound
