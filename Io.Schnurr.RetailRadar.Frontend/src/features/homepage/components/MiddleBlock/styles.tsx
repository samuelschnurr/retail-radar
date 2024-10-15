import styled from "styled-components"

import TwoColumnRow from "../Layout/TwoColumnContainer"

export const StyledTwoColumnRow = styled(TwoColumnRow)`
    flex-direction: row-reverse;

    @media only screen and (max-width: ${p => p.theme.breakpoints.medium}) {
        flex-direction: row;
    }
`
