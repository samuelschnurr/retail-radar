import Container from "../../components/common/Container"
import CommonBlock from "../../components/homepage/CommonBlock"
import Footer from "../../components/homepage/Footer"
import Header from "../../components/homepage/Header"
import HeaderContent from "../../content/HeaderContent.json"
import ImprintContent from "../../content/ImprintContent.json"
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
            <Footer />
        </>
    )
}

export default Imprint
