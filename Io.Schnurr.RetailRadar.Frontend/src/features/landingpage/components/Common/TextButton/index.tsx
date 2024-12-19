import { StyledTextButton } from "./styles"
import { TextButtonProps } from "./types"

const TextButton = (props: TextButtonProps) => {
    const { onClick, children, isActive } = props

    return (
        <StyledTextButton active={isActive} onClick={onClick}>
            {children}
        </StyledTextButton>
    )
}

export default TextButton
