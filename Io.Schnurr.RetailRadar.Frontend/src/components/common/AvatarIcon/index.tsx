import { Avatar } from "@chatscope/chat-ui-kit-react"

import { AvatarIconProps } from "./types"

const AvatarIcon = (props: AvatarIconProps) => {
    const { src, info, status } = props

    return <Avatar name={info} src={`/images/${src}`} status={status} />
}

export default AvatarIcon
