import { Avatar, UserStatus } from "@chatscope/chat-ui-kit-react"
import { AvatarProps } from "antd"

export interface AssistantIconProps extends AvatarProps {
    src: string
    info: string
    status: string
    as?: string | typeof Avatar
}
export const AssistantIcon = ({ src, info, status }: AssistantIconProps) => (
    <Avatar name={info} src={`/images/assistant/${src}`} status={status as UserStatus} />
)
