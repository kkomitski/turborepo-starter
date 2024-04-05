import { StoryObj, Meta } from "@storybook/react";
// import TestComponent from "@/components/contentful/nBanners/Test";
import TestComponent from "@/components/elements/Button";

const meta: Meta<typeof TestComponent> = {
  component: TestComponent,
};

type Story = StoryObj<typeof TestComponent>;

export const Example: Story = {
  args: {
    href: "./",
    children: "Button",
    linkType: "nextLink",
  },
  // parameters: {
  //   nextjs: {
  //     router: {
  //       pathname: '/profile/[id]',
  //       asPath: '/profile/1',
  //       query: {
  //         id: '1',
  //       },
  //     },
  //   },
  // },
};

export default meta;
// import { StoryObj, Meta } from "@storybook/react";
// import TestComponent from "@/components/contentful/nBanners/AlphaBanner";
// ;

// const meta: Meta<typeof TestComponent> = {
//   component: TestComponent,
// };

// type Story = StoryObj<typeof TestComponent>;

// export const Example: Story = {
//   // parameters: {
//   //   nextjs: {
//   //     router: {
//   //       pathname: '/profile/[id]',
//   //       asPath: '/profile/1',
//   //       query: {
//   //         id: '1',
//   //       },
//   //     },
//   //   },
//   // },
// };

// export default meta;
