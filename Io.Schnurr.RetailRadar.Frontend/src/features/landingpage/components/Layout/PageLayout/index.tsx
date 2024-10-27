import Footer from "@features/landingpage/components/Layout/Footer"
import Header from "@features/landingpage/components/Layout/Header"
import FooterContent from "@features/landingpage/locales/de/FooterContent.json"
import HeaderContent from "@features/landingpage/locales/de/HeaderContent.json"

import CenteredContainer from "../CenteredContainer"
import { Section } from "./styles"
import { PageLayoutProps } from "./types"

const PageLayout = (props: PageLayoutProps) => {
    const { children } = props

    return (
        <>
            <Header src={HeaderContent.src} button={HeaderContent.button} />
            <Section>
                <CenteredContainer>{children}</CenteredContainer>
            </Section>
            <Footer src={FooterContent.src} />
        </>
    )
}

export default PageLayout
