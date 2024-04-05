import { btnVariantTypes } from "@/helpers/mappings/btnClassMap";
import ContentfulLink from "../elements/ContentfulLink";
import { btnVariants } from '../../../helpers/mappings/btnClassMap';

type Props = {
  type?: "Onboarding Live";
  content?: any;
  theme: btnVariantTypes;
  size?: "SM" | "MD" | "LG";
  icon?: "Right Arrow" | "External Link";
  children: any;
}

const nButton = ({ content, theme, type, size, children }: Props) => {
  console.log(theme)
  return (
    <ContentfulLink
      theme={theme ? theme : content.fields.buttonTheme}
      type={type ? type : content.fields.type}
      url={content.fields.linkUrl}
      size={size ? size : content.fields.buttonSize}
      icon={content.fields.buttonIcon}
    >
      {children ? children : content.fields.title}
    </ContentfulLink>
  );
};

export default nButton;
