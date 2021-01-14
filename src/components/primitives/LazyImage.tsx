import { env } from "helpers"
import React, { ReactNode, useEffect, useState } from "react"

interface LazyImageProps {
    className?: string
    placeholder?: ReactNode
    src: string
    alt: string
    height?: number
    width?: number
}

const defaultPlaceholder = (
    <img
        src={`${env.ASSETS}/logo-8.png`}
        className="w-8 h-8 animate-bounce"
        alt=""
    />
)

export const LazyImage: React.FC<LazyImageProps> = ({
    className,
    placeholder = defaultPlaceholder,
    src,
    alt,
    width,
    height,
}) => {
    const [loaded, setLoaded] = useState(false)
    // const [shouldLoad, setShouldLoad] = useState(false)
    const [showLoader, setShowLoader] = useState(false)

    useEffect(() => {
        const t = setTimeout(() => setShowLoader(true), 500)

        return () => clearTimeout(t)
    }, [])

    return (
        <div className="relative">
            <img
                src={src}
                alt={alt}
                className={`w-full h-full ${className} transition-opacity duration-500 ${
                    !loaded ? "opacity-0" : "opacity-100"
                }`}
                onLoad={() => setLoaded(true)}
                width={width}
                height={height}
            />
            {!loaded ? (
                <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
                        showLoader ? "opacity-100" : "opacity-0"
                    }`}
                >
                    {placeholder}
                </div>
            ) : null}
        </div>
    )
}
