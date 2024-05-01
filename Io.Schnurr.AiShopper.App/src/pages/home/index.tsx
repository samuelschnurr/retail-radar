import { lazy } from "react"

import Footer from "../../components/Base/Footer"
import Header from "../../components/Base/Header"
import IntroContent from "../../content/IntroContent.json"
import MiddleBlockContent from "../../content/MiddleBlockContent.json"
const MiddleBlock = lazy(() => import("../../components/Base/MiddleBlock"))
const Container = lazy(() => import("../../common/Container"))
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"))
const ContentBlock = lazy(() => import("../../components/Base/ContentBlock"))

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
                    icon="developer.png"
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
