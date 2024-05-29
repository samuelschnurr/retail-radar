import { Row } from "antd"
import { Link } from "react-router-dom"

import Container from "../../common/Container"
import Image from "../../common/Image"
import { FooterLinks, FooterSection } from "./styles"
import { FooterContentProps } from "./types"

const Footer = (props: FooterContentProps) => {
    const { src } = props

    return (
        <FooterSection>
            <Container>
                <Row justify="space-between" align="middle">
                    <Image src={src} width="122px" height="89px" href="/" />
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
