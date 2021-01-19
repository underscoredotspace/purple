import { env } from "helpers"
import React from "react"
import { Card } from "./Card"
import { LazyImage } from "./primitives"

interface PictureProps {
    title?: string
    subtitle: string
    src: string
    width: number
    height: number
}

export const Picture: React.FC<PictureProps> = ({
    title,
    subtitle,
    src,
    width,
    height,
}) => {
    return (
        <Card nopadding className="w-full max-w-xl mb-4">
            <LazyImage
                src={`${env.ASSETS}/640/640__${src}`}
                alt={subtitle}
                width={width}
                height={height}
                className="flex justify-center items-center w-full h-64 bg-background object-cover object-top"
            />
            <div
                className={[
                    "flex",
                    "flex-col",
                    "justify-end",
                    "text-copy",
                    "p-3",
                ].join(" ")}
            >
                {title && <div className="font-bold">@{title}</div>}
                <div className="font-light text-sm">{subtitle}</div>
            </div>
        </Card>
    )
}
