export interface ButtonProps {
    color?: ButtonColor
    children: React.ReactNode
    onClick?: () => void
}

export type ButtonColor = "primary" | "secondary" | "danger" | "warning"
