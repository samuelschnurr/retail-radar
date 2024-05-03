import { lazy } from "react"

import Footer from "../../components/homepage/Footer"
import Header from "../../components/homepage/Header"
import HeaderContent from "../../content/HeaderContent.json"
import IntroBlockContent from "../../content/IntroBlockContent.json"
import MiddleBlockContent from "../../content/MiddleBlockContent.json"
const MiddleBlock = lazy(() => import("../../components/homepage/MiddleBlock"))
const Container = lazy(() => import("../../components/common/Container"))
const ScrollToTop = lazy(() => import("../../components/common/ScrollToTop"))
const IntroBlock = lazy(() => import("../../components/homepage/IntroBlock"))

const Home = () => {
    return (
        <>
            <Header button={HeaderContent.button} />
            <Container>
                <ScrollToTop />
                <IntroBlock
                    title={IntroBlockContent.title}
                    content={IntroBlockContent.text}
                    icon={IntroBlockContent.src}
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
