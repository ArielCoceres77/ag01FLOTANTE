// Dibuja a AG1: la mascota de IA El Colorado (sol dorado de cabeza, letras IA verdes con circuitos, arco «Inteligencia Artificial»).
window.AG1_MASCOTA = (() => {
  let n = 0;
  function rayos(cx, cy, r1, r2, k){
    let d = "";
    for (let i = 0; i < k; i++) {
      const a = (i / k) * Math.PI * 2, b = a + Math.PI / k * 0.55, c = a - Math.PI / k * 0.55;
      const p = (ang, r) => (cx + Math.cos(ang) * r).toFixed(1) + " " + (cy + Math.sin(ang) * r).toFixed(1);
      d += `M${p(c, r1)} L${p(a, r2)} L${p(b, r1)} Z `;
    }
    return d;
  }
  function cabeza(id){
    const cx = 100, cy = 86;
    return `
    <g class="rayos"><path d="${rayos(cx, cy, 33, 56, 14)}" fill="#F7B92E" stroke="#D98A0E" stroke-width="1.2" stroke-linejoin="round"/></g>
    <circle cx="${cx}" cy="${cy}" r="36" fill="url(#sol${id})" stroke="#D98A0E" stroke-width="2"/>
    <circle cx="80" cy="99" r="5" fill="#F27A3A" opacity=".45"/><circle cx="120" cy="99" r="5" fill="#F27A3A" opacity=".45"/>
    <path d="M78 70 q9 -6 17 -1" stroke="#145C2E" stroke-width="3.2" fill="none" stroke-linecap="round"/>
    <path d="M105 69 q8 -5 17 1" stroke="#145C2E" stroke-width="3.2" fill="none" stroke-linecap="round"/>
    <g class="ojos">
      <g class="ojo"><ellipse cx="87" cy="83" rx="7.5" ry="9" fill="#fff" stroke="#145C2E" stroke-width="1.4"/><circle class="iris" cx="87.5" cy="84" r="5" fill="#1E9E4A"/><circle cx="87.5" cy="84" r="2.3" fill="#0B1612"/><circle cx="89.3" cy="81.6" r="1.4" fill="#fff"/></g>
      <g class="ojo"><ellipse cx="113" cy="83" rx="7.5" ry="9" fill="#fff" stroke="#145C2E" stroke-width="1.4"/><circle class="iris" cx="113.5" cy="84" r="5" fill="#1E9E4A"/><circle cx="113.5" cy="84" r="2.3" fill="#0B1612"/><circle cx="115.3" cy="81.6" r="1.4" fill="#fff"/></g>
      <path class="feliz" d="M80 85 q7 -8 14 0 M106 85 q7 -8 14 0" stroke="#145C2E" stroke-width="3.4" fill="none" stroke-linecap="round"/>
    </g>
    <path class="boca" d="M89 99 Q100 110 111 99 Q100 104 89 99 Z" fill="#7A2E12" stroke="#5B210C" stroke-width="1.6" stroke-linejoin="round"/>`;
  }
  function defs(id){
    return `<defs>
      <radialGradient id="sol${id}" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#FFE27A"/><stop offset=".6" stop-color="#F7B92E"/><stop offset="1" stop-color="#E8930F"/></radialGradient>
      <linearGradient id="verde${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3CC260"/><stop offset="1" stop-color="#1F8A3E"/></linearGradient>
      <path id="arco${id}" d="M28 104 A72 72 0 0 1 172 104"/>
    </defs>`;
  }
  function cuerpo(id){
    const v = `url(#verde${id})`;
    return `
    <path d="M18 106 A82 82 0 0 1 182 106" stroke="#1F8A3E" stroke-width="15" fill="none" stroke-linecap="round"/>
    <text font-family="Nunito,Segoe UI,Roboto,sans-serif" font-weight="900" font-size="9.6" fill="#F4F1E8" letter-spacing="1.1"><textPath href="#arco${id}" startOffset="50%" text-anchor="middle">INTELIGENCIA ARTIFICIAL</textPath></text>
    <path d="M64 146 Q44 152 38 168" stroke="#2FA84F" stroke-width="7" fill="none" stroke-linecap="round"/>
    <circle cx="37" cy="171" r="7.5" fill="#F7B92E" stroke="#D98A0E" stroke-width="1.5"/>
    <path d="M150 146 Q168 136 172 118" stroke="#2FA84F" stroke-width="7" fill="none" stroke-linecap="round"/>
    <circle cx="173" cy="114" r="7.5" fill="#F7B92E" stroke="#D98A0E" stroke-width="1.5"/>
    <rect x="62" y="128" width="24" height="70" rx="4" fill="${v}" stroke="#145C2E" stroke-width="2"/>
    <path fill-rule="evenodd" d="M104 198 L124 128 L142 128 L162 198 L146 198 L141 180 L125 180 L120 198 Z M128 166 L138 166 L133 146 Z" fill="${v}" stroke="#145C2E" stroke-width="2" stroke-linejoin="round"/>
    <g stroke="#9BF0B4" stroke-width="1.6" fill="none" opacity=".85" stroke-linecap="round">
      <path d="M70 136 v18 h8 v14"/><path d="M78 186 v-8 h-8 v-6"/><path d="M131 136 v-0 l-6 22"/><path d="M148 176 l-6 -20 h-6"/><path d="M114 192 l6 -18"/>
    </g>
    <g fill="#E9FFF0"><circle cx="70" cy="136" r="2"/><circle cx="78" cy="168" r="2"/><circle cx="70" cy="172" r="2"/><circle cx="131" cy="136" r="2"/><circle cx="136" cy="156" r="2"/><circle cx="114" cy="192" r="2"/></g>
    <ellipse cx="74" cy="203" rx="17" ry="7" fill="#F7B92E" stroke="#D98A0E" stroke-width="1.5"/>
    <ellipse cx="110" cy="203" rx="14" ry="6.5" fill="#F7B92E" stroke="#D98A0E" stroke-width="1.5"/>
    <ellipse cx="156" cy="203" rx="14" ry="6.5" fill="#F7B92E" stroke="#D98A0E" stroke-width="1.5"/>`;
  }
  function svg(tipo){
    const id = "m" + (++n);
    if (tipo === "cuerpo") return `<svg viewBox="10 14 180 198" aria-hidden="true">${defs(id)}${cuerpo(id)}${cabeza(id)}</svg><div class="badge">!</div>`;
    return `<svg viewBox="40 26 120 120" aria-hidden="true">${defs(id)}${cabeza(id)}</svg><div class="badge">!</div>`;
  }
  function montar(raiz){ (raiz || document).querySelectorAll("[data-m]").forEach(el => { if (!el.firstChild) el.innerHTML = svg(el.dataset.m); }); }
  return { svg, montar };
})();
