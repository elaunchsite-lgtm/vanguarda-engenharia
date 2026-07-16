import { getCollection } from "astro:content";
import { config } from "../lib/config";

export async function GET() {
  const posts = await getCollection("blog");
  const domain = config.siteUrl || (config.domain ? `https://${config.domain}` : "https://vanguarda-engenharia.vercel.app");
  const pages = ["/", "/blog", "/webstories", "/sobre", "/contato", "/politica-de-privacidade", "/termos-de-uso"];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  for (const page of pages) {
    xml += `  <url><loc>${domain}${page}</loc><changefreq>monthly</changefreq><priority>${page === "/" ? "1.0" : "0.8"}</priority></url>\n`;
  }
  for (const post of posts) {
    const slug = post.id.replace(/^blog\//, "").replace(/\.md$/, "");
    xml += `  <url><loc>${domain}/blog/${slug}</loc><changefreq>weekly</changefreq><priority>0.6</priority></url>\n`;
  }
  xml += "</urlset>";
  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
