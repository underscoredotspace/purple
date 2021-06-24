import { getMarkdown } from "helpers/api"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"

const BusinessGuides: React.FC = () => {
    const [markdown, setMarkdown] = useState<string>()

    useEffect(() => {
        getMarkdown("business-guides")
            .then((md) => md && setMarkdown(md))
            .catch(() => setMarkdown("**access denied**"))
    }, [])

    return <ReactMarkdown>{markdown}</ReactMarkdown>
}

export default BusinessGuides
