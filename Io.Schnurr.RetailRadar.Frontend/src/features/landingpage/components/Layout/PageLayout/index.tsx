import Footer from "@features/landingpage/components/Layout/Footer"
import Header from "@features/landingpage/components/Layout/Header"
import FooterContent from "@features/landingpage/locales/de/FooterContent.json"

import CenteredContainer from "../CenteredContainer"
import { Section } from "./styles"
import { PageLayoutProps } from "./types"

const PageLayout = (props: PageLayoutProps) => {
    const { children } = props

    return (
        <>
            <Header
                logoSource={props.headerContent.logoSource}
                buttonText={props.headerContent.buttonText}
                buttonLink={props.headerContent.buttonLink}
            />
            <Section>
                <CenteredContainer>{children}</CenteredContainer>
            </Section>
            <Footer imageSource={FooterContent.imageSource} />
        </>
    )
}

export default PageLayout
