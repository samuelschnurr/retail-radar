import { lazy } from "react"

import Footer from "../../components/Base/Footer"
import Header from "../../components/Base/Header"
import HeaderContent from "../../content/HeaderContent.json"
import IntroContent from "../../content/IntroBlockContent.json"
import MiddleBlockContent from "../../content/MiddleBlockContent.json"
const MiddleBlock = lazy(() => import("../../components/Base/MiddleBlock"))
const Container = lazy(() => import("../../common/Container"))
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"))
const IntroBlock = lazy(() => import("../../components/Base/IntroBlock"))

const Home = () => {
    return (
        <>
            <Header button={HeaderContent.button} />
            <Container>
                <ScrollToTop />
                <IntroBlock
                    title={IntroContent.title}
                    content={IntroContent.text}
                    icon={IntroContent.src}
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
