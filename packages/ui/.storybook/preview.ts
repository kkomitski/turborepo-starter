import type { Preview } from "@storybook/react";
import "@/styles/style.scss"
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';


const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        auto: {
          "name": "auto",
          "styles": {
            "width": "100%",
            "height": "100%"
          }
        },
        1024: {
          "name": "1024",
          "styles": {
            "width": "1024px",
            "height": "1024px"
          }
        },
        1280: {
          "name": "1280",
          "styles": {
            "width": "1280px",
            "height": "1024px"
          }
        },
        1440: {
          "name": "1440",
          "styles": {
            "width": "1440px",
            "height": "100%"
          }
        },
        1600: {
          "name": "1600",
          "styles": {
            "width": "1600px",
            "height": "600px"
          }
        },
        1920: {
          "name": "1920",
          "styles": {
            "width": "1920px",
            "height": "600px"
          }
        },
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
      },
      defaultViewport: '1440',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
