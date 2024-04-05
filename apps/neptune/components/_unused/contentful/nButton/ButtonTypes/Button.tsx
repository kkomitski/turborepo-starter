import { addDataAttributes } from "@/helpers/contentful";
import {
  btnBehaviourTypes,
  btnIconResolver,
  btnIconTypes,
  btnSizeTypes,
  btnThemeTypes,
} from "@/helpers/mappings/btnClassMap";
import { cn } from "@/lib/utils-shadcn";
import Link from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

type Props = {
  theme: btnThemeTypes;
  size?: btnSizeTypes;
  icon?: btnIconTypes;
  url: string;
  behaviour: btnBehaviourTypes;
  children: ReactNode;
  debug: any;
} & AnchorHTMLAttributes<HTMLAnchorElement>; // Merge with AnchorHTMLAttributes

const Button = (props: Props) => {
  const { theme, type, size, icon, url, debug, children, ...rest } = props;

  const btnLinkType = type || "nextLink";

  // Apply main button class (e.g. azure, primary-outline. End result: btn-azure, btn-primary-outline)
  const btnVariantClass = `btn-${theme}`;

  // Apply button size class (e.g. btn-sm, btn-md, btn-lg. End result: btn-sm, btn-md, btn-lg)
  const btnSize = `btn-${size}`;

  // Apply button with icon class (e.g. end result: btn-with-icon)
  const btnWithIcon = icon ? "btn-with-icon" : "";

  // Apply icon based off props.icon
  const iconNode = btnIconResolver(icon);

  const classNames = `btn ${btnVariantClass} ${btnSize} ${btnWithIcon} ${
    props.className ?? ""
  }`;

  return (
    <>
      {btnLinkType === "nextLink" ? (
        <Link
          data-next-link
          href={url}
          {...addDataAttributes(debug)}
          {...rest}
          className={cn(classNames, rest.className)}
        >
          <span>{children}</span>
          {iconNode}
        </Link>
      ) : (
        <a
          href={url}
          {...addDataAttributes(debug)}
          {...rest}
          className={cn(classNames, rest.className)}
        >
          <span>{children}</span>
          {iconNode}
        </a>
      )}
    </>
  );
};

export default Button;
