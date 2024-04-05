
import { StoryObj, Meta } from "@storybook/react";
import SummaryCardComponent from "@/components/contentful/nCard/SummaryCard";
import Wrapper from "@/components/Wrapper";
import SummaryCard from '../../../components/contentful/nCard/SummaryCard';


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
      "id": "5sVR1uY55THJqWCoGPbOC5",
      "contentType": {
          "sys": {
              "type": "Link",
              "linkType": "ContentType",
              "id": "nCard"
          }
      },
      "revision": 0,
      "createdAt": "2024-03-18T16:55:33.502Z",
      "updatedAt": "2024-03-25T14:05:07.730Z",
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
      "internalName": "Markets Indices - Why Trade - Exclusive products",
      "type": "Summary Card",
      "header": {
          "data": {},
          "content": [
              {
                  "data": {},
                  "content": [
                      {
                          "data": {},
                          "marks": [],
                          "value": "Exclusive products",
                          "nodeType": "text"
                      }
                  ],
                  "nodeType": "paragraph"
              }
          ],
          "nodeType": "document"
      },
      "description": {
          "data": {},
          "content": [
              {
                  "data": {},
                  "content": [
                      {
                          "data": {},
                          "marks": [],
                          "value": "Get broader access to the market in a single position with our exclusive ",
                          "nodeType": "text"
                      },
                      {
                          "data": {
                              "uri": "https://www.cmcmarkets.com/en-gb/share-baskets-trading"
                          },
                          "content": [
                              {
                                  "data": {},
                                  "marks": [],
                                  "value": "share baskets",
                                  "nodeType": "text"
                              }
                          ],
                          "nodeType": "hyperlink"
                      },
                      {
                          "data": {},
                          "marks": [],
                          "value": ".",
                          "nodeType": "text"
                      }
                  ],
                  "nodeType": "paragraph"
              }
          ],
          "nodeType": "document"
      },
      "image": {
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
              "type": "Asset",
              "id": "3oqrf1LrWyAVnvUAmWNFyM",
              "revision": 0,
              "createdAt": "2024-03-18T16:57:41.450Z",
              "updatedAt": "2024-03-18T16:57:56.780Z",
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
              "title": "icon briefcase-48",
              "description": "",
              "file": {
                  "url": "//images.ctfassets.net/vl2kvsmutclx/3oqrf1LrWyAVnvUAmWNFyM/3b842f71ebddb29dc283e4e0a1f76b0e/icon_briefcase-48.svg",
                  "details": {
                      "size": 599,
                      "image": {
                          "width": 48,
                          "height": 49
                      }
                  },
                  "fileName": "icon_briefcase-48.svg",
                  "contentType": "image/svg+xml"
              }
          }
      },
      "cardTheme": "Gray"
  }
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Neptune/nCard/SummaryCard",
  component: SummaryCardComponent,
}

export default meta;

type SummaryCard = StoryObj<typeof SummaryCardComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const InstrumentHeroWide: SummaryCard = {
    render: (args) => <Wrapper><SummaryCardComponent {...args} /></Wrapper>,
    args: {
        content,
        debug: false,
    },
};