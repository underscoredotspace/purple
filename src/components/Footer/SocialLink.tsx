import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logger } from "lib/helpers";
import { BreadcrumbCategory } from "lib/helpers/logging/types";
import React from "react";
import { Anchor } from "../primitives";

interface SocialLinkProps {
  text: string;
  href: string;
  title: string;
  icon: IconProp;
}

const onClickSocialLink = (title: string) =>
  logger.addBreadcrumb({
    category: BreadcrumbCategory.LINK,
    message: `Social link ${title}`,
    level: "info",
  });

const SocialLink: React.FC<SocialLinkProps> = ({ icon, text, href, title }) => (
  <Anchor
    bare
    className="p-1 my-1 hover:bg-background text-sm border border-background rounded max-w-64 w-full flex items-center justify-center"
    href={href}
    blank
    title={title}
    onClick={() => onClickSocialLink(title)}
  >
    <FontAwesomeIcon icon={icon} className="pr-2 flex-shrink-0" size="2x" />
    {text}
  </Anchor>
);

export default SocialLink;
