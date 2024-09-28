import Content from "@features/homepage/components/Content"
import { Col, Row } from "antd"

import { CommonSection } from "./styles"
import { CommonBlockProps } from "./types"

const CommonBlock = (props: CommonBlockProps) => {
    const { content } = props

    return (
        <CommonSection>
            {content.map((item, itemIndex) => (
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
        </CommonSection>
    )
}

export default CommonBlock
