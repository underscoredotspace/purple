import { Card } from "components/Card"
import { addPermission } from "helpers/api"
import React, { useEffect } from "react"
import { Message, MessageProps } from "semantic-ui-react"

interface AddRemovePermissionsProps {
    getPermissions: () => void
}

const AddRemovePermission: React.FC<AddRemovePermissionsProps> = ({
    getPermissions,
}) => {
    const [newPermission, setNewPermission] = React.useState("")
    const [statusMessage, setStatusMessage] = React.useState<MessageProps>()
    const [formDisabled, setFormDisabled] = React.useState(false)

    useEffect(() => {
        setTimeout(() => {
            setStatusMessage(null)
        }, 3000)
    }, [statusMessage])

    function handleAddPermission(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (newPermission.trim().length === 0) {
            setStatusMessage({
                warning: true,
                content: "Give the permission a name",
            })
            return
        }

        setFormDisabled(true)

        addPermission({ name: newPermission, roles: [] })
            .then(() => {
                setStatusMessage({
                    success: true,
                    content: `New permission ${newPermission} created`,
                })
            })
            .catch((error) => {
                setStatusMessage({
                    error: true,
                    content: "Something went wrong",
                })
                console.error(error)
            })
            .finally(() => {
                setFormDisabled(false)
                setNewPermission(null)
                getPermissions()
            })
    }

    function formatPermission(val: string): string {
        return val
    }

    return (
        <Card padding>
            <form
                className="flex flex-col w-full space-y-2"
                onSubmit={handleAddPermission}
            >
                <InputField
                    field="New Permission"
                    value={newPermission}
                    onChange={(val) => setNewPermission(formatPermission(val))}
                />

                {statusMessage && <Message {...statusMessage} />}
                <input
                    onChange={(e) => setNewPermission(e.target.value)}
                    disabled={formDisabled}
                    type="submit"
                    value="Save Roles"
                    className="bg-green-200 text-black border border-solid border-background px-2 py-1"
                />
            </form>
        </Card>
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

        <input
            className="bg-card border border-background px-2 py-1"
            type="text"
            name={field}
            id={`staff-profile-field-${field}`}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
)

export default AddRemovePermission
