import { env } from "lib/helpers";
import React from "react";
import { Card } from "./Card";
import { LazyImage, Text } from "./primitives";

interface PictureProps {
  title?: string;
  subtitle: string;
  src: string;
  width: number;
  height: number;
}

export const Picture: React.FC<PictureProps> = ({
  title,
  subtitle,
  src,
  width,
  height,
}) => {
  return (
    <Card>
      <LazyImage
        src={`${env.ASSETS}/640/640__${src}`}
        alt={subtitle}
        width={width}
        height={height}
      />

      <Text padding>
        {title && <Text className="font-bold">{title}</Text>}
        <Text className="font-light text-sm">{subtitle}</Text>
      </Text>
    </Card>
  );
};
