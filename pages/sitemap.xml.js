const API_KEY = process.env.API_KEY;

const ESPECIALIDADES_URL =
  `https://www.vmedapi.criteclx.com/api/articlebycat/${API_KEY}/3/1`;

const TENDENCIAS_URL =
  `https://www.vmedapi.criteclx.com/api/articlebycat/${API_KEY}/4/1`;

function generateSiteMap(especialidades, tendencias) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <!--We manually set the two URLs we know already-->
      <url>
        <loc>https://criteclx.com/vpromed</loc>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
      </url>
      <url>
        <loc>https://criteclx.com/vpromed/inicio</loc>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
      </url>
      <url>
        <loc>https://criteclx.com/vpromed/sobre</loc>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
      </url>
      <url>
        <loc>https://criteclx.com/vpromed/contactos</loc>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
      </url>
      <url>
        <loc>https://criteclx.com/vpromed/dentalsweet</loc>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
      </url>
      <url>
        <loc>https://criteclx.com/vpromed/dentalwork</loc>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
      </url>
      ${especialidades
        .map((especialidade) => {
          return `<url>
          <loc>https://criteclx.com/vpromed/especialidade/${especialidade.ARTICLE_ID}</loc>
          <changefreq>monthly</changefreq>
          <priority>0.9</priority>
          </url>`;
        })
        .join("")}
        ${tendencias
          .map((tendencia) => {
            return `<url>
            <loc>https://criteclx.com/vpromed/tendencia/${tendencia.ARTICLE_ID}</loc>
            <changefreq>monthly</changefreq>
            <priority>0.9</priority>
            </url>`;
          })
          .join("")}
    </urlset>`;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const request = await fetch(ESPECIALIDADES_URL);
  const especialidades = await request.json();
  const request2 = await fetch(TENDENCIAS_URL);
  const tendencias = await request2.json();
  const sitemap = generateSiteMap(especialidades, tendencias);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
