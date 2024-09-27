import Container from "../../components/Shared/Container"
import ScrollToTop from "../../components/Shared/ScrollToTop"
import EndBlock from "./../../features/homepage/components/EndBlock"
import Footer from "./../../features/homepage/components/Footer"
import Header from "./../../features/homepage/components/Header"
import IntroBlock from "./../../features/homepage/components/IntroBlock"
import MiddleBlock from "./../../features/homepage/components/MiddleBlock"
import EndBlockContent from "./../../features/homepage/locales/EndBlockContent.json"
import FooterContent from "./../../features/homepage/locales/FooterContent.json"
import HeaderContent from "./../../features/homepage/locales/HeaderContent.json"
import IntroBlockContent from "./../../features/homepage/locales/IntroBlockContent.json"
import MiddleBlockContent from "./../../features/homepage/locales/MiddleBlockContent.json"

const Homepage = () => {
    return (
        <>
            <Header src={HeaderContent.src} button={HeaderContent.button} />
            <Container>
                <ScrollToTop />
                <IntroBlock
                    title={IntroBlockContent.title}
                    subTitle={IntroBlockContent.subTitle}
                    src={IntroBlockContent.src}
                />
                <MiddleBlock
                    title={MiddleBlockContent.title}
                    subTitle={MiddleBlockContent.subTitle}
                    listings={MiddleBlockContent.listings}
                    src={MiddleBlockContent.src}
                />
                <EndBlock
                    title={EndBlockContent.title}
                    subTitle={EndBlockContent.subTitle}
                    subTitle2={EndBlockContent.subTitle2}
                    button={EndBlockContent.button}
                    src={EndBlockContent.src}
                />
            </Container>
            <Footer src={FooterContent.src} />
        </>
    )
}

export default Homepage
