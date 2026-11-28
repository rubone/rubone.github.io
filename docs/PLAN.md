# Plan — Nuevo sitio rubensaavedra.net

Reemplazar el sitio actual (HTML estático + plantilla vieja) por un portafolio nuevo en **Next.js con exportación estática**, con el diseño **A · Clean Light**, publicado en GitHub Pages mediante un GitHub Action.

Objetivo: un sitio más fresco, limpio y moderno, que funcione bien en celular, en inglés y español, y que se actualice con solo hacer push a `main`.

## Opciones de diseño

Seleccionada: **A · Clean Light** (referencia: `docs/design/option-a.html`).

| Opción | Estilo | Fuerte en | Contra | Estado |
| --- | --- | --- | --- | --- |
| A · Clean Light | Fondo claro, Space Grotesk + Inter, acento azul `#1F4FD8`, tarjetas con borde suave, CTA de contacto en bloque oscuro | Profesional y seguro para reclutadores | Menos memorable | **Seleccionada** |
| B · Dark Engineer | Modo oscuro, JetBrains Mono, acento lima, tarjeta de código C# en el hero, bento grid | Personalidad de developer | Muy técnico para clientes no-técnicos | Descartada |
| C · Editorial | Tipografía gigante (Bricolage Grotesque), reglas negras tipo revista, acento naranja | La más distintiva | Depende de buenas fotos y capturas | Descartada |

Secciones de la opción A: navegación · hero con foto y badge "Open to new projects" · stack · trabajos seleccionados · experiencia · certificaciones · contacto · footer.

## Plan por pasos

Rama de trabajo: `feature/redesign`.

### Paso 0 — Arreglar dominio y SSL

- [x] DNS en Namecheap: 4 registros A a `185.199.108–111.153`, CNAME `www` → `rubone.github.io`, borrar parking y URL redirect
- [x] GitHub Pages apuntando a la rama `main`
- [x] Enforce HTTPS activado

### Paso 1 — Maqueta con texto de prueba

- [x] Crear proyecto Next.js + TypeScript + Tailwind en la rama `feature/redesign`
- [x] Configurar `output: 'export'`, fuentes y tokens de color de la opción A
- [x] Componentes: Header, Hero, Stack, Work, Experience, Contact, Footer
- [x] Responsive: probar en 375 px, 768 px y 1440 px
- [x] `npm run build` genera `out/` sin errores
- [x] Componente Certifications (entre Experience y Contact, ver `docs/design/option-a.html`) + enlace en el menú

### Paso 2 — Contenido real

- [x] Extraer textos, experiencia y proyectos de `index.html` e `index-en.html` (experiencia desde 2008, sin MARENA)
- [x] Reutilizar `img/` (capturas) y `cv/CURRICULO_VITAE.pdf` → copiados a `public/`
- [ ] Escribir bio, descripciones de proyectos y logros por puesto
- [x] Certificaciones reales: nombre, emisor, año, logo y enlace de verificación
- [x] Enlaces reales: email, GitHub, LinkedIn, CV
- [x] Reemplazar el formulario PHP por `mailto:` o Formspree (`mailto:`)
- [ ] Completar "Selected work" con proyectos reales: nombre, una línea, stack, captura y enlace
- [x] Experiencia reciente según el CV actualizado (`public/cv/Ruben_Saavedra_Resume.pdf`)

### Paso 3 — Pulido: idiomas, SEO y accesibilidad

- [x] Versión ES/EN con selector de idioma (EN en `/`, ES en `/es/`)
- [x] Metadata: título, descripción, Open Graph (imagen por idioma; plantilla en `docs/design/social-images.html`)
- [x] `sitemap.xml`, `robots.txt`, favicon nuevo
- [x] Contraste, navegación con teclado y Lighthouse (meta: 90+) → móvil 97 / escritorio 100 en rendimiento; 100 en accesibilidad, buenas prácticas y SEO

### Paso 4 — GitHub Action de deploy

- [x] `.github/workflows/deploy.yml`: instalar → lint → `next build` → subir `out/` → `actions/deploy-pages` (cada push compila; solo `main` publica)
- [x] `public/.nojekyll` y `public/CNAME` con `rubensaavedra.net`
- [x] Probar el workflow antes del lanzamiento (build OK en `feature/redesign`; deploy omitido fuera de `main`)

### Paso 5 — Lanzamiento

- [x] Tag `v1-legacy` del sitio actual como respaldo
- [x] Merge de `feature/redesign` a `main` (PR #1)
- [x] Settings → Pages → Source: **GitHub Actions**
- [x] Verificar `https://rubensaavedra.net` y `www` (www y http redirigen a https://rubensaavedra.net)
- [x] Redirigir `index-en.html` a la ruta nueva en inglés (`public/index-en.html` → `/`)
- [x] Borrar archivos viejos (`php/`, `vendor/`, `css/`, `js/`, más `index*.html`, `img/`, `cv/`, favicons y `CNAME` de la raíz)

## Contenido que falta reunir

- [x] Email de contacto, URL de GitHub y LinkedIn
- [x] Experiencia: empresas, puestos, años y un logro por puesto
- [ ] 3–6 proyectos: nombre, una línea, stack, captura y enlace
- [x] Certificaciones: nombre, emisor, año, logo y URL de verificación (Credly, Microsoft Learn, etc.)
- [x] Foto actualizada → `public/img/ruben-saavedra.jpg`
- [x] CV actualizado en PDF
- [x] ¿Bilingüe desde el lanzamiento o solo inglés al inicio? → bilingüe
