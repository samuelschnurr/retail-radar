import { Row } from "antd"
import styled from "styled-components"

export const HeaderSection = styled("header")`
    .ant-row-space-between {
        align-items: center;
        text-align: center;
    }
`
export const StyledRow = styled(Row)`
    @media screen and (max-width: ${p => p.theme.breakpoints.medium}) {
        justify-content: center;
        gap: 5rem;
    }
`
