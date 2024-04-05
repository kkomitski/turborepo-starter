import { convertCompilerOptionsFromJson } from "typescript";

// Amplify only supports NextJS 13 so far so the sitemap needs to be semi-manual
// Tomtodo: add dynamic pages like pressreleases

const urls = [
    '/',
    '/about-us',
    '/contact-us',
    '/investors',
    '/press-releases',
];



function generateSiteMap(req) {

    return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">

        ${urls.map((url) => {
          return `
            <url>
                <loc>${`${process.env.URL}${url}`}</loc>
            </url>
          `;
        })
        .join("")}

     </urlset>
   `;

}


export async function getServerSideProps({req, res}) {

    const sitemap = generateSiteMap(req);
   
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
   
    return {
      props: {},
    }

}
   
export default function SiteMap() {}