import { Row } from "antd"
import styled from "styled-components"

export const StyledRow = styled(Row)<{ $flexDirection: string }>`
    flex-direction: ${p => p.$flexDirection};
`
