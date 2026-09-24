// Replay the original reveal gently while the preview is visible.
const motion = matchMedia('(prefers-reduced-motion: reduce)');
let visible = true;
new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }).observe(document.querySelector('.hero'));
setInterval(() => {
  if (!visible || document.hidden || motion.matches) return;
  const button = document.querySelector('[data-hero-motion]');
  if (button?.getAttribute('aria-label') === 'Afspil billedbevægelsen igen') button.click();
}, 10000);
