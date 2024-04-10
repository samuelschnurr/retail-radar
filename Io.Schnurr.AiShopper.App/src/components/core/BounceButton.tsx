import { Button } from "@chatscope/chat-ui-kit-react"
import { IconLookup, IconName, IconPrefix } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useHookstate } from "@hookstate/core"

import useInterval from "../../hooks/useInterval"

interface BounceButtonProps {
    icon: IconName | [IconPrefix, IconName] | IconLookup
    startDelay: number
    intervalDelay: number
    bounceDuration: number
}

const BounceButton = (props: BounceButtonProps) => {
    const { icon, startDelay, intervalDelay, bounceDuration } = props
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
        "--fa-animation-delay": `"${startDelay}ms"`
    }

    return (
        <Button
            icon={<FontAwesomeIcon icon={icon} bounce={isBouncing.get()} />}
            style={animationStyle}
        />
    )
}

export default BounceButton
