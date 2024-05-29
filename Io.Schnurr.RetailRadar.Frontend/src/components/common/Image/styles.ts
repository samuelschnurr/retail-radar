import { Link } from "react-router-dom"
import styled, { css } from "styled-components"

export const ImageContainer = styled(Link)<{
    to?: string
    $shrinkOnMobile?: boolean
}>`
    display: flex;
    position: relative;
    cursor: ${p => (p.to ? "pointer" : "default")};

    img {
        margin: auto;
    }

    ${({ $shrinkOnMobile }) =>
        $shrinkOnMobile &&
        css`
            @media only screen and (max-width: ${p => p.theme.breakpoints.medium}) {
                img {
                    max-width: 75%;
                }
            }
        `}
`
