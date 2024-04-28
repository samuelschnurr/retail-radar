import { Button } from "@chatscope/chat-ui-kit-react"
import { useHookstate } from "@hookstate/core"
import { MouseEventHandler, ReactNode } from "react"

import useInterval from "../../hooks/useInterval"
import styles from "./BounceButton.module.css"
interface BounceButtonProps {
    icon: ReactNode
    startDelay: number
    intervalDelay: number
    bounceDuration: number
    onClick: MouseEventHandler | undefined
}

const BounceButton = (props: BounceButtonProps) => {
    const { startDelay, intervalDelay, bounceDuration, onClick } = props
    const isBouncing = useHookstate(false)
    const intervalCount = useHookstate(0)
    const isFirstRun = intervalCount.get() === 0

    useInterval(
        () => {
            intervalCount.set(i => i + 1)
            isBouncing.set(true)

            setTimeout(() => {
                isBouncing.set(false)
            }, bounceDuration)
        },
        isFirstRun ? startDelay : isBouncing.get() ? null : intervalDelay
    )

    const animationStyle: { [key: string]: string | number } = {
        "animation-delay": `"${startDelay}ms"`
    }

    return (
        <Button
            onClick={onClick}
            icon={props.icon}
            className={isBouncing.get() ? styles.bounce : ""}
            style={animationStyle}
        />
    )
}

export default BounceButton
