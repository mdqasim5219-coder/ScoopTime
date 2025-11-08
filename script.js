// ===============================
// 📱 SCOOP NEWS — MAIN SCRIPT (2025)
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  // === 1️⃣ MOBILE MENU TOGGLE ===
  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  // === 2️⃣ AUTO YEAR UPDATE ===
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // === 3️⃣ LANGUAGE SWITCH (EN/UR) ===
  const langBtns = { en: document.getElementById("langEn"), ur: document.getElementById("langUr") };
  const texts = document.querySelectorAll("[data-lang-en]");

  function setLang(lang) {
    texts.forEach(el => {
      el.textContent = el.getAttribute(`data-lang-${lang}`) || el.textContent;
    });

    Object.entries(langBtns).forEach(([key, btn]) => {
      if (btn) btn.classList.toggle("active", key === lang);
    });

    document.documentElement.dir = lang === "ur" ? "rtl" : "ltr";
  }

  if (langBtns.en) langBtns.en.addEventListener("click", () => setLang("en"));
  if (langBtns.ur) langBtns.ur.addEventListener("click", () => setLang("ur"));

  setLang("en"); // default language

  // === 4️⃣ NEWS TICKER ANIMATION ===
  const ticker = document.getElementById("tickerInner") || document.querySelector(".ticker-inner");
  if (ticker) {
    let pos = 0, last = 0;
    const speed = 0.05; // control scroll speed

    const animate = (time) => {
      if (!last) last = time;
      const delta = time - last;
      last = time;
      pos += delta * speed;
      if (pos >= ticker.scrollWidth / 2) pos = 0;
      ticker.style.transform = `translateX(-${pos}px)`;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }

  // === 5️⃣ SCROLL TO TOP BUTTON ===
  const scrollBtn = document.createElement("button");
  scrollBtn.textContent = "⬆";
  scrollBtn.className = "scroll-top-btn";
  document.body.appendChild(scrollBtn);

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 400 ? "block" : "none";
  });
});









