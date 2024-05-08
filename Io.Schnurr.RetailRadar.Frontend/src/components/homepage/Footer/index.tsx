import { Row } from "antd"
import { Link } from "react-router-dom"

import Container from "../../common/Container"
import Image from "../../common/Image"
import { FooterLinks, FooterSection } from "./styles"

const Footer = () => {
    return (
        <FooterSection>
            <Container>
                <Row justify="space-between" align="middle">
                    <Image src="/logo/logo.png" width="179px" height="64px" href="/" />
                    <FooterLinks>
                        <Link to="/datenschutz">Datenschutz</Link>
                        <Link to="/impressum">Impressum</Link>
                    </FooterLinks>
                </Row>
            </Container>
        </FooterSection>
    )
}

export default Footer
