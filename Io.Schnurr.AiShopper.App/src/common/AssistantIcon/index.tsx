import { Avatar, AvatarProps } from "@chatscope/chat-ui-kit-react"

export interface AssistantIconProps extends AvatarProps {
    info: string
    as?: string | typeof Avatar
}
export const AssistantIcon = ({ src, info, status }: AssistantIconProps) => (
    <Avatar name={info} src={`/images/assistant/${src}`} status={status} />
)
