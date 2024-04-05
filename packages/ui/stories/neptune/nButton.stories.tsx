import type { Meta, StoryObj } from "@storybook/react";
// import ButtonComponent from "@/components/elements/Button";
import ButtonComponent from "@/components/contentful/nButton/nButton";
// import ButtonComponent from "@/components/contentful/elements/ContentfulLink";

const content = {
  "metadata": {
      "tags": []
  },
  "sys": {
      "space": {
          "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "vl2kvsmutclx"
          }
      },
      "type": "Entry",
      "id": "7EtYpPuBQ5Te3D1qopKiDz",
      "contentType": {
          "sys": {
              "type": "Link",
              "linkType": "ContentType",
              "id": "nButton"
          }
      },
      "revision": 0,
      "createdAt": "2024-03-14T10:10:57.367Z",
      "updatedAt": "2024-04-04T14:16:28.464Z",
      "environment": {
          "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
          }
      },
      "locale": "en-GB"
  },
  "fields": {
      "internalName": "Create account",
      "type": "Onboarding Live",
      "title": "Create account",
      "size": "md",
      "behaviour": "Default",
      "theme": "azure"
  }
} as const

const debug = {
  componentName: `nButton/nButton`,
  component: true,
  id: `nButton-nButton`,
}


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ButtonComponent> = {
  title: "Neptune/nButton/nButton",
  component: ButtonComponent,
  args: {
    content,
    debug
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