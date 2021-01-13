import { env } from "~helpers"

const apiUrl = (endpoint: string) => `${env.API_URL}/${endpoint}`

const fetchJSON = (endpoint: string) =>
    fetch(apiUrl(endpoint)).then((res) => res.json())

export async function getMembercount(): Promise<{
    ps: number
    xbox: number
    lastUpdate: string
}> {
    const { PS, XBOX, lastUpdate } = await fetchJSON("member-count")

    return { ps: Number(PS), xbox: Number(XBOX), lastUpdate }
}
