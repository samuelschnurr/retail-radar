import Content from "@features/homepage/components/Common/ContentParagraph"
import { Col, Row } from "antd"

import { StyledSection } from "./styles"
import { CommonSectionProps } from "./types"

const CommonSection = (props: CommonSectionProps) => {
    const { content, htmlContent } = props

    return (
        <StyledSection>
            {content?.map((item, itemIndex) => (
                <Row key={itemIndex} justify="space-between" align="middle">
                    <Col xs={24}>
                        <h6>{item.title}</h6>
                        {item.subTitle ?? <Content content={item.subTitle} />}
                        {item.texts.map((text, textIndex) => (
                            <Content key={textIndex} content={text} />
                        ))}
                    </Col>
                </Row>
            ))}
            {htmlContent && <div dangerouslySetInnerHTML={{ __html: htmlContent.content }} />}
            {/* TODO: Sanitize? */}
        </StyledSection>
    )
}

export default CommonSection
