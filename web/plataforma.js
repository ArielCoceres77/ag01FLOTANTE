// Una sola interfaz para la isla: escritorio (Electron), Android (puente nativo) o navegador.
(() => {
  // --- Escritorio: preload.js ya expuso window.ag1 ---
  if (window.ag1) { window.AG1_PLATAFORMA = "escritorio"; return; }

  // --- Android: el puente nativo AG1Android ---
  if (window.AG1Android) {
    window.AG1_PLATAFORMA = "android";
    const pendientes = new Map(); let n = 0;
    window.__ag1Resp = (id, json) => { const p = pendientes.get(id); if (!p) return; pendientes.delete(id); try { p(JSON.parse(json)); } catch { p({ error: "respuesta inválida" }); } };
    const pedir = (metodo, args) => new Promise(ok => { const id = "r" + (++n); pendientes.set(id, ok); window.AG1Android.pedir(id, metodo, JSON.stringify(args ?? null)); });
    const oyentes = [];
    window.__ag1Accion = a => oyentes.forEach(f => f(a));
    let vozCb = null;
    window.__ag1Voz = (tipo, texto) => vozCb && vozCb(tipo, texto);
    window.ag1 = {
      tamano: (w, h) => window.AG1Android.tamano(w, h),
      posicion: p => window.AG1Android.posicion(p),
      foco: si => window.AG1Android.foco(!!si),
      observando: si => window.AG1Android.observando(!!si),
      notificar: (t, c) => window.AG1Android.notificar(t, c),
      pantalla: o => pedir("pantalla", o),
      claude: c => pedir("claude", c),
      voz: t => pedir("voz", { texto: t }),
      claveEstado: () => pedir("claveEstado"),
      claveGuardar: (tipo, k) => pedir("claveGuardar", { tipo, clave: k }),
      inicioEstado: async () => null,
      inicioPoner: async () => null,
      hablarLocal: t => window.AG1Android.hablar(t),
      callar: () => window.AG1Android.callar(),
      escuchar: cb => { vozCb = cb; window.AG1Android.escuchar(); },
      alAccion: f => oyentes.push(f)
    };
    return;
  }

  // --- Navegador común: lo que se pueda ---
  window.AG1_PLATAFORMA = "web";
  window.ag1 = {
    tamano(){}, posicion(){}, foco(){}, observando(){}, notificar(){},
    pantalla: async () => ({ error: "Mirar la pantalla funciona en la app de compu o de Android." }),
    claude: async () => ({ error: "sin_clave" }), voz: async () => ({ error: "sin_clave" }),
    claveEstado: async () => ({ claude: false, eleven: false }), claveGuardar: async () => ({ claude: false, eleven: false }),
    inicioEstado: async () => null, inicioPoner: async () => null, alAccion(){}
  };
})();
