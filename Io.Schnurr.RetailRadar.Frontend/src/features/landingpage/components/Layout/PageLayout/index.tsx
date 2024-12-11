import Footer from "@features/landingpage/components/Layout/Footer"
import Header from "@features/landingpage/components/Layout/Header"

import CenteredContainer from "../CenteredContainer"
import { Section } from "./styles"
import { PageLayoutProps } from "./types"

const PageLayout = (props: PageLayoutProps) => {
    const { children } = props

    return (
        <>
            <Header
                imageSource={props.headerContent.imageSource}
                buttonLabel={props.headerContent.buttonLabel}
                buttonUrl={props.headerContent.buttonUrl}
            />
            <Section>
                <CenteredContainer>{children}</CenteredContainer>
            </Section>
            <Footer
                imageSource={props.footerContent.imageSource}
                instagramLink={props.footerContent.instagramLink}
                tiktokLink={props.footerContent.tiktokLink}
                links={props.footerContent.links}
            />
        </>
    )
}

export default PageLayout
