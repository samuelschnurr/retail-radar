import Content from "@features/landingpage/components/Common/ContentParagraph"
import { Col, Row } from "antd"

import { StyledSection } from "./styles"
import { CommonSectionProps } from "./types"

const CommonSection = (props: CommonSectionProps) => {
    const { content, htmlContent } = props

    return (
        <StyledSection>
            {content && (
                <Row justify="space-between" align="middle">
                    <Col xs={24}>
                        <h6>{content.title}</h6>
                        {content.subTitle ?? <Content content={content.subTitle} />}
                        {content.paragraphs.map((text, textIndex) => (
                            <Content key={textIndex} content={text} />
                        ))}
                    </Col>
                </Row>
            )}
            {htmlContent && <div dangerouslySetInnerHTML={{ __html: htmlContent.content }} />}
            {/* TODO: Sanitize? */}
        </StyledSection>
    )
}

export default CommonSection
