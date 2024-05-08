import Container from "../../components/common/Container"
import ScrollToTop from "../../components/common/ScrollToTop"
import EndBlock from "../../components/homepage/EndBlock"
import Footer from "../../components/homepage/Footer"
import Header from "../../components/homepage/Header"
import IntroBlock from "../../components/homepage/IntroBlock"
import MiddleBlock from "../../components/homepage/MiddleBlock"
import EndBlockContent from "../../content/EndBlockContent.json"
import HeaderContent from "../../content/HeaderContent.json"
import IntroBlockContent from "../../content/IntroBlockContent.json"
import MiddleBlockContent from "../../content/MiddleBlockContent.json"

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
            <Footer />
        </>
    )
}

export default Homepage
