import { MouseEventHandler, ReactNode } from "react"

export interface BounceButtonProps {
    icon: ReactNode
    startDelay: number
    intervalDelay: number
    bounceDuration: number
    label: string
    onClick?: MouseEventHandler<HTMLButtonElement>
}
