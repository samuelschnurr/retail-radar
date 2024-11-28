import { InstagramOutlined, TikTokOutlined } from "@ant-design/icons"
import Image from "@features/landingpage/components/Common/Image"
import { Row } from "antd"
import { Link } from "react-router-dom"

import CenteredContainer from "../CenteredContainer"
import { FooterLinks, FooterSection } from "./styles"
import { FooterContentProps } from "./types"

const Footer = (props: FooterContentProps) => {
    const { imageSource } = props

    return (
        <FooterSection>
            <CenteredContainer>
                <Row justify="space-between" align="middle">
                    <Image src={imageSource} width="122px" height="89px" href="/" />
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
            </CenteredContainer>
        </FooterSection>
    )
}

export default Footer
