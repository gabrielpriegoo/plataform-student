import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distClient = path.join(projectRoot, "dist/client");

const assetsDir = path.join(distClient, "assets");
const cssFiles = fs.readdirSync(assetsDir).filter((f) => f.endsWith(".css") && !f.includes("index-"));
const jsFiles = fs.readdirSync(assetsDir).filter(
  (f) => f.endsWith(".js") && (f.startsWith("index-") || f.startsWith("routes-") || f.startsWith("utils-")),
);
const stylesCss = cssFiles.find((f) => f.startsWith("styles-"));
const mainJs = jsFiles.find((f) => f.startsWith("index-"));

if (!stylesCss || !mainJs) {
  console.error("Could not find styles or main JS file");
  process.exit(1);
}

const html = `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Plataforma de estudo com resumos e questões de múltipla escolha para matérias universitárias." />
    <title>Atheneum — Estudo Universitário</title>
    <link rel="stylesheet" href="/plataform-student/assets/${stylesCss}" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/plataform-student/assets/${mainJs}"></script>
  </body>
</html>
`;

fs.writeFileSync(path.join(distClient, "index.html"), html);
fs.writeFileSync(path.join(distClient, "404.html"), html);
console.log("Generated index.html and 404.html with styles:", stylesCss, "and main:", mainJs);
