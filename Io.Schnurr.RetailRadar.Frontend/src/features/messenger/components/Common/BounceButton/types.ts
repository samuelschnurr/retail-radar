import { MouseEventHandler, ReactNode } from "react"

export interface BounceButtonProps {
    icon: ReactNode
    startDelay: number
    intervalDelay: number
    bounceDuration: number
    title: string
    onClick?: MouseEventHandler<HTMLButtonElement>
}
