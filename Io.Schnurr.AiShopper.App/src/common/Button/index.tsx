import { StyledButton } from "./styles"
import { ButtonProps } from "./types"

const Button = (props: ButtonProps) => {
    const { color, children, onClick } = props

    return (
        <StyledButton color={color} onClick={onClick}>
            {children}
        </StyledButton>
    )
}

export default Button
