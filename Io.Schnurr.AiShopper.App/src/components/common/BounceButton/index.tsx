import { useHookstate } from "@hookstate/core"

import useInterval from "../../../hooks/useInterval"
import { StyledBounceButton } from "./styles"
import { BounceButtonProps } from "./types"

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

    return (
        <StyledBounceButton
            onClick={onClick}
            icon={props.icon}
            isBouncing={isBouncing.get()}
            startDelay={startDelay}
        />
    )
}

export default BounceButton
