import { RootState } from "./types"

export const getHasPermission = (
    state: RootState,
    permission: string
): boolean => state.permissions.includes(permission)
