import { Col, Row } from "antd"

import { TwoColumnContainerProps } from "./types"

const TwoColumnContainer = (props: TwoColumnContainerProps) => {
    const { firstColContent, secondColContent } = props

    return (
        <Row justify="center" align="middle">
            <Col lg={14} md={16} xs={24}>
                {firstColContent}
            </Col>
            <Col lg={10} md={8} xs={24}>
                {secondColContent}
            </Col>
        </Row>
    )
}

export default TwoColumnContainer
