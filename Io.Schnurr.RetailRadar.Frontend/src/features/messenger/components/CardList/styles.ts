import { Card } from "antd"
import styled from "styled-components"

import { noSelect } from "../../../../styles/sharedStyles"

export const StyledCardList = styled("div")`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-top: ${p => p.theme.margin.medium};
    margin-bottom: ${p => p.theme.margin.medium};
    gap: ${p => p.theme.gap.medium};
`

export const StyledCard = styled(Card)`
    width: 300px;
    cursor: pointer;
    border-radius: ${p => p.theme.border.radius};
    box-shadow: ${p => p.theme.box.shadow};
    padding: ${p => p.theme.padding.small};
    ${noSelect}
`
