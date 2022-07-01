import Image from "next/future/image";
import React from "react";

interface LazyImageProps {
  className?: string;
  src: string;
  alt: string;
  height?: number;
  width?: number;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  className,
  src,
  alt,
  width,
  height,
}) => (
  <div className="relative">
    <Image
      unoptimized
      src={src}
      alt={alt}
      className={`w-full h-full ${className} transition-opacity duration-500`}
      width={width}
      height={height}
    />
  </div>
);
