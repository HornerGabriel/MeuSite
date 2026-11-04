/*
  Scroll-driven image sequence.

  <section class="sequence" data-sequence
           data-src="assets/sequencias/produto/frame-{n}.webp"
           data-frames="120" data-pad="4" style="--sequence-length: 300vh">
    <div class="sequence__stage"><canvas aria-label="Descrição da animação" role="img"></canvas></div>
  </section>

  {n} is replaced by the frame number (1..data-frames), zero-padded to data-pad digits.
  data-start sets the first frame number when it is not 1. data-fit="contain" letterboxes instead of cropping.
*/
(() => {
  const sequences = document.querySelectorAll("[data-sequence]");
  if (!sequences.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const frameUrl = (pattern, n, pad) => pattern.replace("{n}", String(n).padStart(pad, "0"));

  sequences.forEach((section) => {
    const canvas = section.querySelector("canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const total = Number(section.dataset.frames) || 0;
    const pad = Number(section.dataset.pad) || 0;
    const start = Number(section.dataset.start) || 1;
    const fit = section.dataset.fit === "contain" ? "contain" : "cover";
    if (!total) return;

    const frames = new Array(total);
    let current = -1;
    let target = 0;
    let ticking = false;

    const load = (i) => {
      if (frames[i]) return frames[i];
      const img = new Image();
      img.decoding = "async";
      img.src = frameUrl(section.dataset.src, start + i, pad);
      img.onload = () => {
        if (i === target) draw(i, true);
      };
      frames[i] = img;
      return img;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      draw(target, true);
    };

    const draw = (i, force = false) => {
      if (i === current && !force) return;
      let img = frames[i];
      if (!img || !img.complete || !img.naturalWidth) {
        for (let back = i - 1; back >= 0; back--) {
          const prev = frames[back];
          if (prev && prev.complete && prev.naturalWidth) { img = prev; break; }
        }
        if (!img || !img.naturalWidth) return;
      }
      current = i;
      const cw = canvas.width;
      const ch = canvas.height;
      const scale = (fit === "cover" ? Math.max : Math.min)(cw / img.naturalWidth, ch / img.naturalHeight);
      const w = img.naturalWidth * scale;
      const h = img.naturalHeight * scale;
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
    };

    const progress = () => {
      const rect = section.getBoundingClientRect();
      const distance = rect.height - window.innerHeight;
      if (distance <= 0) return 0;
      return Math.min(Math.max(-rect.top / distance, 0), 1);
    };

    const update = () => {
      ticking = false;
      const i = reduceMotion.matches ? 0 : Math.round(progress() * (total - 1));
      target = i;
      load(i);
      draw(i);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    load(0);
    if (!reduceMotion.matches) {
      const preload = () => { for (let i = 1; i < total; i++) load(i); };
      "requestIdleCallback" in window ? requestIdleCallback(preload) : setTimeout(preload, 200);
    }

    resize();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize);
  });
})();
