import { RunStatus } from "./runStatus"

export type Run = {
    id: string
    // eslint-disable-next-line no-restricted-globals
    status: RunStatus
}
