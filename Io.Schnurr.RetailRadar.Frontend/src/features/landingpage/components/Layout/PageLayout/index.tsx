import Footer from "@features/landingpage/components/Layout/Footer"
import Header from "@features/landingpage/components/Layout/Header"
import FooterContent from "@features/landingpage/locales/de/FooterContent.json"
import { useTranslation } from "react-i18next"

import CenteredContainer from "../CenteredContainer"
import { Section } from "./styles"
import { PageLayoutProps } from "./types"

const PageLayout = (props: PageLayoutProps) => {
    const { children } = props
    const { t } = useTranslation("Header")

    return (
        <>
            <Header
                logoSource={t("logoSource")}
                buttonText={t("buttonText")}
                buttonLink={t("buttonLink")}
            />
            <Section>
                <CenteredContainer>{children}</CenteredContainer>
            </Section>
            <Footer src={FooterContent.src} />
        </>
    )
}

export default PageLayout
