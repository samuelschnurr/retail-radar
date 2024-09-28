import Button from "@features/homepage/components/Button"
import Content from "@features/homepage/components/Content"
import Image from "@features/homepage/components/Image"
import { Col, Row } from "antd"
import { Slide } from "react-awesome-reveal"

import { EndBlockSection, StyledImageContainer } from "./styles"
import { EndBlockProps } from "./types"

const EndBlock = (props: EndBlockProps) => {
    const { title, subTitle, subTitle2, src } = props
    return (
        <EndBlockSection>
            <Slide direction="right" triggerOnce>
                <h6>{title}</h6>
                <Row justify="center" align="middle">
                    <Col lg={14} md={16} xs={24}>
                        <Content content={subTitle} />
                        <Content content={subTitle2} />
                        <Content
                            content={
                                <Button
                                    onClick={() => {
                                        window.open("https://ko-fi.com/sampa", "_blank")
                                    }}>
                                    <StyledImageContainer>
                                        <Image height="40px" width="60px" src="/button/kofi.png" />
                                        Mit einem Kaffee unterstützen
                                    </StyledImageContainer>
                                </Button>
                            }
                        />
                    </Col>
                    <Col lg={10} md={8} xs={24}>
                        <Content
                            content={
                                <Image src={src} width="100%" height="100%" shrinkOnMobile={true} />
                            }
                        />
                    </Col>
                </Row>
            </Slide>
        </EndBlockSection>
    )
}

export default EndBlock
