import { lazy } from "react"

import Footer from "../../components/Footer"
import Header from "../../components/Header"
import IntroContent from "../../content/IntroContent.json"
import MiddleBlockContent from "../../content/MiddleBlockContent.json"
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"))
const Container = lazy(() => import("../../common/Container"))
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"))
const ContentBlock = lazy(() => import("../../components/ContentBlock"))

const Home = () => {
    return (
        <>
            <Header />
            <Container>
                <ScrollToTop />
                <ContentBlock
                    direction="right"
                    title={IntroContent.title}
                    content={IntroContent.text}
                    icon="developer.svg"
                    id="intro"
                />
                <MiddleBlock
                    title={MiddleBlockContent.title}
                    content={MiddleBlockContent.text}
                    button={MiddleBlockContent.button}
                />
            </Container>
            <Footer />
        </>
    )
}

export default Home
