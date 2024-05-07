import { Col, Row } from "antd"
import { Fade } from "react-awesome-reveal"

import Image from "../../common/Image"
import { Content, ContentSection } from "./styles"
import { IntroBlockProps } from "./types"

const IntroBlock = (props: IntroBlockProps) => {
    const { src, title, subTitle } = props

    return (
        <ContentSection id="intro">
            <Fade direction="right" triggerOnce>
                <Row justify="space-between" align="middle">
                    <Col lg={14} md={16} xs={24}>
                        <div>
                            <h6>{title}</h6>
                            <Content>{subTitle}</Content>
                        </div>
                    </Col>
                    <Col lg={10} md={8} xs={24}>
                        <Image src={src} width="100%" height="100%" shrinkOnMobile={true} />
                    </Col>
                </Row>
            </Fade>
        </ContentSection>
    )
}

export default IntroBlock
