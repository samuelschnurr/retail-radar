import { StyledContainer } from "./styles"
import { ContainerProps } from "./types"

const Container = (props: ContainerProps) => {
    const { border, children } = props

    return <StyledContainer border={border}>{children}</StyledContainer>
}

export default Container
