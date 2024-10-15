export type ButtonColor = "primary" | "secondary" | "danger" | "warning"

export interface ButtonProps {
    color?: ButtonColor
    children: React.ReactNode
    onClick?: () => void
}
