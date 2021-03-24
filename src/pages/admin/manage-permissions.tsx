import { getAllPermissions } from "helpers/api"
import React from "react"
import { Permission, Role } from "types"

interface ComponentState {
    permissions: Permission[]
    roles: Role[]
}

const ManagePermissions: React.FC = () => {
    const [state, setRBAC] = React.useState<ComponentState>()

    React.useEffect(() => {
        getAllPermissions().then(setRBAC).catch(console.error)
    }, [])

    // only me? undeletable permission?
    // create permission
    // rename permission
    // delete permission

    // anyone with MANAGE_PERMISSIONS
    // add role to permission
    // remove role from permission

    return state ? <>Manage Permissions</> : null
}

export default ManagePermissions
