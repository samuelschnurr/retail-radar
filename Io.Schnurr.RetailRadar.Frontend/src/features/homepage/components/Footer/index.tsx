import { InstagramOutlined, TikTokOutlined } from "@ant-design/icons"
import { Row } from "antd"
import { Link } from "react-router-dom"

import Container from "./../../../../components/Shared/Container"
import Image from "./../../../../components/Shared/Image"
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
                        <Link
                            to="https://www.instagram.com/retailradar.io/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <InstagramOutlined />
                        </Link>
                        <Link
                            to="https://www.tiktok.com/@retailradar.io/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <TikTokOutlined />
                        </Link>
                        <Link to="/datenschutz">Datenschutz</Link>
                        <Link to="/impressum">Impressum</Link>
                    </FooterLinks>
                </Row>
            </Container>
        </FooterSection>
    )
}

export default Footer
