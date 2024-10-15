import styled from "styled-components"

import TwoColumnContainer from "../Layout/TwoColumnContainer"

export const StyledTwoColumnContainer = styled(TwoColumnContainer)`
    flex-direction: row-reverse;

    @media only screen and (max-width: ${p => p.theme.breakpoints.medium}) {
        flex-direction: row;
    }
`
