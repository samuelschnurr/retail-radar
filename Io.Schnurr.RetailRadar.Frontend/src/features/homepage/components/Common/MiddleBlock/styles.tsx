import { Row } from "antd"
import styled from "styled-components"

export const MiddleBlockSection = styled("section")`
    position: relative;
    padding: 8rem 0 8rem;
    text-align: center;
    justify-content: center;

    @media only screen and (max-width: ${p => p.theme.breakpoints.large}) {
        padding: 2rem 0 2rem;
    }
`
export const StyledRow = styled(Row)`
    flex-direction: row-reverse;

    @media only screen and (max-width: ${p => p.theme.breakpoints.medium}) {
        flex-direction: row;
    }
`
