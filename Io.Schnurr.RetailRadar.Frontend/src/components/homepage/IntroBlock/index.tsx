import { Col, Row } from "antd"
import { Fade } from "react-awesome-reveal"

import Image from "../../common/Image"
import { Content, ContentSection, ContentWrapper } from "./styles"
import { IntroBlockProps } from "./types"

const IntroBlock = (props: IntroBlockProps) => {
    const { icon, title, subTitle } = props

    return (
        <ContentSection id="intro">
            <Fade direction="right" triggerOnce>
                <Row justify="space-between" align="middle">
                    <Col lg={14} md={16} xs={24}>
                        <ContentWrapper>
                            <h6>{title}</h6>
                            <Content>{subTitle}</Content>
                        </ContentWrapper>
                    </Col>
                    <Col lg={10} md={8} xs={24}>
                        <Image src={icon} width="100%" height="100%" />
                    </Col>
                </Row>
            </Fade>
        </ContentSection>
    )
}

export default IntroBlock
