import { useHookstate } from "@hookstate/core"
import useInterval from "@lib/hooks/useInterval"

import { StyledBounceButton } from "./styles"
import { BounceButtonProps } from "./types"

const BounceButton = (props: BounceButtonProps) => {
    const { startDelay, intervalDelay, bounceDuration, label, onClick } = props
    const isBouncing = useHookstate(false)
    const intervalCount = useHookstate(0)
    const isFirstRun = intervalCount.get() === 0

    const startBouncing = async () => {
        try {
            intervalCount.set(i => i + 1)
            isBouncing.set(true)

            setTimeout(() => {
                try {
                    isBouncing.set(false)
                } catch (error) {
                    console.error(
                        `An error occured while using useInterval within startBouncing: ${error}`
                    )
                }
            }, bounceDuration)
        } catch (error) {
            console.error(`An error occured while using useInterval within startBouncing: ${error}`)
        }
    }

    useInterval(startBouncing, isFirstRun ? startDelay : isBouncing.get() ? null : intervalDelay)

    return (
        <StyledBounceButton
            onClick={onClick}
            icon={props.icon}
            title={label}
            $isBouncing={isBouncing.get()}
            $startDelay={startDelay}
        />
    )
}

export default BounceButton
