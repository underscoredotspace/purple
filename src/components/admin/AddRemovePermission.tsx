import { Card } from "components/Card"
import { addPermission, deletePermission } from "helpers/api"
import React, { useContext, useEffect } from "react"
import { Dropdown, Input, Message, MessageProps } from "semantic-ui-react"
import { SiteContext } from "store"

interface AddRemovePermissionsProps {
    getPermissions: () => void
}

const AddRemovePermission: React.FC<AddRemovePermissionsProps> = ({
    getPermissions,
}) => {
    const { state } = useContext(SiteContext)
    const permissions = state.allPermissions

    const [selected, setSelected] = React.useState("")
    const [newPermission, setNewPermission] = React.useState("")
    const [statusMessageAdd, setStatusMessageAdd] = React.useState<
        MessageProps
    >()
    const [statusMessageDelete, setStatusMessageDelete] = React.useState<
        MessageProps
    >()
    const [addFormDisabled, setAddFormDisabled] = React.useState(false)
    const [deleteFormDisabled, setDeleteFormDisabled] = React.useState(false)

    useEffect(() => {
        setTimeout(() => {
            setStatusMessageAdd(null)
        }, 3000)
    }, [statusMessageAdd])

    useEffect(() => {
        setTimeout(() => {
            setStatusMessageDelete(null)
        }, 3000)
    }, [statusMessageDelete])

    function handleDeletePermission(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (!selected) {
            setStatusMessageDelete({
                warning: true,
                content: "Select a permission to delete",
            })
            return
        }

        setDeleteFormDisabled(true)

        deletePermission(selected)
            .then(() => {
                setStatusMessageDelete({
                    success: true,
                    content: `Permission ${selected} deleted`,
                })
            })
            .catch((error) => {
                setStatusMessageDelete({
                    error: true,
                    content: "Something went wrong",
                })
                console.error(error)
            })
            .finally(() => {
                setDeleteFormDisabled(false)
                setSelected(null)
                getPermissions()
            })
    }

    function handleAddPermission(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setNewPermission(formatPermission(newPermission))

        if (newPermission.trim().length === 0) {
            setStatusMessageAdd({
                warning: true,
                content: "Give the permission a name",
            })
            return
        }

        if (!window.confirm(`Add ${newPermission}?`)) {
            return
        }

        setAddFormDisabled(true)

        addPermission({ name: newPermission, roles: [] })
            .then(() => {
                setStatusMessageAdd({
                    success: true,
                    content: `New permission ${newPermission} created`,
                })
            })
            .catch((error) => {
                setStatusMessageAdd({
                    error: true,
                    content: "Something went wrong",
                })
                console.error(error)
            })
            .finally(() => {
                setAddFormDisabled(false)
                setNewPermission("")
                getPermissions()
            })
    }

    const formatPermission = (val: string): string =>
        Array.from(val.toUpperCase())
            .map((l) => (/\s/.test(l) ? "_" : l))
            .join("")
            .replaceAll(/_{1,}/g, "_")
            .replaceAll(/[^A-Z_]/g, "")
            .replace(/^_/, "")
            .replace(/_$/, "")

    return (
        <>
            <Card padding>
                <form
                    className="flex flex-col w-full space-y-2"
                    onSubmit={handleAddPermission}
                >
                    <InputField
                        field="New Permission"
                        value={newPermission}
                        onChange={(val) =>
                            setNewPermission(formatPermission(val))
                        }
                    />

                    {statusMessageAdd && <Message {...statusMessageAdd} />}
                    <input
                        disabled={addFormDisabled}
                        type="submit"
                        value="Add New Role"
                        className="bg-green-200 text-black border border-solid border-background px-2 py-1"
                    />
                </form>
            </Card>

            <Card padding>
                <form
                    className="flex flex-col w-full space-y-2"
                    onSubmit={handleDeletePermission}
                >
                    <label
                        htmlFor="delete-permission-dropdown"
                        className="p-1 text-sm uppercase text-discord"
                    >
                        Delete Permission
                    </label>
                    <Dropdown
                        id="delete-permission-dropdown"
                        placeholder="Select Permission"
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
                        disabled={deleteFormDisabled}
                    />

                    {statusMessageDelete && (
                        <Message {...statusMessageDelete} />
                    )}
                    <input
                        disabled={deleteFormDisabled}
                        type="submit"
                        value="Delete Role"
                        className="bg-red-200 text-black border border-solid border-background px-2 py-1"
                    />
                </form>
            </Card>
        </>
    )
}

type HandleChange = (value: string) => void

interface InputFieldProps {
    field: string
    value: string
    onChange: HandleChange
}

const InputField: React.FC<InputFieldProps> = ({ field, value, onChange }) => (
    <div className={`flex flex-col`}>
        <label
            htmlFor={`input-field-${field}`}
            className="p-1 text-sm uppercase text-discord"
        >
            {field}
        </label>

        <Input
            className=""
            type="text"
            name={field}
            id={`staff-profile-field-${field}`}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
)

export default AddRemovePermission
