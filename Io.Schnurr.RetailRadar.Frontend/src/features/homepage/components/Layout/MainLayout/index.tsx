import Footer from "@features/homepage/components/Layout/Footer"
import Header from "@features/homepage/components/Layout/Header"
import FooterContent from "@features/homepage/locales/FooterContent.json"
import HeaderContent from "@features/homepage/locales/HeaderContent.json"
import React from "react"

import CenteredContainer from "../CenteredContainer"
import { Section } from "./styles"

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
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

export default MainLayout
