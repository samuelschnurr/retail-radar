import { Row } from "antd"
import styled from "styled-components"

export interface TwoColumnContainerProps {
    firstColContent: React.ReactNode
    secondColContent: React.ReactNode
    flexDirection?: "row" | "row-reverse"
}

export const StyledRow = styled(Row)<{ flexDirection: string }>`
    flex-direction: ${p => p.flexDirection};
`
