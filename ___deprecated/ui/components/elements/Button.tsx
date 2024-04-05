import Link from "next/link";
import React, { ReactNode, AnchorHTMLAttributes } from "react";
import RightArrowSVG from "../svg/RightArrowSVG";
import {
  btnSizeClassMap,
  btnSizeTypes,
  btnVariantClassMap,
  btnVariantTypes,
} from "@/helpers/mappings/btnClassMap";
import { cn } from "@/lib/utils-shadcn";
import { LinkTypes } from "@/helpers/types/general";

type Props = {
  variant: btnVariantTypes;
  size?: btnSizeTypes;
  href: string;
  icon?: "arrow" | "external-link";
  linkType?: LinkTypes;
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>; // Merge with AnchorHTMLAttributes

const Button = (props: Props) => {
  const { variant, href, linkType, size, children, ...rest } = props;

  const btnLinkType = linkType || "nextLink";
  const btnVariant = btnVariantClassMap[variant] || "";
  const btnSize = size ? btnSizeClassMap[size.toLowerCase()] : "";
  const btnWithIcon = props.icon ? "btn-with-icon" : "";
  const classNames = `btn ${btnVariant} ${btnSize} ${btnWithIcon} ${props.className ?? ""}`;

  let iconNode = null;

  switch (props.icon) {
    case "arrow":
      iconNode = <RightArrowSVG />;
      break;
    case "external-link":
      iconNode = null;
      break;
  }

  return (
    <>
      {btnLinkType === "nextLink" ? (
        <Link data-next-link href={href} {...rest} className={cn(classNames, rest.className)}>
          <>
            <span>{children}</span>
            {iconNode}
          </>
        </Link>
      ) : (
        <a href={href} {...rest} className={cn(classNames, rest.className)}>
          <span>{children}</span>
          {iconNode}
        </a>
      )}
    </>
  );
};

export default Button;
