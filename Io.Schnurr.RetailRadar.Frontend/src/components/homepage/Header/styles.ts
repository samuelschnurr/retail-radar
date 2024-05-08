import { Row } from "antd"
import styled from "styled-components"

export const HeaderSection = styled("header")`
    padding: 1rem 0.5rem;

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
