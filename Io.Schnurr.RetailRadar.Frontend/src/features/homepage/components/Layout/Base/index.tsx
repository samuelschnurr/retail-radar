import Header from "@features/homepage/components/Layout/Header"
import Footer from "@features/homepage/components/Layout/Footer"
import FooterContent from "@features/homepage/locales/FooterContent.json"
import HeaderContent from "@features/homepage/locales/HeaderContent.json"
import React from "react"

import Container from "../Container"

interface BaseProps {
    children: React.ReactNode
}

const Base: React.FC<BaseProps> = ({ children }) => {
    return (
        <>
            <Header src={HeaderContent.src} button={HeaderContent.button} />
            <Container>{children}</Container>
            <Footer src={FooterContent.src} />
        </>
    )
}

export default Base
