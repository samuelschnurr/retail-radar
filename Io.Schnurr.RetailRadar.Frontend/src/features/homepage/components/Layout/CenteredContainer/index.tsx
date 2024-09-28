import { StyledCenteredContainer } from "./styles"
import { CenteredContainerProps } from "./types"

const CenteredContainer = (props: CenteredContainerProps) => {
    const { border, children } = props

    return <StyledCenteredContainer border={border}>{children}</StyledCenteredContainer>
}

export default CenteredContainer
