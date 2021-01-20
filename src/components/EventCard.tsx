import { env } from "helpers"
import { Card } from "./Card"
import { LazyImage, SectionTitle } from "./primitives"

export interface EventCardProps {
    title: string
    src: string
    width: number
    height: number
}

export const EventCard: React.FC<EventCardProps> = ({
    title,
    src,
    width,
    height,
    children,
}) => (
    <Card>
        <SectionTitle type="h4" className="bg-blue-900 p-2 text-center">
            {title}
        </SectionTitle>

        <LazyImage
            src={`${env.ASSETS}/640/640__events_${src}`}
            width={width}
            height={height}
            alt={title}
        />

        <p className="px-4 py-2">{children}</p>
    </Card>
)
