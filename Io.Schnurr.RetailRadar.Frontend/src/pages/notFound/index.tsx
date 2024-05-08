import Container from "../../components/common/Container"
import CommonBlock from "../../components/homepage/CommonBlock"
import Footer from "../../components/homepage/Footer"
import Header from "../../components/homepage/Header"
import HeaderContent from "../../content/HeaderContent.json"
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
            <Footer />
        </>
    )
}

export default NotFound
