import { Card } from "antd"
import styled from "styled-components"

import { noSelect } from "../../../styles/sharedStyles"

export const StyledCardList = styled("div")`
    position: absolute;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: fit-content;
    width: fit-content;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    gap: ${p => p.theme.font.size.medium};
`

export const StyledCard = styled(Card)`
    width: 300px;
    cursor: pointer;
    border-radius: ${p => p.theme.border.radius};
    box-shadow: ${p => p.theme.box.shadow};
    padding: ${p => p.theme.padding.small};
    ${noSelect}
`
