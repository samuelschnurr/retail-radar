import { Col } from "antd"
import { Fade } from "react-awesome-reveal"

import Logo from "../../common/Logo"
import { Content, ContentSection, ContentWrapper, StyledRow } from "./styles"
import { IntroBlockProps } from "./types"

const IntroBlock = (props: IntroBlockProps) => {
    const { icon, title, content } = props

    return (
        <ContentSection id="intro">
            <Fade direction="right" triggerOnce>
                <StyledRow justify="space-between" align="middle">
                    <Col lg={11} md={11} sm={12} xs={24}>
                        <Logo src={icon} width="100%" height="100%" />
                    </Col>
                    <Col lg={11} md={11} sm={11} xs={24}>
                        <ContentWrapper>
                            <h6>{title}</h6>
                            <Content>{content}</Content>
                        </ContentWrapper>
                    </Col>
                </StyledRow>
            </Fade>
        </ContentSection>
    )
}

export default IntroBlock
