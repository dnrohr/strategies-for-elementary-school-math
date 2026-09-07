import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import { build } from "./build.mjs";
import { ROOT } from "./lib.mjs";

const OUTPUT = path.join(ROOT, "_site");
const port = Number(process.env.BOOK_PORT || 8080);
await build();

const types = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".svg": "image/svg+xml" };
const server = http.createServer(async (request, response) => {
  const requestPath = decodeURIComponent(new URL(request.url, `http://${request.headers.host}`).pathname);
  let file = path.join(OUTPUT, requestPath);
  if (!path.extname(file)) file = path.join(file, "index.html");
  if (!file.startsWith(OUTPUT)) { response.writeHead(403); response.end("Forbidden"); return; }
  try {
    const data = await fs.promises.readFile(file);
    response.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream" });
    response.end(data);
  } catch {
    response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    response.end(await fs.promises.readFile(path.join(OUTPUT, "404.html")));
  }
});
server.listen(port, () => console.log(`Book explorer: http://localhost:${port}`));

let timer;
for (const directory of ["art", "book", "site", "scripts"]) {
  fs.watch(path.join(ROOT, directory), { recursive: true }, (_event, filename) => {
    if (!filename || filename.includes("_site")) return;
    clearTimeout(timer);
    timer = setTimeout(() => build().catch(error => console.error(error)), 120);
  });
}
