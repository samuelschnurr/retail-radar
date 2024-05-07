import { Link } from "react-router-dom"
import styled, { css } from "styled-components"

export const ImageContainer = styled(Link)<{
    to?: string
    $shrinkOnMobile?: boolean
    $applyStyling?: boolean
}>`
    display: flex;
    position: relative;
    cursor: ${p => (p.to ? "hand" : "default")};

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

    ${({ $applyStyling }) =>
        $applyStyling &&
        css`
            img {
                border-radius: 4px;
                box-shadow: 0 16px 30px rgb(23 31 114 / 20%);
            }
        `}
`
