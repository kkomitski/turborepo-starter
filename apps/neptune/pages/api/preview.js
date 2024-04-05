// Tom:
// using: https://nextjs.org/docs/pages/building-your-application/configuring/preview-mode
// we cant use Draft Mode yet as our version doesnt support it yet

export default async (req, res) => {

  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== process.env.APP_PREVIEW_SECRET || !req.query.slug) {
    return res.status(401).json({ message: 'Invalid token' });
  }
 
  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});
 
  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  //res.end(req.query.slug);
  res.redirect(req.query.slug.replace('http', ''));
}