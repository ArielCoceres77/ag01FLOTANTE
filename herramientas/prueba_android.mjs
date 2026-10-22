import { chromium } from "playwright";
const out = process.argv[2];
const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium", args: ["--headless=new", "--allow-file-access-from-files"] });
const p = await b.newPage({ viewport: { width: 390, height: 800 }, deviceScaleFactor: 2 });
p.on("pageerror", e => console.log("ERR", e.message));
p.on("console", m => { if (m.type() === "error") console.log("CONSOLE", m.text()); });
await p.addInitScript(() => {
  window.__tam = [];
  window.AG1Android = {
    pedir(id, m, a) { const r = m === "claveEstado" ? { claude: false, eleven: false } : m === "pantalla" ? { error: "simulado" } : { error: "sin_clave" }; setTimeout(() => window.__ag1Resp(id, JSON.stringify(r)), 50); },
    tamano(w, h) { window.__tam.push([w, h]); }, posicion() {}, foco() {}, observando() {}, notificar() {}, hablar() {}, callar() {}, escuchar() {}
  };
});
await p.goto("file://" + new URL("../web/index.html", import.meta.url).pathname);
await p.waitForTimeout(600);
await p.screenshot({ path: out + "/a1.png", clip: { x: 0, y: 0, width: 390, height: 90 } });
await p.click("#pill"); await p.waitForTimeout(300);
await p.screenshot({ path: out + "/a2.png", clip: { x: 0, y: 0, width: 390, height: 330 } });
await p.click(".ib[data-vista=chat]");
await p.fill("#txt", "¿Qué es la Guerra de Cartas Éticas?"); await p.click("#send"); await p.waitForTimeout(900);
await p.fill("#txt", "¿Cuándo se fundó El Colorado?"); await p.click("#send"); await p.waitForTimeout(900);
await p.screenshot({ path: out + "/a3.png", clip: { x: 0, y: 0, width: 390, height: 560 } });
console.log("tamaños", JSON.stringify((await p.evaluate(() => window.__tam)).slice(-4)));
console.log(await p.evaluate(() => window.__ag1Debug.buscar("instructivo 38 firebase", 3).map(x => x.titulo + " " + x.puntaje).join(" | ")));
await b.close();
