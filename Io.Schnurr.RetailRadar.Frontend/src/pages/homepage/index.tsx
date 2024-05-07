import { lazy } from "react"

import Footer from "../../components/homepage/Footer"
import Header from "../../components/homepage/Header"
import EndBlockContent from "../../content/EndBlockContent.json"
import HeaderContent from "../../content/HeaderContent.json"
import IntroBlockContent from "../../content/IntroBlockContent.json"
import MiddleBlockContent from "../../content/MiddleBlockContent.json"
const MiddleBlock = lazy(() => import("../../components/homepage/MiddleBlock"))
const Container = lazy(() => import("../../components/common/Container"))
const ScrollToTop = lazy(() => import("../../components/common/ScrollToTop"))
const IntroBlock = lazy(() => import("../../components/homepage/IntroBlock"))
const EndBlock = lazy(() => import("../../components/homepage/EndBlock"))

const Homepage = () => {
    return (
        <>
            <Header src={HeaderContent.src} button={HeaderContent.button} />
            <Container>
                <ScrollToTop />
                <IntroBlock
                    title={IntroBlockContent.title}
                    subTitle={IntroBlockContent.subTitle}
                    icon={IntroBlockContent.src}
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
                    button={EndBlockContent.button}
                    src={EndBlockContent.src}
                />
            </Container>
            <Footer />
        </>
    )
}

export default Homepage
