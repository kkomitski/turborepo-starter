import { getNewsArticles } from "@/services/news";
import { createClient, EntryCollection } from "contentful";

type CustomEntryFields = {
  slug: string;
  multiField: { content: Array<{ value: { id: string } }> };
  references: Array<{
    sys: {
      id: string;
      contentType: { sys: { id: string } };
    };
    fields: any;
  }>;
  enabledSites: string;
};

export class HeadlessData {
  static client() {
    if (!process.env.CONTENTFUL_SPACE_ID) {
      console.error("CONTENTFUL_SPACE_ID is not defined");
      return;
    }

    if (!process.env.CONTENTFUL_ACCESS_TOKEN) {
      console.error("CONTENTFUL_ACCESS_TOKEN is not defined");
      return;
    }

    if (!process.env.CONTENTFUL_HOST) {
      console.error("CONTENTFUL_HOST is not defined");
      return;
    }

    if (!process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN) {
      console.error("CONTENTFUL_PREVIEW_ACCESS_TOKEN is not defined");
      return;
    }

    return createClient({
      space: process.env.CONTENTFUL_SPACE_ID,

      /* On Live use cdn to only display published content */
      accessToken:
        process.env.ENV === "LIVE"
          ? process.env.CONTENTFUL_ACCESS_TOKEN
          : process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
      host:
        process.env.ENV === "LIVE"
          ? process.env.CONTENTFUL_HOST
          : process.env.CONTENTFUL_PREVIEW_HOST,
    });
  }

  static async getEntry(id: string) {
    if (!id) return false;
    try {
      const data = await this.client()?.getEntry(id);
      return data;
    } catch {
      return false;
    }
  }

  static async getDynamicPageBySlug(
    urlSlug: string
  ): Promise<CustomEntryFields | {}> {
    const data: EntryCollection<CustomEntryFields> | undefined =
      await this.client()?.getEntries({
        content_type: "nSuperPage",
        "fields.slug": urlSlug,
        limit: 100,
        locale: "en-GB",
        "fields.enabledSites": "cmc",
        include: 4,
      });

    // Reorders the multiField content based on the order of the references.
    // This ensures the order of the fields in the CMS is respected.
    if (data && data.items[0]) {
      let orderedMultiFields: Array<any> = [];

      data.items[0].fields.multiField.content.forEach((item) => {
        const foundReference = data.items[0].fields.references.find(
          (ref: any) => ref.sys.id === item.value.id
        );
        if (foundReference) {
          orderedMultiFields.push(foundReference);
        }
      });

      data.items[0].fields.references = orderedMultiFields;

      // Fetch news articles for any nNews components
      await HeadlessData.retrieveNewsArticles(data);

      // console.log("data", data.items[0].fields.references);

      return data.items[0].fields;
    } else {
      return {};
    }
  }

  /**
   * Retrieves news articles for each nNews component
   * @param data
   */
  private static async retrieveNewsArticles(
    data: EntryCollection<CustomEntryFields>
  ) {
    await Promise.all(
      data.items[0].fields.references.map(async (item) => {
        // Check if component is of content type nNews and has topics
        if (
          item.sys.contentType.sys.id === "nNews" &&
          item.fields?.topics.length > 0
        ) {
          // Query bakery for news articles based on the first topic
          item.fields.posts = await getNewsArticles(
            item.fields.topics[0].toLowerCase()
          );
        }
      })
    );
  }
}
