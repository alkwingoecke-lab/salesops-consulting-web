<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Notas prácticas sobre proceso de ventas, adopción de CRM y cómo elegir la herramienta correcta para tu pyme en Chile. El blog de SalesOps.">
<title>Blog de gestión comercial y CRM para pymes | SalesOps</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&family=Outfit:wght@300;400;500;600;700&display=swap">
<style>
  :root{
    --bg:#F1F3F7; --surface:#FFFFFF; --ink:#0B1020; --ink-soft:#333B4D; --muted:#616B7E;
    --line:#D6DCE6; --line-soft:#E7EAF1; --accent:#1E3A8A; --accent-weak:#E8ECF7;
    --pipe:#017737; --pipe-weak:#E4F0E9; --shadow:0 1px 2px rgba(11,16,32,.05);
  }
  @media (prefers-color-scheme:dark){
    :root:not([data-theme="light"]){
      --bg:#0B1020; --surface:#141C31; --ink:#EEF1F6; --ink-soft:#C6CEDC; --muted:#8A98B0;
      --line:rgba(138,152,176,.22); --line-soft:rgba(138,152,176,.12); --accent:#8FA9E8; --accent-weak:rgba(143,169,232,.15);
      --pipe:#54A970; --pipe-weak:rgba(84,169,112,.15); --shadow:none;
    }
  }
  :root[data-theme="dark"]{
    --bg:#0B1020; --surface:#141C31; --ink:#EEF1F6; --ink-soft:#C6CEDC; --muted:#8A98B0;
    --line:rgba(138,152,176,.22); --line-soft:rgba(138,152,176,.12); --accent:#8FA9E8; --accent-weak:rgba(143,169,232,.15);
    --pipe:#54A970; --pipe-weak:rgba(84,169,112,.15); --shadow:none;
  }

  *{box-sizing:border-box}
  html{-webkit-text-size-adjust:100%}
  body{margin:0;background:var(--bg);color:var(--ink);font-family:"Outfit",system-ui,-apple-system,Segoe UI,Roboto,sans-serif;font-size:17.5px;line-height:1.62;-webkit-font-smoothing:antialiased}

  .spine{max-width:740px;margin:0 auto;padding:0 clamp(20px,5.5vw,40px)}
  .block{padding:clamp(34px,6vw,58px) 0}
  .block.tight{padding:clamp(24px,4vw,38px) 0}
  .block.ruled{border-top:1px solid var(--line)}

  h1,h2,h3{font-family:"Instrument Serif",Georgia,serif;font-weight:400;letter-spacing:.005em;line-height:1.1;text-wrap:balance;margin:0}
  p{margin:0 0 1.05em}
  a{color:var(--accent);text-decoration:none;border-bottom:1px solid color-mix(in srgb,var(--accent) 38%,transparent)}
  a:hover{border-bottom-color:var(--accent)}
  strong{font-weight:600}
  .kick{font-family:"IBM Plex Mono",ui-monospace,Menlo,monospace;font-size:.72rem;text-transform:uppercase;letter-spacing:.16em;color:var(--muted);font-weight:500}
  .prose p{max-width:64ch;color:var(--ink-soft)}
  .prose p.plain{color:var(--ink)}
  h2{font-size:clamp(1.55rem,3.8vw,2.25rem);margin-bottom:.5em}
  .after-kick{margin-top:.7em}

  .masthead{background:linear-gradient(165deg,#0A1026 0%,#06070F 94%);color:#EEF1F6;border-bottom:2px solid #35B06B;padding-top:clamp(24px,5vw,40px);padding-bottom:clamp(32px,6vw,52px)}
  .dateline{display:flex;justify-content:space-between;align-items:center;gap:14px;border-bottom:1px solid rgba(238,241,246,.16);padding-bottom:14px;margin-bottom:clamp(30px,6vw,50px);flex-wrap:wrap}
  .wordmark{font-family:"Instrument Serif",Georgia,serif;font-size:1.3rem;color:var(--ink)}
  .wordmark .ops{color:var(--accent)}
  .masthead .wordmark{color:#EEF1F6}
  .masthead .wordmark .ops{color:#7C9CE6}
  .dateline .right{font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:.7rem;text-transform:uppercase;letter-spacing:.14em;color:#8A98B0}
  .masthead .kick{color:#7CCB98}
  .hl{font-size:clamp(2.6rem,9vw,4.6rem);line-height:.98;margin-top:.35em;color:#F4F6FA}
  .hl .tick{display:inline-block;width:.2em;height:.2em;background:#35B06B;transform:skewX(-14deg);margin-left:.1em;vertical-align:.12em}
  .dek{font-family:"Instrument Serif",Georgia,serif;font-size:clamp(1.35rem,3.6vw,2rem);line-height:1.16;color:#C7CEDB;margin:.45em 0 0;max-width:28ch}
  .subfoot{display:flex;gap:18px;flex-wrap:wrap;align-items:center;margin-top:clamp(20px,4vw,32px);font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:.7rem;letter-spacing:.06em;color:#8A98B0}
  .subfoot a{color:#8A98B0;border:0}
  .subfoot a:hover{color:#EEF1F6}

  /* post list */
  .posts{margin-top:8px}
  .post{border-top:1px solid var(--line);padding:26px 0}
  .post:first-child{border-top:1px solid var(--ink)}
  .post .meta{font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:.66rem;text-transform:uppercase;letter-spacing:.11em;color:var(--muted);display:flex;gap:12px;flex-wrap:wrap}
  .post h3{font-size:clamp(1.4rem,3.2vw,1.95rem);margin:.4em 0 .35em}
  .post h3 a{color:var(--ink);border:0}
  .post h3 a:hover{color:var(--accent)}
  .post-ex{color:var(--ink-soft);max-width:66ch;margin:0}
  .post .more{font-family:"Outfit",sans-serif;font-weight:600;font-size:.9rem;color:var(--accent);display:inline-block;margin-top:.7em;border:0}
  .post .more:hover{border-bottom:1px solid var(--accent)}
  .post.soon h3{color:var(--muted)}
  .post.soon .tag{color:var(--muted)}

  .cta{background:#0A1122;border-top:2px solid var(--pipe);color:#EEF1F6}
  .cta .spine{padding-top:clamp(36px,6vw,56px);padding-bottom:clamp(36px,6vw,56px)}
  .cta .kick{color:#7CCB98}
  .cta h2{color:#F4F6FA;margin:.5em 0 .3em}
  .cta p{color:#C6CEDC;max-width:54ch}
  .btns{display:flex;flex-wrap:wrap;gap:13px;align-items:center;margin-top:1.3em}
  .btn{display:inline-block;font-family:"Outfit";font-weight:600;font-size:.97rem;padding:14px 26px;border-radius:3px;cursor:pointer;border:1px solid transparent}
  .btn.primary{background:#3E5BD9;color:#fff;border-color:#3E5BD9}
  .btn.primary:hover{background:#4A67E6}
  .btn.ghost{background:transparent;color:#EEF1F6;border-color:rgba(238,241,246,.34)}
  .btn.ghost:hover{border-color:#EEF1F6}
  .selfserve{font-size:.85rem;color:#8A98B0;margin-top:16px}
  .selfserve a{color:#7CCB98;border-bottom-color:rgba(124,203,152,.4)}

  .foot{background:var(--bg);border-top:1px solid var(--line)}
  .foot .spine{padding-top:28px;padding-bottom:26px}
  .foot-brand{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
  .badge{font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:.62rem;text-transform:uppercase;letter-spacing:.1em;color:var(--pipe);border:1px solid color-mix(in srgb,var(--pipe) 45%,transparent);padding:4px 9px;border-radius:2px;background:var(--pipe-weak)}
  .foot .small{font-size:.82rem;color:var(--muted);margin-top:12px;max-width:60ch}
  .foot .small a{color:var(--muted)}

  .ficha{border:1px dashed var(--line);border-radius:4px;padding:20px 22px}
  .ficha .kick{display:block;margin-bottom:.7em;color:var(--accent)}
  .ficha dl{margin:0;font-size:.86rem}
  .ficha dt{font-family:"IBM Plex Mono",ui-monospace,monospace;text-transform:uppercase;letter-spacing:.08em;font-size:.62rem;color:var(--muted);margin-top:.9em}
  .ficha dd{margin:.15em 0 0;color:var(--ink-soft);word-break:break-word}
  .ficha code{font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:.82rem;background:var(--accent-weak);padding:.12em .45em;border-radius:2px;color:var(--ink)}

  ::selection{background:var(--accent);color:#fff}
  a:focus-visible,.btn:focus-visible{outline:2px solid var(--accent);outline-offset:3px;border-radius:2px}
</style>
</head>
<body>

<header class="masthead">
  <div class="spine">
    <div class="dateline">
      <span class="wordmark"><b>Sales</b><span class="ops">Ops</span></span>
      <span class="right">Blog / 2026</span>
    </div>
    <p class="kick">Gestión comercial y CRM</p>
    <h1 class="hl">Vender con criterio<span class="tick"></span></h1>
    <p class="dek">Notas prácticas de proceso, adopción y elección de CRM para pymes en Chile.</p>
    <div class="subfoot">
      <nav><a href="/">Inicio</a> / Blog</nav>
      <span>Sin humo, con datos</span>
    </div>
  </div>
</header>

<section class="block tight prose">
  <div class="spine">
    <p class="plain" style="font-size:1.12rem">Escribimos para quien vende y quiere ordenar su operación comercial: cómo diseñar un proceso, cómo lograr que el equipo adopte un CRM y cómo elegir la herramienta correcta. Publicamos con criterio, no por volumen.</p>
  </div>
</section>

<section class="block">
  <div class="spine">
    <p class="kick">Lo último</p>
    <div class="posts" style="margin-top:16px">

      <article class="post">
        <div class="meta"><span class="tag">Gestión comercial</span><span>Agosto 2026</span></div>
        <h3><a href="/blog/como-disenar-embudo-de-ventas">Cómo diseñar tu embudo de ventas (y montarlo en Pipedrive)</a></h3>
        <p class="post-ex">Las etapas se definen por cómo compra tu cliente, no por lo que hace el vendedor. Guía práctica, los errores que arruinan un embudo y cómo se ve uno bien diseñado.</p>
        <a class="more" href="/blog/como-disenar-embudo-de-ventas">Leer la guía &rarr;</a>
      </article>

      <article class="post soon">
        <div class="meta"><span class="tag">Gestión comercial</span><span>Próximamente</span></div>
        <h3>El costo oculto de gestionar tus ventas en Excel</h3>
        <p class="post-ex">La planilla no cobra licencia, cobra oportunidad. Cuánto te cuesta de verdad seguir vendiendo en Excel cuando ya tienes equipo.</p>
      </article>

      <article class="post soon">
        <div class="meta"><span class="tag">Gestión comercial</span><span>Próximamente</span></div>
        <h3>7 señales de que tu pyme ya necesita un CRM</h3>
        <p class="post-ex">Cuándo dejar de improvisar. Las señales concretas de que tu operación comercial se quedó chica para las planillas y la memoria.</p>
      </article>

      <article class="post soon">
        <div class="meta"><span class="tag">WhatsApp</span><span>Próximamente</span></div>
        <h3>Cómo llevar tus ventas por WhatsApp sin perder el control</h3>
        <p class="post-ex">Vender por chat está bien para captar. El problema es el seguimiento. Cómo ordenar WhatsApp para que ningún negocio se enfríe.</p>
      </article>

      <article class="post soon">
        <div class="meta"><span class="tag">Elección de CRM</span><span>Próximamente</span></div>
        <h3>CRM barato no es CRM económico: el costo total de propiedad</h3>
        <p class="post-ex">Por qué la licencia más barata no siempre es la opción más económica cuando sumas implementación, tiempo y adopción.</p>
      </article>

    </div>
  </div>
</section>

<section class="cta">
  <div class="spine">
    <p class="kick">El siguiente paso</p>
    <h2>¿Quieres ordenar tus ventas, no solo leer sobre eso?</h2>
    <p>Conversemos sobre tu proceso comercial y cómo montarlo en Pipedrive, o calcula tu retorno en dos minutos.</p>
    <div class="btns">
      <a class="btn primary" href="/contacto">Agenda un diagnóstico</a>
      <a class="btn ghost" href="/calculadora-roi">Calcula tu retorno</a>
    </div>
    <p class="selfserve">¿Aún no tienes Pipedrive? <a href="https://app.pipedrive.com/affiliate/pdp-soc?utm_source=Salesops+Consulting+SpA&utm_medium=partners_program&utm_content=copy_text&utm_term=pdp-soc" target="_blank" rel="sponsored noopener">Créalo aquí</a> y parte con una prueba extendida.</p>
  </div>
</section>

<footer class="foot">
  <div class="spine">
    <div class="foot-brand">
      <span class="wordmark"><b>Sales</b><span class="ops">Ops</span></span>
      <span class="badge">Pipedrive Authorized Partner</span>
    </div>
    <p class="small">SalesOps Consulting, implementación y adopción de Pipedrive para equipos comerciales en Chile. Escríbenos a contacto@salesopsconsulting.cl o en <a href="https://linkedin.com/company/salesops-consulting">LinkedIn</a>.</p>
  </div>
</footer>

<div class="block">
  <div class="spine">
    <section class="ficha" aria-label="Ficha para publicar">
      <span class="kick">Ficha para publicar (bórrala al montar la página)</span>
      <dl>
        <dt>URL sugerida</dt><dd><code>/blog</code> (es el índice; cada post va en <code>/blog/su-slug</code>)</dd>
        <dt>Meta title</dt><dd>Blog de gestión comercial y CRM para pymes | SalesOps</dd>
        <dt>Meta description</dt><dd>Notas prácticas sobre proceso de ventas, adopción de CRM y cómo elegir la herramienta correcta para tu pyme en Chile. El blog de SalesOps.</dd>
        <dt>Schema incluido</dt><dd>BreadcrumbList e ItemList (los posts) en JSON-LD.</dd>
        <dt>Las entradas "Próximamente"</dt><dd>Son de la lista de temas priorizados. A medida que publiques cada una, cámbiala por un enlace real y quítale la clase <code>soon</code>.</dd>
        <dt>Por completar</dt><dd><code>/calculadora-roi</code> y <code>/contacto</code>. Reemplaza el wordmark de texto por el componente Logo y el badge por PartnerLogo (ya están en tu repo).</dd>
      </dl>
    </section>
  </div>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.salesopsconsulting.cl/"},
    {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.salesopsconsulting.cl/blog"}
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Artículos del blog de SalesOps",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Cómo diseñar tu embudo de ventas (y montarlo en Pipedrive)", "url": "https://www.salesopsconsulting.cl/blog/como-disenar-embudo-de-ventas"}
  ]
}
</script>

</body>
</html>
