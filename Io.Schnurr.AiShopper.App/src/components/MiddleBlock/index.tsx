import { Col, Row } from "antd"
import { Slide } from "react-awesome-reveal"

import { Button } from "../../common/Button"
import { Content, ContentWrapper, MiddleBlockSection } from "./styles"

interface MiddleBlockProps {
    title: string
    content: string
    button: string
}

const MiddleBlock = ({ title, content, button }: MiddleBlockProps) => {
    return (
        <MiddleBlockSection>
            <Slide direction="up" triggerOnce>
                <Row justify="center" align="middle">
                    <ContentWrapper>
                        <Col lg={24} md={24} sm={24} xs={24}>
                            <h6>{title}</h6>
                            <Content>{content}</Content>
                            {button && <Button>{button}</Button>}
                        </Col>
                    </ContentWrapper>
                </Row>
            </Slide>
        </MiddleBlockSection>
    )
}

export default MiddleBlock
