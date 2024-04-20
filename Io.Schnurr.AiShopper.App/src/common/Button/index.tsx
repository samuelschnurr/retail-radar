import { ButtonProps } from "../types"
import { StyledButton } from "./styles"

export const Button = ({ color, children, onClick }: ButtonProps) => (
    <StyledButton color={color} onClick={onClick}>
        {children}
    </StyledButton>
)
