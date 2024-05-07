import { Link } from "react-router-dom"
import styled, { css } from "styled-components"

export const ImageContainer = styled(Link)<{
    to?: string
    $centerOnMobile?: boolean
}>`
    display: flex;
    position: relative;
    cursor: ${p => (p.to ? "hand" : "default")};

    ${({ $centerOnMobile }) =>
        $centerOnMobile &&
        css`
            @media only screen and (max-width: ${p => p.theme.breakpoints.medium}) {
                img {
                    max-width: 75%;
                    margin: auto;
                }
            }
        `}
`
