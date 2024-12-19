import { Col } from "antd"

import { StyledRow } from "./styles"
import { TwoColumnContainerProps } from "./types"

const TwoColumnContainer = (props: TwoColumnContainerProps) => {
    const { firstColContent, secondColContent, flexDirection = "row" } = props

    return (
        <StyledRow justify="center" align="middle" $flexDirection={flexDirection}>
            <Col lg={14} md={16} xs={24}>
                {firstColContent}
            </Col>
            <Col lg={10} md={8} xs={24}>
                {secondColContent}
            </Col>
        </StyledRow>
    )
}

export default TwoColumnContainer
