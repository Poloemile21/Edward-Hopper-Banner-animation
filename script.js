// SLIDE AWAY THE BLACK COVER
setTimeout(() => {
  const cover = document.getElementById("intro-cover");
  if (cover) cover.classList.add("reveal");
}, 3000);

// FADE IN THE HEADER AFTER COVER IS GONE
setTimeout(() => {
  const header = document.getElementById("hero-header");
  if (header) header.classList.add("visible");
}, 3200);

// Reveal button at same time as header
setTimeout(() => {
  const btn = document.getElementById("hero-button");
  if (btn) btn.classList.add("visible");
}, 4200);