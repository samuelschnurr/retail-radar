import TwoColumnContainer from "@features/landingpage/components/Layout/TwoColumnContainer"
import styled from "styled-components"

export const StyledTwoColumnContainer = styled(TwoColumnContainer)`
    flex-direction: row-reverse;

    @media only screen and (max-width: ${p => p.theme.breakpoints.medium}) {
        flex-direction: row;
    }
`
