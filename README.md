# Generador de Esquemas Técnicos (SPAT / Perímetro / Torre / Equipos / Ruta)

Aplicación web estática optimizada para móvil y escritorio que permite generar y descargar cada esquema técnico de forma independiente en PNG:

1. **F12M - SPAT**: Diagrama de puesta a tierra con pozos (`PT01`–`PT06`), telurómetro y lecturas en OHMS.
2. **Esquema 1 - Perímetro**: Plano rectangular proporcional con puerta de acceso, cotas en metros y coordenadas inclinadas (`A`, `B`, `C`, `D`).
3. **Esquema 2 - Torre**: Elevación proporcional con los 14 modelos de estructura y sincronización automática de altura y símbolo con las demás pestañas.
4. **Esquema de Equipos en Torre**:
   - Carga de 1 a 4 fotos panorámicas con descarga unificada de todas las fotos en 1 sola imagen PNG (horizontal, cuadrícula 2x2 o vertical) además de descarga individual.
   - Lectura automática del sello GPS y nombre de sitio desde fotos de Timestamp Camera.
   - Importación directa desde archivos Excel (`.xlsx`), `.csv`, capturas `.jpg`/`.png` (OCR) o pegado desde el portal, además de plantillas rápidas.
   - Calibración en 2 toques (`Cima / Base`), alineación en margen, bloqueo de arrastre para scroll móvil y desplazamiento táctil de precisión.
5. **Ruta al Sitio**:
   - Mapa interactivo con cálculo de ruta vehicular (OSRM + OpenStreetMap) y cuadro de texto rojo arrastrable exportable a PNG.

## Nota sobre imágenes de torres (`img/`)
Para la pestaña **3. Esquema 2 - Torre**, coloca tus plantillas base dentro de la carpeta `img/` con los siguientes nombres (o cárgalas manualmente desde el botón *"Imagen base de este modelo"*):
- `img/1_torre_arbol.png`
- `img/2_torre_monopolo.png`
- `img/3_torre_autosoportada_normal.png`
- `img/4_torre_arriostrada_escalera.png`
- `img/5_torre_ventada_edificio.png`
- `img/6_torre_ventada_piso.png`
- `img/7_torre_autosoportada_encima.png`
- `img/8_torre_arriostrada_edificio.png`
- `img/9_torre_autosoportada_sin_roldana.png`
- `img/10_torre_estructura_especial.png`
- `img/11_torre_autosoportada_rooftop.png`
- `img/12_torre_monopolo_1_roldana.png`
- `img/13_torre_monopolo_2_roldanas.png`
- `img/14_torre_monoposte.png`
