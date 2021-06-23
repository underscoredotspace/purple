import { Card } from "components"
import AddRemovePermission from "components/admin/AddRemovePermission"
import { getAllPermissions, updatePermission } from "helpers/api"
import React, { useContext } from "react"
import { Dropdown, Message, MessageProps } from "semantic-ui-react"
import { setAllPermissions, SiteContext } from "store"
import { Role } from "types"

const ManagePermissions: React.FC = () => {
    const { dispatch, state } = useContext(SiteContext)
    const [roles, setRoles] = React.useState<Role[]>()
    const [selected, setSelected] = React.useState<string>(null)
    const [selectedRoles, setSelectedRoles] = React.useState<Role[]>()
    const [statusMessage, setStatusMessage] = React.useState<MessageProps>()
    const [formDisabled, setFormDisabled] = React.useState(false)

    const permissions = state.allPermissions

    const isSuperUser = true

    React.useEffect(() => {
        if (!selected) {
            setSelectedRoles([])
            return
        }

        const selectedPermission = permissions.find(
            ({ name }) => name === selected
        )
        setSelectedRoles(selectedPermission.roles)
    }, [selected])

    const getPermissions = () =>
        getAllPermissions()
            .then((res) => {
                setRoles(res.roles)
                dispatch(setAllPermissions(res.permissions))
            })
            .catch(console.error)

    React.useEffect(() => {
        getPermissions()
    }, [])

    if (!roles && !permissions) {
        return null
    }

    const handleSubmit = () => {
        if (
            selectedRoles ===
            permissions.find(({ name }) => name === selected).roles
        ) {
            setStatusMessage({
                warning: true,
                content: "No changes made 🤔",
            })

            setFormDisabled(false)

            setTimeout(() => {
                setStatusMessage(null)
            }, 3000)
            return
        }

        updatePermission({
            name: selected,
            roles: selectedRoles.map((role) => role.id),
        })
            .then(async () => {
                setStatusMessage({
                    success: true,
                    content: `Permission ${selected} updated!`,
                })

                await getPermissions()

                setTimeout(() => {
                    setSelected(null)
                    setStatusMessage(null)
                    setFormDisabled(false)
                }, 3000)
            })
            .catch((error) => {
                setStatusMessage({
                    error: true,
                    header: "Failed to update permission",
                    content: error.message,
                })

                setTimeout(() => {
                    setStatusMessage(null)
                    setFormDisabled(false)
                }, 3000)
            })
    }

    // only me? undeletable permission?
    // create permission
    // rename permission
    // delete permission

    // anyone with MANAGE_PERMISSIONS
    // add role to permission
    // remove role from permission

    return (
        <>
            <Card padding>
                <form
                    className="flex flex-col w-full space-y-2"
                    onSubmit={(e) => {
                        setFormDisabled(true)
                        handleSubmit()
                        e.preventDefault()
                    }}
                >
                    <label
                        htmlFor="permission-dropdown"
                        className="p-1 text-sm uppercase text-discord"
                    >
                        Permission
                    </label>
                    <Dropdown
                        id="permission-dropdown"
                        placeholder="Permission"
                        fluid
                        search
                        selection
                        options={permissions.map((p) => ({
                            text: p.name,
                            value: p.name,
                        }))}
                        onChange={(_, { value }) =>
                            value && setSelected(value.toString())
                        }
                        value={selected}
                        disabled={formDisabled}
                    />
                    {selected ? (
                        <>
                            <Dropdown
                                scrolling
                                placeholder="Roles"
                                fluid
                                search
                                multiple
                                selection
                                options={roles.map((r) => ({
                                    text: r.name,
                                    value: r.id,
                                }))}
                                value={selectedRoles.map((role) => role.id)}
                                onChange={(_, { value }) => {
                                    if (typeof value === "object") {
                                        setSelectedRoles(
                                            value.map((id) =>
                                                roles.find(
                                                    (role) => role.id === id
                                                )
                                            )
                                        )
                                    }
                                }}
                                disabled={formDisabled}
                            />
                            {statusMessage && <Message {...statusMessage} />}
                            <input
                                disabled={formDisabled}
                                type="submit"
                                value="Save Roles"
                                className="bg-green-200 text-black border border-solid border-background px-2 py-1"
                            />
                        </>
                    ) : (
                        <p>Select a permission to change</p>
                    )}
                </form>
            </Card>

            {isSuperUser && (
                <AddRemovePermission getPermissions={getPermissions} />
            )}
        </>
    )
}

export default ManagePermissions
