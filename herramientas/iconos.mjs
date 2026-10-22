// Renderiza la mascota AG1 a PNG (íconos de escritorio y Android). Uso: node herramientas/iconos.mjs
import { chromium } from "playwright";
import fs from "fs"; import path from "path";
const raiz = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const js = fs.readFileSync(path.join(raiz, "web/mascota.js"), "utf8");
const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium", args: ["--headless=new"] });
const p = await b.newPage({ viewport: { width: 1100, height: 600 }, deviceScaleFactor: 1 });
await p.setContent(`<body style="margin:0;background:transparent"><script>${js}</script>
<div id="a" style="width:512px;height:512px;display:inline-block"></div><div id="b" style="width:460px;height:500px;display:inline-block;background:#0B1612"></div>
<script>document.getElementById('a').innerHTML=AG1_MASCOTA.svg('cara');document.getElementById('b').innerHTML=AG1_MASCOTA.svg('cuerpo');document.querySelectorAll('svg').forEach(s=>{s.style.width='100%';s.style.height='100%'});document.querySelectorAll('.badge').forEach(x=>x.remove());document.querySelectorAll('.rayos').forEach(r=>r.style.animation='none')</script></body>`);
await p.locator("#a").screenshot({ path: path.join(raiz, "escritorio/icono.png"), omitBackground: true });
await p.locator("#b").screenshot({ path: process.argv[2] || "/tmp/cuerpo.png" });
await b.close();
