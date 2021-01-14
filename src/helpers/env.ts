interface Environment {
    API_URL: string
    ASSETS: string
    ENABLE_LOGIN: boolean
    ENABLE_ANALYTICS: boolean
    INVITE_CODE: string
}

const API_URL = process.env["NEXT_PUBLIC_API_URL"]
const ASSETS = process.env["NEXT_PUBLIC_ASSETS"]
const ENABLE_LOGIN = process.env["NEXT_PUBLIC_ENABLE_LOGIN"] === "True"
const ENABLE_ANALYTICS = process.env["NEXT_PUBLIC_ENABLE_ANALYTICS"] === "True"
const INVITE_CODE = process.env["NEXT_PUBLIC_INVITE_CODE"]

export const env = {
    API_URL,
    ASSETS,
    ENABLE_LOGIN,
    ENABLE_ANALYTICS,
    INVITE_CODE,
} as Environment
