import { StyledTextButton } from "./styles"
import { TextButtonProps } from "./types"

const TextButton = (props: TextButtonProps) => {
    const { onClick, children } = props

    return <StyledTextButton onClick={onClick}>{children}</StyledTextButton>
}

export default TextButton
