import { Row } from "antd"
import styled from "styled-components"

export const ContentSection = styled("section")`
    position: relative;
    padding: 10rem 0 8rem;

    @media only screen and (max-width: ${p => p.theme.breakpoints.large}) {
        padding: 4rem 0 4rem;
    }
`

export const Content = styled("p")`
    margin: 1.5rem 0 2rem 0;
`

export const StyledRow = styled(Row)`
    flex-direction: row-reverse;
`

export const ContentWrapper = styled("div")`
    position: relative;
    max-width: 540px;

    @media only screen and (max-width: 575px) {
        padding-top: 4rem;
    }
`
