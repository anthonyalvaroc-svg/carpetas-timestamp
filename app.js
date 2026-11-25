/* =========================================================
   APP.JS - SUITE TÉCNICA TORRES UNIDAS (PESTAÑAS 1 A 5)
   ========================================================= */
const MODELOS_TORRE = {
  arbol: {
    nombre: "1. Torre público tipo árbol",
    src: "img/1_torre_arbol.png",
    tipo: "estandar",
    sitioPos: { xRatio: 0.14, yRatio: 0.14 },
    labels: {
      total: { xRatio: 0.37, yRatio: 0.56 },
      base: { xRatio: 0.34, yRatio: 0.905 },
      rolSup: { xRatio: 0.72, yRatio: 0.325 },
      rolInf: { xRatio: 0.72, yRatio: 0.405 }
    }
  },
  monopolo: {
    nombre: "2. Torre monopolo (3 roldanas)",
    src: "img/2_torre_monopolo.png",
    tipo: "monopolo3",
    sitioPos: { xRatio: 0.14, yRatio: 0.14 },
    labels: {
      total: { xRatio: 0.25, yRatio: 0.54 },
      base: { xRatio: 0.26, yRatio: 0.925 },
      r1Sup: { xRatio: 0.78, yRatio: 0.105 },
      r1Inf: { xRatio: 0.78, yRatio: 0.185 },
      r2Sup: { xRatio: 0.78, yRatio: 0.305 },
      r2Inf: { xRatio: 0.78, yRatio: 0.385 },
      r3Sup: { xRatio: 0.78, yRatio: 0.505 },
      r3Inf: { xRatio: 0.78, yRatio: 0.585 }
    }
  },
  autosoportada_normal: {
    nombre: "3. Torre autosoportada (roldana normal)",
    src: "img/3_torre_autosoportada_normal.png",
    tipo: "estandar",
    sitioPos: { xRatio: 0.15, yRatio: 0.15 },
    labels: {
      total: { xRatio: 0.27, yRatio: 0.54 },
      base: { xRatio: 0.28, yRatio: 0.915 },
      rolSup: { xRatio: 0.72, yRatio: 0.145 },
      rolInf: { xRatio: 0.72, yRatio: 0.23 }
    }
  },
  arriostrada_escalera_gato: {
    nombre: "4. Torre arriostrada con escalera gato",
    src: "img/4_torre_arriostrada_escalera.png",
    tipo: "arriostrada_gato",
    sitioPos: { xRatio: 0.15, yRatio: 0.15 },
    labels: {
      total: { xRatio: 0.21, yRatio: 0.55 },
      base: { xRatio: 0.26, yRatio: 0.92 },
      escalera: { xRatio: 0.76, yRatio: 0.80 },
      rolSup: { xRatio: 0.73, yRatio: 0.14 },
      rolInf: { xRatio: 0.73, yRatio: 0.225 }
    }
  },
  ventada_edificio: {
    nombre: "5. Torre ventada con edificio",
    src: "img/5_torre_ventada_edificio.png",
    tipo: "ventada_edif",
    sitioPos: { xRatio: 0.15, yRatio: 0.14 },
    labels: {
      total: { xRatio: 0.19, yRatio: 0.36 },
      edificio: { xRatio: 0.19, yRatio: 0.80 },
      rolSup: { xRatio: 0.73, yRatio: 0.125 },
      rolInf: { xRatio: 0.73, yRatio: 0.21 }
    }
  },
  ventada_piso: {
    nombre: "6. Torre ventada de piso",
    src: "img/6_torre_ventada_piso.png",
    tipo: "ventada_piso",
    sitioPos: { xRatio: 0.15, yRatio: 0.15 },
    labels: {
      total: { xRatio: 0.20, yRatio: 0.56 },
      base: { xRatio: 0.27, yRatio: 0.925 },
      rolSup: { xRatio: 0.73, yRatio: 0.14 },
      rolInf: { xRatio: 0.73, yRatio: 0.225 }
    }
  },
  autosoportada_encima: {
    nombre: "7. Torre autosoportada (roldana encima)",
    src: "img/7_torre_autosoportada_encima.png",
    tipo: "estandar",
    sitioPos: { xRatio: 0.15, yRatio: 0.15 },
    labels: {
      total: { xRatio: 0.27, yRatio: 0.54 },
      base: { xRatio: 0.28, yRatio: 0.915 },
      rolSup: { xRatio: 0.72, yRatio: 0.14 },
      rolInf: { xRatio: 0.72, yRatio: 0.23 }
    }
  },
  arriostrada_edificio_normal: {
    nombre: "8. Torre arriostrada con edificio normal",
    src: "img/8_torre_arriostrada_edificio.png",
    tipo: "arriostrada_edif",
    sitioPos: { xRatio: 0.15, yRatio: 0.14 },
    labels: {
      total: { xRatio: 0.20, yRatio: 0.36 },
      edificio: { xRatio: 0.20, yRatio: 0.79 },
      rolSup: { xRatio: 0.73, yRatio: 0.125 },
      rolInf: { xRatio: 0.73, yRatio: 0.21 }
    }
  },
  autosoportada_sin_roldana: {
    nombre: "9. Torre autosoportada sin roldana",
    src: "img/9_torre_autosoportada_sin_roldana.png",
    tipo: "sin_roldana",
    sitioPos: { xRatio: 0.15, yRatio: 0.15 },
    labels: {
      total: { xRatio: 0.27, yRatio: 0.54 },
      base: { xRatio: 0.28, yRatio: 0.915 }
    }
  },
  estructura_especial: {
    nombre: "10. Torre estructura especial",
    src: "img/10_torre_estructura_especial.png",
    tipo: "sin_roldana",
    sitioPos: { xRatio: 0.13, yRatio: 0.14 },
    labels: {
      total: { xRatio: 0.25, yRatio: 0.55 },
      base: { xRatio: 0.32, yRatio: 0.91 }
    }
  },
  autosoportada_rooftop: {
    nombre: "11. Torre autosoportada rooftop",
    src: "img/11_torre_autosoportada_rooftop.png",
    tipo: "rooftop",
    sitioPos: { xRatio: 0.13, yRatio: 0.14 },
    labels: {
      total: { xRatio: 0.22, yRatio: 0.42 },
      edificio: { xRatio: 0.22, yRatio: 0.80 },
      rolSup: { xRatio: 0.72, yRatio: 0.13 },
      rolInf: { xRatio: 0.72, yRatio: 0.22 }
    }
  },
  monopolo_1_roldana: {
    nombre: "12. Torre monopolo 1 roldana",
    src: "img/12_torre_monopolo_1_roldana.png",
    tipo: "estandar",
    sitioPos: { xRatio: 0.13, yRatio: 0.14 },
    labels: {
      total: { xRatio: 0.26, yRatio: 0.55 },
      base: { xRatio: 0.28, yRatio: 0.92 },
      rolSup: { xRatio: 0.64, yRatio: 0.13 },
      rolInf: { xRatio: 0.64, yRatio: 0.22 }
    }
  },
  monopolo_2_roldanas: {
    nombre: "13. Torre monopolo 2 roldanas",
    src: "img/13_torre_monopolo_2_roldanas.png",
    tipo: "monopolo2",
    sitioPos: { xRatio: 0.13, yRatio: 0.14 },
    labels: {
      total: { xRatio: 0.26, yRatio: 0.55 },
      base: { xRatio: 0.28, yRatio: 0.92 },
      r1Sup: { xRatio: 0.64, yRatio: 0.12 },
      r1Inf: { xRatio: 0.64, yRatio: 0.20 },
      r2Sup: { xRatio: 0.64, yRatio: 0.31 },
      r2Inf: { xRatio: 0.64, yRatio: 0.39 }
    }
  },
  monoposte: {
    nombre: "14. Torre monoposte",
    src: "img/14_torre_monoposte.png",
    tipo: "monoposte",
    sitioPos: { xRatio: 0.14, yRatio: 0.14 },
    labels: {
      total: { xRatio: 0.28, yRatio: 0.52 },
      rolSup: { xRatio: 0.64, yRatio: 0.13 },
      rolInf: { xRatio: 0.64, yRatio: 0.22 }
    }
  }
};
const cacheImagenesTorre = {};
const customImagenesTorre = {};
let listaEquipos = [
  { codigo: "MW 1", altura: 29.50, lado: "IZQ" },
  { codigo: "RF 1", altura: 28.50, lado: "DER" },
  { codigo: "RF 2", altura: 28.50, lado: "DER" },
  { codigo: "RF 3", altura: 28.50, lado: "DER" },
  { codigo: "RRU 1", altura: 27.50, lado: "IZQ" },
  { codigo: "RRU 2", altura: 27.50, lado: "IZQ" },
  { codigo: "RRU 3", altura: 27.50, lado: "IZQ" }
];
let fotosEquipos = [];
let bloqueoArrastreFotos = false;

function getSitio() {
  const el = document.getElementById("sitio");
  return (el ? el.value : "SITIO").trim().toUpperCase() || "SITIO";
}
function getSitioSlug() {
  return getSitio().replace(/[^A-Z0-9_-]+/g, "_");
}
function fmtM(v) {
  const n = parseFloat(v);
  return Number.isFinite(n) ? `${n.toFixed(2)} m` : "0.00 m";
}
function descargarCanvas(canvasId, prefijo) {
  const c = document.getElementById(canvasId);
  if (!c) return;
  const a = document.createElement("a");
  a.download = `${prefijo}_${getSitioSlug()}.png`;
  a.href = c.toDataURL("image/png");
  a.click();
}

function dibujarSimboloTorrePlanta(ctx, tipo, cx, cy, s = 1) {
  ctx.save();
  ctx.strokeStyle = "#111827";
  ctx.lineWidth = 3.5;
  if (tipo === "auto_cuadrado") {
    ctx.strokeRect(cx - 72 * s, cy - 72 * s, 144 * s, 144 * s);
    ctx.beginPath();
    ctx.moveTo(cx - 72 * s, cy - 72 * s); ctx.lineTo(cx + 72 * s, cy + 72 * s);
    ctx.moveTo(cx + 72 * s, cy - 72 * s); ctx.lineTo(cx - 72 * s, cy + 72 * s);
    ctx.stroke();
  } else if (tipo === "auto_triangulo") {
    ctx.beginPath();
    ctx.moveTo(cx, cy - 82 * s); ctx.lineTo(cx - 74 * s, cy + 62 * s); ctx.lineTo(cx + 74 * s, cy + 62 * s);
    ctx.closePath(); ctx.stroke();
  } else if (tipo === "monopolo") {
    ctx.beginPath(); ctx.arc(cx, cy, 62 * s, 0, Math.PI * 2); ctx.stroke();
  } else if (tipo === "ventada") {
    ctx.strokeRect(cx - 46 * s, cy - 46 * s, 92 * s, 92 * s);
  } else {
    ctx.beginPath(); ctx.arc(cx, cy, 44 * s, 0, Math.PI * 2); ctx.stroke();
  }
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(cx - 34, cy - 12, 68, 24);
  ctx.fillStyle = "#111827";
  ctx.font = "bold 15px Arial";
  ctx.textAlign = "center";
  ctx.fillText("TORRE", cx, cy + 5);
  ctx.restore();
}

function dibujarSpat() {
  const c = document.getElementById("canvasSpat");
  if (!c) return;
  const ctx = c.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, c.width, c.height);

  ctx.strokeStyle = "#111827";
  ctx.lineWidth = 5;
  ctx.strokeRect(65, 55, 380, 400);

  ctx.fillStyle = "#dc2626";
  ctx.font = "bold 30px Arial";
  ctx.textAlign = "center";
  ctx.fillText(getSitio(), 255, 95);

  const tipo = document.getElementById("spatTipoTorre")?.value || "auto_cuadrado";
  dibujarSimboloTorrePlanta(ctx, tipo, 255, 275, 1);

  const n = parseInt(document.getElementById("cantidadPozos")?.value, 10) || 3;
  const pts = [
    { x: 345, y: 385 }, { x: 345, y: 175 }, { x: 255, y: 150 },
    { x: 155, y: 175 }, { x: 155, y: 385 }, { x: 250, y: 410 }
  ];
  if (n > 1) {
    ctx.strokeStyle = "#f59e0b";
    ctx.lineWidth = 4;
    ctx.beginPath();
    for (let i = 0; i < n; i++) {
      if (i === 0) ctx.moveTo(pts[i].x, pts[i].y);
      else ctx.lineTo(pts[i].x, pts[i].y);
    }
    ctx.stroke();
  }
  for (let i = 0; i < n; i++) {
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#111827";
    ctx.lineWidth = 2.5;
    ctx.fillRect(pts[i].x - 14, pts[i].y - 18, 28, 36);
    ctx.strokeRect(pts[i].x - 14, pts[i].y - 18, 28, 36);
    ctx.fillStyle = "#111827";
    ctx.font = "bold 14px Arial";
    ctx.fillText(`PT0${i + 1}`, pts[i].x, pts[i].y - 24);
  }

  ctx.strokeStyle = "#16a34a";
  ctx.lineWidth = 5;
  ctx.beginPath(); ctx.moveTo(345, 403); ctx.lineTo(345, 515); ctx.lineTo(445, 560); ctx.stroke();

  ctx.strokeStyle = "#111827";
  ctx.lineWidth = 3;
  ctx.strokeRect(435, 545, 30, 75);
  ctx.fillStyle = "#111827";
  ctx.font = "bold 16px Arial";
  ctx.textAlign = "left";
  ctx.fillText("TELURÓMETRO", 475, 575);

  ctx.strokeStyle = "#0284c7";
  ctx.lineWidth = 5;
  ctx.beginPath(); ctx.moveTo(443, 620); ctx.lineTo(595, 825); ctx.stroke();

  ctx.strokeStyle = "#dc2626";
  ctx.lineWidth = 5;
  ctx.beginPath(); ctx.moveTo(457, 620); ctx.lineTo(720, 935); ctx.stroke();

  const r50 = parseFloat(document.getElementById("val50")?.value || 0).toFixed(2);
  const r60 = parseFloat(document.getElementById("val60")?.value || 0).toFixed(2);
  const r70 = parseFloat(document.getElementById("val70")?.value || 0).toFixed(2);

  const items = [
    { t: "50%-15MTS=", v: `${r50} OHMS`, x: 565, y: 650 },
    { t: "60%-18MTS=", v: `${r60} OHMS`, x: 645, y: 760 },
    { t: "70%-21MTS=", v: `${r70} OHMS`, x: 725, y: 870 }
  ];
  items.forEach(it => {
    ctx.fillStyle = "#111827"; ctx.font = "bold 22px Arial"; ctx.fillText(it.t, it.x, it.y);
    ctx.fillStyle = "#dc2626"; ctx.font = "bold 42px Arial"; ctx.fillText(it.v, it.x, it.y + 42);
  });
}
function dibujarPerimetro() {
  const c = document.getElementById("canvasPerimetro");
  if (!c) return;
  const ctx = c.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, c.width, c.height);

  const wM = parseFloat(document.getElementById("perAncho")?.value) || 8.10;
  const hM = parseFloat(document.getElementById("perLargo")?.value) || 10.00;
  const ratio = Math.max(0.45, Math.min(2.0, wM / hM));
  let rW = 520, rH = Math.round(rW / ratio);
  if (rH > 470) { rH = 470; rW = Math.round(rH * ratio); }
  const rx = Math.round((c.width - rW) / 2), ry = Math.round((c.height - rH) / 2);

  ctx.strokeStyle = "#111827";
  ctx.lineWidth = 4;
  ctx.strokeRect(rx, ry, rW, rH);

  // Puerta de acceso inferior
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(rx + rW / 2 - 35, ry + rH - 6, 70, 12);
  ctx.strokeStyle = "#dc2626";
  ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(rx + rW / 2 - 35, ry + rH); ctx.lineTo(rx + rW / 2 + 25, ry + rH - 28); ctx.stroke();

  ctx.fillStyle = "#111827";
  ctx.font = "bold 17px Arial";
  ctx.textAlign = "center";
  ctx.fillText(`${wM.toFixed(2)} MTS`, rx + rW / 2, ry - 22);
  ctx.fillText(`${wM.toFixed(2)} MTS`, rx + rW / 2, ry + rH + 30);

  ctx.save(); ctx.translate(rx - 45, ry + rH / 2); ctx.rotate(-Math.PI / 2); ctx.fillText(`${hM.toFixed(2)} MTS`, 0, 0); ctx.restore();
  ctx.save(); ctx.translate(rx + rW + 45, ry + rH / 2); ctx.rotate(Math.PI / 2); ctx.fillText(`${hM.toFixed(2)} MTS`, 0, 0); ctx.restore();

  ctx.fillStyle = "#dc2626";
  ctx.font = "bold 28px Arial";
  ctx.fillText(getSitio(), rx + rW / 2, ry + rH / 2 - 78);

  const tipo = document.getElementById("perTipoTorre")?.value || "auto_cuadrado";
  dibujarSimboloTorrePlanta(ctx, tipo, rx + rW / 2, ry + rH / 2 + 15, 0.72);

  const coords = [
    { lbl: "COORDENADA A:", val: document.getElementById("coordA")?.value || "", x: rx + 125, y: ry + 82, ang: -Math.PI / 4 },
    { lbl: "COORDENADA B:", val: document.getElementById("coordB")?.value || "", x: rx + rW - 125, y: ry + 82, ang: Math.PI / 4 },
    { lbl: "COORDENADA C:", val: document.getElementById("coordC")?.value || "", x: rx + rW - 125, y: ry + rH - 82, ang: -Math.PI / 4 },
    { lbl: "COORDENADA D:", val: document.getElementById("coordD")?.value || "", x: rx + 125, y: ry + rH - 82, ang: Math.PI / 4 }
  ];
  coords.forEach(pt => {
    ctx.save();
    ctx.translate(pt.x, pt.y);
    ctx.rotate(pt.ang);
    ctx.fillStyle = "#111827";
    ctx.font = "bold 13px Arial";
    ctx.fillText(pt.lbl, 0, -9);
    ctx.fillText(pt.val, 0, 9);
    ctx.restore();
  });
}

function actualizarCamposVisiblesTorre() {
  const key = document.getElementById("torreTipo")?.value || "arbol";
  const cfg = MODELOS_TORRE[key] || MODELOS_TORRE.arbol;
  const esMono3 = cfg.tipo === "monopolo3";
  const esMono2 = cfg.tipo === "monopolo2";
  const sinRol = cfg.tipo === "sin_roldana";
  const esEdif = cfg.tipo === "ventada_edif" || cfg.tipo === "arriostrada_edif" || cfg.tipo === "rooftop";
  const esGato = cfg.tipo === "arriostrada_gato";

  document.querySelectorAll(".grp-roldana-std").forEach(el => el.hidden = esMono3 || esMono2 || sinRol);
  document.querySelectorAll(".grp-monopolo").forEach((el, idx) => {
    if (esMono3) el.hidden = false;
    else if (esMono2) el.hidden = idx >= 4;
    else el.hidden = true;
  });
  document.querySelectorAll(".grp-escalera").forEach(el => el.hidden = !esGato);
  document.querySelectorAll(".grp-edificio").forEach(el => el.hidden = !esEdif);
}

function dibujarTorre() {
  const c = document.getElementById("canvasTorre");
  if (!c) return;
  const ctx = c.getContext("2d");
  const key = document.getElementById("torreTipo")?.value || "arbol";
  const cfg = MODELOS_TORRE[key] || MODELOS_TORRE.arbol;

  const renderTextos = (w, h) => {
    ctx.fillStyle = "#dc2626";
    ctx.font = "bold 28px Arial";
    ctx.textAlign = "left";
    ctx.fillText(getSitio(), Math.round(w * cfg.sitioPos.xRatio), Math.round(h * cfg.sitioPos.yRatio));

    ctx.fillStyle = "#111827";
    ctx.font = "bold 17px Arial";
    ctx.textAlign = "center";
    const drawCota = (titulo, val, pos) => {
      if (!pos) return;
      const x = Math.round(w * pos.xRatio), y = Math.round(h * pos.yRatio);
      ctx.fillStyle = "rgba(255,255,255,0.88)";
      ctx.fillRect(x - 85, y - 24, 170, 44);
      ctx.fillStyle = "#111827";
      ctx.font = "bold 12px Arial";
      ctx.fillText(titulo, x, y - 8);
      ctx.font = "bold 19px Arial";
      ctx.fillText(fmtM(val), x, y + 13);
    };

    const L = cfg.labels;
    drawCota("ALTURA TORRE + BASE=", document.getElementById("alturaTorre")?.value, L.total);
    drawCota("ALTURA BASE=", document.getElementById("alturaBase")?.value, L.base);
    drawCota("ROLDANA SUPERIOR=", document.getElementById("roldanaSup")?.value, L.rolSup);
    drawCota("ROLDANA INFERIOR=", document.getElementById("roldanaInf")?.value, L.rolInf);
    drawCota("ROLDANA 1 SUP=", document.getElementById("rol1Sup")?.value, L.r1Sup);
    drawCota("ROLDANA 1 INF=", document.getElementById("rol1Inf")?.value, L.r1Inf);
    drawCota("ROLDANA 2 SUP=", document.getElementById("rol2Sup")?.value, L.r2Sup);
    drawCota("ROLDANA 2 INF=", document.getElementById("rol2Inf")?.value, L.r2Inf);
    drawCota("ROLDANA 3 SUP=", document.getElementById("rol3Sup")?.value, L.r3Sup);
    drawCota("ROLDANA 3 INF=", document.getElementById("rol3Inf")?.value, L.r3Inf);
    drawCota("ESCALERA GATO=", document.getElementById("alturaEscaleraGato")?.value, L.escalera);
    drawCota("ALTURA EDIFICIO=", document.getElementById("alturaEdificio")?.value, L.edificio);
  };

  const imgSrc = customImagenesTorre[key] || cfg.src;
  if (cacheImagenesTorre[imgSrc] && cacheImagenesTorre[imgSrc].complete) {
    const img = cacheImagenesTorre[imgSrc];
    c.width = img.naturalWidth || 900;
    c.height = img.naturalHeight || 820;
    ctx.drawImage(img, 0, 0, c.width, c.height);
    renderTextos(c.width, c.height);
    return;
  }

  const img = new Image();
  img.onload = () => {
    cacheImagenesTorre[imgSrc] = img;
    c.width = img.naturalWidth || 900;
    c.height = img.naturalHeight || 820;
    ctx.drawImage(img, 0, 0, c.width, c.height);
    renderTextos(c.width, c.height);
  };
  img.onerror = () => {
    c.width = 900; c.height = 820;
    ctx.fillStyle = "#ffffff"; ctx.fillRect(0, 0, c.width, c.height);
    ctx.strokeStyle = "#0f172a"; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(410, 740); ctx.lineTo(440, 110); ctx.lineTo(460, 110); ctx.lineTo(490, 740); ctx.stroke();
    renderTextos(c.width, c.height);
  };
  img.src = imgSrc;
}
function renderizarListaEquiposUI() {
  const cont = document.getElementById("listaEquiposContainer");
  if (!cont) return;
  cont.innerHTML = "";
  listaEquipos.forEach((eq, idx) => {
    const row = document.createElement("div");
    row.className = "equipo-row";
    row.innerHTML = `
      <input class="col-codigo" type="text" value="${eq.codigo}" oninput="listaEquipos[${idx}].codigo=this.value; recalcularAnotacionesTodasFotos();">
      <input class="col-altura" type="number" step="0.01" value="${eq.altura}" oninput="listaEquipos[${idx}].altura=parseFloat(this.value)||0; recalcularAnotacionesTodasFotos();">
      <button type="button" class="btn-lado-toggle col-lado ${eq.lado === 'IZQ' ? 'lado-izq' : 'lado-der'}" onclick="listaEquipos[${idx}].lado=(listaEquipos[${idx}].lado==='IZQ'?'DER':'IZQ'); renderizarListaEquiposUI(); recalcularAnotacionesTodasFotos();">${eq.lado === 'IZQ' ? '⬅ IZQ' : 'DER ➡'}</button>
      <button type="button" class="btn-danger-sm col-del" onclick="listaEquipos.splice(${idx},1); renderizarListaEquiposUI(); recalcularAnotacionesTodasFotos();">X</button>
    `;
    cont.appendChild(row);
  });
}

function obtenerGruposEquipos() {
  const agrupar = (document.getElementById("equiposAgrupar")?.value || "si") === "si";
  const ordenados = [...listaEquipos].sort((a, b) => b.altura - a.altura);
  if (!agrupar) {
    return ordenados.map(e => ({ texto: `${e.codigo} (${Number(e.altura).toFixed(1)}m)`, altura: e.altura, lado: e.lado }));
  }
  const grupos = [];
  ordenados.forEach(e => {
    const pref = (e.codigo.match(/^[A-ZÁÉÍÓÚÑ]+/i)?.[0] || e.codigo).toUpperCase();
    const num = e.codigo.match(/\d+/)?.[0] || "";
    const ex = grupos.find(g => g.pref === pref && Math.abs(g.altura - e.altura) < 0.05 && g.lado === e.lado);
    if (ex && num) ex.nums.push(num);
    else grupos.push({ pref, nums: num ? [num] : [], raw: e.codigo, altura: e.altura, lado: e.lado });
  });
  return grupos.map(g => {
    const label = g.nums.length > 1 ? `${g.pref} ${g.nums.join("-")}` : (g.nums.length === 1 ? `${g.pref} ${g.nums}` : g.raw);
    return { texto: `${label} (${Number(g.altura).toFixed(1)}m)`, altura: g.altura, lado: g.lado };
  });
}

function recalcularAnotacionesTodasFotos() {
  const hMax = parseFloat(document.getElementById("equiposAlturaRef")?.value) || 30;
  const grupos = obtenerGruposEquipos();
  fotosEquipos.forEach(foto => {
    foto.anotaciones = grupos.map((g, i) => {
      const ratioY = Math.max(0.08, Math.min(0.90, 0.90 - (g.altura / hMax) * 0.78));
      const esIzq = g.lado === "IZQ";
      return {
        texto: g.texto,
        lx: esIzq ? 0.22 : 0.78,
        ly: ratioY,
        tx: esIzq ? 0.47 : 0.53,
        ty: ratioY
      };
    });
    dibujarFotoEquipo(foto);
  });
}

function dibujarFotoEquipo(foto) {
  const c = foto.canvas, ctx = c.getContext("2d");
  ctx.drawImage(foto.img, 0, 0, c.width, c.height);
  const fSize = parseInt(document.getElementById("equiposFontSize")?.value, 10) || 20;
  foto.anotaciones.forEach(an => {
    const lx = an.lx * c.width, ly = an.ly * c.height, tx = an.tx * c.width, ty = an.ty * c.height;
    ctx.strokeStyle = "#ef1d1d";
    ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(lx, ly); ctx.lineTo(tx, ty); ctx.stroke();

    ctx.fillStyle = "#ef1d1d";
    ctx.beginPath(); ctx.arc(tx, ty, 5.5, 0, Math.PI * 2); ctx.fill();

    ctx.font = `bold ${fSize}px Arial`;
    ctx.textAlign = lx < tx ? "right" : "left";
    ctx.textBaseline = "middle";
    const off = lx < tx ? -8 : 8;
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 4;
    ctx.strokeText(an.texto, lx + off, ly);
    ctx.fillText(an.texto, lx + off, ly);
  });
}

function renderizarGaleriaEquipos() {
  const gal = document.getElementById("galeriaEquipos");
  if (!gal) return;
  gal.innerHTML = "";
  if (!fotosEquipos.length) {
    gal.innerHTML = `<div class="empty-photos-msg">Sube de 1 a 4 fotos panorámicas de la torre para generar automáticamente las flechas rojas.</div>`;
    return;
  }
  fotosEquipos.forEach((foto, idx) => {
    const card = document.createElement("div");
    card.className = "foto-card";
    const head = document.createElement("div");
    head.className = "foto-card-header";
    head.innerHTML = `<span class="foto-card-title">Foto ${idx + 1}</span>`;
    const btnDl = document.createElement("button");
    btnDl.type = "button";
    btnDl.className = "btn-action btn-primary";
    btnDl.textContent = "Descargar PNG";
    btnDl.onclick = () => {
      const a = document.createElement("a");
      a.download = `EQUIPOS_F${idx + 1}_${getSitioSlug()}.png`;
      a.href = foto.canvas.toDataURL("image/png");
      a.click();
    };
    head.appendChild(btnDl);
    card.appendChild(head);
    card.appendChild(foto.canvas);
    gal.appendChild(card);
  });
}
let mapaRuta = null, capaRuta = null, marcadorOrigen = null, marcadorDestino = null, imagenMapaCapturada = null;
let rutaBoxPos = { x: 640, y: 120 }, rutaTargetPos = { x: 320, y: 310 }, dragRutaMode = null;

function inicializarMapaRuta() {
  if (typeof L === "undefined") return;
  const el = document.getElementById("mapaRutaLeaflet");
  if (!el) return;
  if (!mapaRuta) {
    mapaRuta = L.map("mapaRutaLeaflet", { preferCanvas: true }).setView([-12.06, -77.04], 12);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap",
      crossOrigin: "anonymous",
      maxZoom: 19
    }).addTo(mapaRuta);
    mapaRuta.on("moveend zoomend", () => setTimeout(capturarMapaParaCanvasRuta, 450));
  }
  setTimeout(() => {
    mapaRuta.invalidateSize();
    capturarMapaParaCanvasRuta();
  }, 250);
}

function capturarMapaParaCanvasRuta() {
  const el = document.getElementById("mapaRutaLeaflet");
  if (!el || typeof html2canvas === "undefined") {
    dibujarCanvasRutaFinal();
    return;
  }
  html2canvas(el, { useCORS: true, allowTaint: true, logging: false })
    .then(canvasCap => {
      imagenMapaCapturada = canvasCap;
      dibujarCanvasRutaFinal();
    })
    .catch(() => dibujarCanvasRutaFinal());
}

function dibujarCanvasRutaFinal() {
  const c = document.getElementById("canvasRutaFinal");
  if (!c) return;
  const ctx = c.getContext("2d");
  ctx.fillStyle = "#e2e8f0";
  ctx.fillRect(0, 0, c.width, c.height);

  if (imagenMapaCapturada) {
    ctx.drawImage(imagenMapaCapturada, 0, 0, c.width, c.height);
  } else {
    // Cuadrícula cartográfica limpia mientras carga el mapa
    ctx.strokeStyle = "#cbd5e1";
    ctx.lineWidth = 1;
    for (let x = 0; x < c.width; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, c.height); ctx.stroke(); }
    for (let y = 0; y < c.height; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(c.width, y); ctx.stroke(); }
  }

  const texto = (document.getElementById("rutaDetalleTexto")?.value || `RUTA DE ACCESO AL SITIO ${getSitio()}`).toUpperCase();
  const boxW = 290, boxH = 260;
  const bx = Math.max(10, Math.min(c.width - boxW - 10, rutaBoxPos.x));
  const by = Math.max(10, Math.min(c.height - boxH - 10, rutaBoxPos.y));

  // Flecha roja hacia el custodio
  ctx.strokeStyle = "#ef1d1d";
  ctx.lineWidth = 3.5;
  ctx.beginPath();
  ctx.moveTo(bx, by + boxH / 2);
  ctx.lineTo(rutaTargetPos.x, rutaTargetPos.y);
  ctx.stroke();

  ctx.fillStyle = "#ef1d1d";
  ctx.beginPath();
  ctx.arc(rutaTargetPos.x, rutaTargetPos.y, 6, 0, Math.PI * 2);
  ctx.fill();

  // Cuadro blanco con borde rojo
  ctx.fillStyle = "rgba(255,255,255,0.95)";
  ctx.fillRect(bx, by, boxW, boxH);
  ctx.strokeStyle = "#ef1d1d";
  ctx.lineWidth = 3.5;
  ctx.strokeRect(bx, by, boxW, boxH);

  ctx.fillStyle = "#ef1d1d";
  ctx.font = "bold 12px Arial";
  ctx.textAlign = "left";
  const palabras = texto.split(/\s+/);
  let linea = "", ly = by + 22;
  palabras.forEach(p => {
    const test = linea + p + " ";
    if (ctx.measureText(test).width > boxW - 22) {
      ctx.fillText(linea, bx + 11, ly);
      linea = p + " ";
      ly += 17;
    } else {
      linea = test;
    }
  });
  if (ly < by + boxH - 10) ctx.fillText(linea, bx + 11, ly);
}
function dibujarTabActiva(tabId) {
  if (tabId === "tabSpat") dibujarSpat();
  else if (tabId === "tabPerimetro") dibujarPerimetro();
  else if (tabId === "tabTorre") { actualizarCamposVisiblesTorre(); dibujarTorre(); }
  else if (tabId === "tabEquipos") renderizarGaleriaEquipos();
  else if (tabId === "tabRuta") { inicializarMapaRuta(); dibujarCanvasRutaFinal(); }
}

window.addEventListener("DOMContentLoaded", () => {
  // Navegación por pestañas
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-tab");
      document.querySelectorAll(".tab-btn").forEach(b => {
        b.classList.toggle("active", b === btn);
        b.setAttribute("aria-selected", b === btn ? "true" : "false");
      });
      document.querySelectorAll(".tab-panel").forEach(p => {
        const active = p.id === target;
        p.classList.toggle("active", active);
        p.hidden = !active;
      });
      dibujarTabActiva(target);
    });
  });

  // Sincronización global de Sitio, Torre y Altura
  document.getElementById("sitio")?.addEventListener("input", () => {
    dibujarSpat(); dibujarPerimetro(); dibujarTorre(); dibujarCanvasRutaFinal();
  });

  document.getElementById("globalTipoTorre")?.addEventListener("change", (e) => {
    const val = e.target.value;
    const tSel = document.getElementById("torreTipo");
    if (tSel) tSel.value = val;
    const mapSimb = {
      arbol: "monopolo", monopolo: "monopolo", monopolo_1_roldana: "monopolo",
      monopolo_2_roldanas: "monopolo", monoposte: "monopolo",
      ventada_edificio: "ventada", ventada_piso: "ventada",
      arriostrada_escalera_gato: "arriostrada", arriostrada_edificio_normal: "arriostrada"
    };
    const s = mapSimb[val] || "auto_cuadrado";
    if (document.getElementById("spatTipoTorre")) document.getElementById("spatTipoTorre").value = s;
    if (document.getElementById("perTipoTorre")) document.getElementById("perTipoTorre").value = s;
    actualizarCamposVisiblesTorre(); dibujarTorre(); dibujarSpat(); dibujarPerimetro();
  });

  document.getElementById("globalAlturaTorre")?.addEventListener("input", (e) => {
    const h = e.target.value;
    if (document.getElementById("alturaTorre")) document.getElementById("alturaTorre").value = h;
    if (document.getElementById("equiposAlturaRef")) document.getElementById("equiposAlturaRef").value = h;
    dibujarTorre(); recalcularAnotacionesTodasFotos();
  });

  // Eventos SPAT, Perímetro y Torre
  ["spatTipoTorre", "cantidadPozos", "val50", "val60", "val70"].forEach(id =>
    document.getElementById(id)?.addEventListener("input", dibujarSpat)
  );
  document.getElementById("btnActualizarSpat")?.addEventListener("click", dibujarSpat);
  document.getElementById("btnDescargarSpat")?.addEventListener("click", () => descargarCanvas("canvasSpat", "1_ESQUEMA_SPAT"));

  ["perAncho", "perLargo", "perTipoTorre", "coordA", "coordB", "coordC", "coordD"].forEach(id =>
    document.getElementById(id)?.addEventListener("input", dibujarPerimetro)
  );
  document.getElementById("btnActualizarPer")?.addEventListener("click", dibujarPerimetro);
  document.getElementById("btnDescargarPer")?.addEventListener("click", () => descargarCanvas("canvasPerimetro", "2_ESQUEMA_PERIMETRO"));

  document.getElementById("torreTipo")?.addEventListener("change", () => { actualizarCamposVisiblesTorre(); dibujarTorre(); });
  ["alturaTorre", "alturaBase", "roldanaSup", "roldanaInf", "rol1Sup", "rol1Inf", "rol2Sup", "rol2Inf", "rol3Sup", "rol3Inf", "alturaEscaleraGato", "alturaEdificio"]
    .forEach(id => document.getElementById(id)?.addEventListener("input", dibujarTorre));
  document.getElementById("btnActualizarTorre")?.addEventListener("click", dibujarTorre);
  document.getElementById("btnDescargarTorre")?.addEventListener("click", () => descargarCanvas("canvasTorre", "3_ESQUEMA_TORRE"));

  // Eventos Equipos en Torre
  document.getElementById("btnAgregarEquipo")?.addEventListener("click", () => {
    listaEquipos.push({ codigo: "RF NUEVO", altura: 25.00, lado: "DER" });
    renderizarListaEquiposUI(); recalcularAnotacionesTodasFotos();
  });
  document.getElementById("equiposFotos")?.addEventListener("change", (e) => {
    const files = Array.from(e.target.files).slice(0, 4);
    fotosEquipos = [];
    files.forEach(f => {
      const img = new Image();
      img.onload = () => {
        const c = document.createElement("canvas");
        c.width = 800; c.height = Math.round(800 * (img.naturalHeight / img.naturalWidth));
        const fotoObj = { img, canvas: c, anotaciones: [] };
        c.addEventListener("pointerdown", (ev) => {
          if (bloqueoArrastreFotos) return;
          const r = c.getBoundingClientRect();
          const nx = (ev.clientX - r.left) / r.width, ny = (ev.clientY - r.top) / r.height;
          fotoObj.anotaciones.forEach(an => {
            if (Math.hypot(nx - an.tx, ny - an.ty) < 0.05) fotoObj.drag = { an, mode: "target" };
            else if (Math.hypot(nx - an.lx, ny - an.ly) < 0.09) fotoObj.drag = { an, mode: "label" };
          });
        });
        c.addEventListener("pointermove", (ev) => {
          if (!fotoObj.drag) return;
          const r = c.getBoundingClientRect();
          const nx = Math.max(0.03, Math.min(0.97, (ev.clientX - r.left) / r.width));
          const ny = Math.max(0.03, Math.min(0.97, (ev.clientY - r.top) / r.height));
          if (fotoObj.drag.mode === "target") { fotoObj.drag.an.tx = nx; fotoObj.drag.an.ty = ny; }
          else { fotoObj.drag.an.lx = nx; fotoObj.drag.an.ly = ny; }
          dibujarFotoEquipo(fotoObj);
        });
        window.addEventListener("pointerup", () => { fotoObj.drag = null; });
        fotosEquipos.push(fotoObj);
        recalcularAnotacionesTodasFotos();
        renderizarGaleriaEquipos();
      };
      img.src = URL.createObjectURL(f);
    });
  });

  // Eventos Ruta al Sitio
  document.getElementById("btnCalcularRuta")?.addEventListener("click", () => {
    const orig = document.getElementById("rutaOrigen")?.value || "CUSTODIO";
    const dest = document.getElementById("rutaDestino")?.value || document.getElementById("coordA")?.value || getSitio();
    document.getElementById("rutaDetalleTexto").value = `SACAR LLAVES EN ${orig} Y DIRIGIRSE HACIA LA ESTACIÓN ${getSitio()} (${dest}).`;
    inicializarMapaRuta();
    dibujarCanvasRutaFinal();
  });
  document.getElementById("btnAbrirGoogleMaps")?.addEventListener("click", () => {
    const orig = encodeURIComponent(document.getElementById("rutaOrigen")?.value || "");
    const dest = encodeURIComponent(document.getElementById("rutaDestino")?.value || document.getElementById("coordA")?.value || "");
    window.open(`https://google.com{orig}&destination=${dest}`, "_blank");
  });
  document.getElementById("btnRedibujarRuta")?.addEventListener("click", capturarMapaParaCanvasRuta);
  document.getElementById("btnDescargarRuta")?.addEventListener("click", () => descargarCanvas("canvasRutaFinal", "5_RUTA_SITIO"));

  // Render inicial
  renderizarListaEquiposUI();
  renderizarGaleriaEquipos();
  dibujarSpat();
  dibujarPerimetro();
  actualizarCamposVisiblesTorre();
  dibujarTorre();
});
