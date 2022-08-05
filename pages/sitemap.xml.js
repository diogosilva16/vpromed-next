const ESPECIALIDADES_URL =
  "https://www.critecnow.com/promed/api/articlebycat/t8rAzpkJR8O3kDZdw63h85GDrV86VOeX/3/1";

function generateSiteMap(especialidades) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <!--We manually set the two URLs we know already-->
      <url>
        <loc>https://vpromed.vercel.app</loc>
      </url>
      <url>
        <loc>https://vpromed.vercel.app/inicio</loc>
      </url>
      <url>
        <loc>https://vpromed.vercel.app/sobre</loc>
      </url>
      <url>
        <loc>https://vpromed.vercel.app/contactos</loc>
      </url>
      <url>
        <loc>https://vpromed.vercel.app/cartao</loc>
      </url>
      ${especialidades
        .map((especialidade) => {
          return `<url>
          <loc>https://vpromed.vercel.app/especialidade/${especialidade.ARTICLE_ID}</loc>
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
  const books = await request.json();
  const sitemap = generateSiteMap(books);
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  console.log(especialidades);
  return {
    props: {},
  };
}

export default SiteMap;
