import type { Meta, StoryObj } from "@storybook/react";
// import ButtonComponent from "@/components/elements/Button";
import ButtonComponent from "@/components/contentful/nButton/nButton";
// import ButtonComponent from "@/components/contentful/elements/ContentfulLink";

const content = {
  metadata: {
    tags: [],
  },
  sys: {
    space: {
      sys: {
        type: "Link",
        linkType: "Space",
        id: "vl2kvsmutclx",
      },
    },
    type: "Entry",
    id: "01CwghTpQKBo29c73YkPO0",
    contentType: {
      sys: {
        type: "Link",
        linkType: "ContentType",
        id: "nButton",
      },
    },
    revision: 0,
    createdAt: "2024-03-14T10:19:40.398Z",
    updatedAt: "2024-03-15T10:35:18.536Z",
    environment: {
      sys: {
        id: "master",
        type: "Link",
        linkType: "Environment",
      },
    },
    locale: "en-GB",
  },
  fields: {
    internalName: "Create an account",
    type: "Onboarding Live",
    title: "Create an account",
    buttonSize: "LG",
    linkBehaviour: "Default",
    buttonTheme: "Azure",
  },
}


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ButtonComponent> = {
  title: "Neptune/Atoms/Button",
  component: ButtonComponent,
  args: {
    content,
    theme: "azure",
    type: "Onboarding Live",
    children: "hey",
    size: "LG",
  },
}

export default meta;

type ButtonType = StoryObj<typeof ButtonComponent>;
// type ButtonType = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: ButtonType =  {
  render: args => <ButtonComponent {...args}/>,
  args: {
    // theme: "azure",
    // type: "Onboarding Live",
    // children: "hey",
    // size: "LG",
    // children: "Primary",
    // href: "./",
    // linkType: "nextLink",
  },
};

// export const Secondary: ButtonType =  {
//   render: args => <ButtonComponent {...args}/>,
//   args: {
//     variant: "azure-light",
//     children: "Secondary",
//     href: "./",
//     linkType: "nextLink",
//   },
// };

// export const Outline: ButtonType =  {
//   render: args => <ButtonComponent {...args}/>,
//   args: {
//     variant: "primary-outline",
//     children: "Primary Outline",
//     href: "./",
//     linkType: "nextLink",
//   },
// };