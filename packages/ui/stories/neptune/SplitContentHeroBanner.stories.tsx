
import { composeStories, StoryObj, Meta  } from "@storybook/react";
import SplitContentHeroBannerComponent from "@/components/contentful/nBanners/SplitContentHeroBanner";
import Button from "@/stories/neptune/nButton.stories";
import Wrapper from "@/components/Wrapper";

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
      "id": "7lThwnz6O5xlsnmX7eLm80",
      "contentType": {
          "sys": {
              "type": "Link",
              "linkType": "ContentType",
              "id": "nBanners"
          }
      },
      "revision": 0,
      "createdAt": "2024-03-13T14:24:00.630Z",
      "updatedAt": "2024-03-22T16:53:27.750Z",
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
      "internalName": "About Us Hero Banner",
      "type": "Split Content Hero Banner",
      "bigHeader": {
          "data": {},
          "content": [
              {
                  "data": {},
                  "content": [
                      {
                          "data": {},
                          "marks": [],
                          "value": "About CMC Markets",
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
                          "value": "Built more than 34 years ago, we're dedicated to supporting our clients on their trading journey.",
                          "nodeType": "text"
                      }
                  ],
                  "nodeType": "paragraph"
              },
              {
                  "data": {},
                  "content": [],
                  "nodeType": "hr"
              },
              {
                  "data": {},
                  "content": [
                      {
                          "data": {},
                          "marks": [],
                          "value": "",
                          "nodeType": "text"
                      },
                      {
                          "data": {
                              "target": {
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
                                      "id": "4ett7Eaw1AuRPxMbcQK7MN",
                                      "contentType": {
                                          "sys": {
                                              "type": "Link",
                                              "linkType": "ContentType",
                                              "id": "nText"
                                          }
                                      },
                                      "revision": 0,
                                      "createdAt": "2024-03-13T14:47:26.027Z",
                                      "updatedAt": "2024-03-13T14:47:47.271Z",
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
                                      "internalName": "Phone",
                                      "type": "Phone",
                                      "text": {
                                          "nodeType": "document",
                                          "data": {},
                                          "content": [
                                              {
                                                  "nodeType": "paragraph",
                                                  "data": {},
                                                  "content": [
                                                      {
                                                          "nodeType": "text",
                                                          "value": "+44 (0)20 7170 8200",
                                                          "marks": [],
                                                          "data": {}
                                                      }
                                                  ]
                                              }
                                          ]
                                      }
                                  }
                              }
                          },
                          "content": [],
                          "nodeType": "embedded-entry-inline"
                      },
                      {
                          "data": {},
                          "marks": [],
                          "value": "",
                          "nodeType": "text"
                      }
                  ],
                  "nodeType": "paragraph"
              },
              {
                  "data": {},
                  "content": [
                      {
                          "data": {},
                          "marks": [],
                          "value": "",
                          "nodeType": "text"
                      },
                      {
                          "data": {
                              "target": {
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
                                      "id": "2gzMYwNNqUrnes6TWfQp63",
                                      "contentType": {
                                          "sys": {
                                              "type": "Link",
                                              "linkType": "ContentType",
                                              "id": "nText"
                                          }
                                      },
                                      "revision": 0,
                                      "createdAt": "2024-03-13T14:42:54.917Z",
                                      "updatedAt": "2024-03-22T16:53:51.698Z",
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
                                      "internalName": "Email - Client Management",
                                      "type": "Email",
                                      "text": {
                                          "data": {},
                                          "content": [
                                              {
                                                  "data": {},
                                                  "content": [
                                                      {
                                                          "data": {},
                                                          "marks": [],
                                                          "value": "clientmanagement@cmcmarkets.co.uk",
                                                          "nodeType": "text"
                                                      }
                                                  ],
                                                  "nodeType": "paragraph"
                                              }
                                          ],
                                          "nodeType": "document"
                                      }
                                  }
                              }
                          },
                          "content": [],
                          "nodeType": "embedded-entry-inline"
                      },
                      {
                          "data": {},
                          "marks": [],
                          "value": "",
                          "nodeType": "text"
                      }
                  ],
                  "nodeType": "paragraph"
              },
              {
                  "data": {},
                  "content": [
                      {
                          "data": {},
                          "marks": [],
                          "value": "",
                          "nodeType": "text"
                      }
                  ],
                  "nodeType": "paragraph"
              }
          ],
          "nodeType": "document"
      },
      "backgroundImage": {
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
              "id": "2ZTkwyskPUmYTHCOSlHAeY",
              "contentType": {
                  "sys": {
                      "type": "Link",
                      "linkType": "ContentType",
                      "id": "nAssetWrapper"
                  }
              },
              "revision": 0,
              "createdAt": "2024-03-14T10:54:01.396Z",
              "updatedAt": "2024-03-14T16:32:58.572Z",
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
              "internalName": "About Us Hero",
              "type": "Image",
              "asset": {
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
                      "id": "7ljIWDBhfA1S3Iz6SzdIi6",
                      "revision": 0,
                      "createdAt": "2024-03-13T14:52:40.629Z",
                      "updatedAt": "2024-03-13T14:53:09.642Z",
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
                      "title": "about-us hero-bg",
                      "description": "",
                      "file": {
                          "url": "//images.ctfassets.net/vl2kvsmutclx/7ljIWDBhfA1S3Iz6SzdIi6/01058091d799a485a61ca970ed3d5231/about-us_hero-bg.jpg",
                          "details": {
                              "size": 217372,
                              "image": {
                                  "width": 1440,
                                  "height": 1370
                              }
                          },
                          "fileName": "about-us_hero-bg.jpg",
                          "contentType": "image/jpeg"
                      }
                  }
              },
              "mobileVariant": {
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
                      "id": "3V8isi2H21p0hKZ81E1k7y",
                      "revision": 0,
                      "createdAt": "2024-03-14T11:00:02.589Z",
                      "updatedAt": "2024-03-14T11:00:46.574Z",
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
                      "title": "about-us hero-mob",
                      "description": "",
                      "file": {
                          "url": "//images.ctfassets.net/vl2kvsmutclx/3V8isi2H21p0hKZ81E1k7y/423d335567d77f7233db9027d1ab3675/about-us_hero-mob.jpeg",
                          "details": {
                              "size": 146403,
                              "image": {
                                  "width": 1170,
                                  "height": 600
                              }
                          },
                          "fileName": "about-us_hero-mob.jpeg",
                          "contentType": "image/jpeg"
                      }
                  }
              }
          }
      },
      "theme": "Light",
      "features": [
          {
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
                  "id": "01CwghTpQKBo29c73YkPO0",
                  "contentType": {
                      "sys": {
                          "type": "Link",
                          "linkType": "ContentType",
                          "id": "nButton"
                      }
                  },
                  "revision": 0,
                  "createdAt": "2024-03-14T10:19:40.398Z",
                  "updatedAt": "2024-04-04T14:19:36.577Z",
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
                  "internalName": "Create an account - About Us Hero",
                  "type": "Onboarding Live",
                  "title": "Create an account",
                  "size": "lg",
                  "behaviour": "Default",
                  "theme": "azure"
              }
          }
      ],
      "extraContent": [
          "Trustpilot"
      ]
  }
}

const debug = {
    "contentfulContentTypeId": "nButton",
    "contentfulId": "01CwghTpQKBo29c73YkPO0",
    "componentName": "nButton/nButton"
}

// Define your additional props
type AdditionalProps = {
  buttons: "one button" | "two buttons" | "three buttons";
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof SplitContentHeroBannerComponent> = {
  title: "Neptune/nBanners/Split Content Hero",
  component: SplitContentHeroBannerComponent,
  // subcomponents: { "Button": ContentfulLink },
  // parameters:{
  //   deepControls: { enabled: true },
  // },
  argTypes: {
  },
  args: {
    content,
    debug
  },
}
export default meta

type SplitContentHero = StoryObj<typeof SplitContentHeroBannerComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SplitContentHero: SplitContentHero = {
  render: args =>
  <Wrapper>
    <SplitContentHeroBannerComponent  {...args} />
  </Wrapper>
}