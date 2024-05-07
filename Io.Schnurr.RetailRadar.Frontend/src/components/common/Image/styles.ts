import { Link } from "react-router-dom"
import styled from "styled-components"

export const ImageContainer = styled(Link)<{
    to?: string
}>`
    display: flex;
    position: relative;
    cursor: ${p => (p.to ? "hand" : "default")};
`
