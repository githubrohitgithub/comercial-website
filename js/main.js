(function () {
  const ICONS = {
    emergency: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    ambulance: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 17h6m-6-4h8M5 17H3m16 0h2M7 21h10M5 11l1-4h12l1 4"/></svg>',
    icu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 19h16M6 19V9m12 10V9M6 9l2-4h8l2 4"/></svg>',
    physio: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>',
    maternal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>',
    nicu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>',
    surgery: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243z"/></svg>',
    anaesthesia: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
    dialysis: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>',
    lab: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>',
    imaging: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>',
    ultrasound: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>',
    dental: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    ward: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>',
    default: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>'
  };

  function facilityIcon(title) {
    const t = title.toLowerCase();
    if (t.includes("emergency") || t.includes("trauma")) return ICONS.emergency;
    if (t.includes("wheels") || t.includes("ambulance")) return ICONS.ambulance;
    if (t.includes("icu")) return ICONS.icu;
    if (t.includes("physio")) return ICONS.physio;
    if (t.includes("maternal") || t.includes("foetal")) return ICONS.maternal;
    if (t.includes("nicu")) return ICONS.nicu;
    if (t.includes("operation") || t.includes("theater")) return ICONS.surgery;
    if (t.includes("anaesthesia")) return ICONS.anaesthesia;
    if (t.includes("dialysis")) return ICONS.dialysis;
    if (t.includes("clinical") || t.includes("laboratory")) return ICONS.lab;
    if (t.includes("imaging") || t.includes("x-ray")) return ICONS.imaging;
    if (t.includes("ultra") || t.includes("echo") || t.includes("doppler")) return ICONS.ultrasound;
    if (t.includes("dental")) return ICONS.dental;
    if (t.includes("ward")) return ICONS.ward;
    return ICONS.default;
  }

  const heroSlideshow = document.getElementById("hero-slideshow");
  const heroDots = document.getElementById("hero-dots");
  const heroLabel = document.getElementById("hero-slide-label");
  const heroPrev = document.getElementById("hero-prev");
  const heroNext = document.getElementById("hero-next");
  const galleryEl = document.getElementById("gallery-grid");
  const facilitiesEl = document.getElementById("facilities-grid");
  const specEl = document.getElementById("speciality-list");
  const superSpecEl = document.getElementById("super-speciality-list");
  const teamEl = document.getElementById("team-grid");

  if (heroSlideshow && typeof HERO_SLIDES !== "undefined" && HERO_SLIDES.length) {
    let heroIndex = 0;
    let heroTimer = null;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const interval = reducedMotion ? 0 : 3000;

    heroSlideshow.innerHTML = HERO_SLIDES.map(
      (s, i) =>
        `<div class="hero__slide${i === 0 ? " hero__slide--active" : ""}" data-index="${i}">` +
        `<img src="${s.src}" alt="${s.title}" loading="${i === 0 ? "eager" : "lazy"}" ` +
        `onerror="this.parentElement.remove();" /></div>`
    ).join("");

    if (heroDots) {
      heroDots.innerHTML = HERO_SLIDES.map(
        (_, i) =>
          `<button type="button" class="hero__dot${i === 0 ? " hero__dot--active" : ""}" ` +
          `data-index="${i}" aria-label="Show slide ${i + 1}" role="tab"></button>`
      ).join("");
    }

    const slides = () => [...heroSlideshow.querySelectorAll(".hero__slide")];
    const dots = () => (heroDots ? [...heroDots.querySelectorAll(".hero__dot")] : []);

    const setHeroSlide = (index) => {
      const list = slides();
      if (!list.length) return;
      heroIndex = ((index % list.length) + list.length) % list.length;
      list.forEach((el, i) => el.classList.toggle("hero__slide--active", i === heroIndex));
      dots().forEach((el, i) => el.classList.toggle("hero__dot--active", i === heroIndex));
      if (heroLabel && HERO_SLIDES[heroIndex]) heroLabel.textContent = HERO_SLIDES[heroIndex].title;
    };

    const nextHero = () => setHeroSlide(heroIndex + 1);
    const prevHero = () => setHeroSlide(heroIndex - 1);

    const startHeroTimer = () => {
      if (!interval) return;
      stopHeroTimer();
      heroTimer = setInterval(nextHero, interval);
    };

    const stopHeroTimer = () => {
      if (heroTimer) clearInterval(heroTimer);
      heroTimer = null;
    };

    setHeroSlide(0);
    startHeroTimer();

    heroNext?.addEventListener("click", () => {
      nextHero();
      startHeroTimer();
    });
    heroPrev?.addEventListener("click", () => {
      prevHero();
      startHeroTimer();
    });
    heroDots?.addEventListener("click", (e) => {
      const btn = e.target.closest(".hero__dot");
      if (!btn) return;
      setHeroSlide(Number(btn.dataset.index));
      startHeroTimer();
    });
    heroSlideshow.closest(".hero__slider")?.addEventListener("mouseenter", stopHeroTimer);
    heroSlideshow.closest(".hero__slider")?.addEventListener("mouseleave", startHeroTimer);
  }

  if (galleryEl && typeof GALLERY_PHOTOS !== "undefined") {
    galleryEl.innerHTML = GALLERY_PHOTOS.map(
      (p, i) =>
        `<figure class="gallery__card reveal" data-delay="${(i % 5) * 60}">` +
        `<div class="gallery__media">` +
        `<img src="${p.src}" alt="${p.alt}" loading="lazy" ` +
        `onerror="this.closest('.gallery__card').classList.add('gallery__card--empty');this.remove();" />` +
        `<span class="gallery__fallback" aria-hidden="true"></span>` +
        `</div>` +
        `<figcaption class="gallery__caption">${p.caption || p.alt}</figcaption>` +
        `</figure>`
    ).join("");
  }

  function facilityMedia(f) {
    const icon = facilityIcon(f.title);
    if (!f.img) {
      return (
        `<div class="facility-card__media facility-card__media--placeholder" aria-hidden="true">` +
        `<div class="facility-card__placeholder">${icon}</div></div>`
      );
    }
    return (
      `<div class="facility-card__media">` +
      `<img src="${f.img}" alt="${f.title}" loading="lazy" ` +
      `onerror="this.remove();this.parentElement.classList.add('facility-card__media--placeholder');" />` +
      `<div class="facility-card__placeholder">${icon}</div></div>`
    );
  }

  if (facilitiesEl && typeof FACILITIES !== "undefined") {
    facilitiesEl.innerHTML = FACILITIES.map(
      (f, i) =>
        `<article class="facility-card reveal" data-delay="${(i % 4) * 50}">` +
        facilityMedia(f) +
        `<div class="facility-card__body">` +
        `<div class="facility-card__top">` +
        `<div class="facility-card__icon">${facilityIcon(f.title)}</div>` +
        `<h3>${f.title}</h3></div>` +
        `<p>${f.desc}</p></div></article>`
    ).join("");
  }

  if (specEl && typeof SPECIALITIES !== "undefined") {
    specEl.innerHTML = SPECIALITIES.map((s) => `<span class="spec-chip">${s}</span>`).join("");
  }

  if (superSpecEl && typeof SUPER_SPECIALITIES !== "undefined") {
    superSpecEl.innerHTML = SUPER_SPECIALITIES.map((s) => `<span class="spec-chip">${s}</span>`).join("");
  }

  if (teamEl && typeof TEAM !== "undefined") {
    teamEl.innerHTML = TEAM.map((t, i) => {
      const initials = t.dept.split(/[\s\/]+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
      return (
        `<article class="team-card reveal" data-delay="${(i % 8) * 35}" data-search="${(t.dept + " " + t.doctors.join(" ")).toLowerCase()}">` +
        `<div class="team-card__head">` +
        `<span class="team-card__icon">${initials}</span>` +
        `<h3>${t.dept}</h3></div>` +
        `<p>${t.doctors.join(", ")}</p></article>`
      );
    }).join("");
  }

  const header = document.getElementById("header");
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("nav");
  const navLinks = nav?.querySelectorAll("a[data-nav]");

  const onScroll = () => {
    header?.classList.toggle("header--scrolled", window.scrollY > 40);

    const sections = ["home", "about", "facilities", "specialities", "team", "contact"];
    let current = "home";
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 120) current = id;
    });
    navLinks?.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  navToggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("nav--open");
    navToggle.setAttribute("aria-expanded", open);
    document.body.classList.toggle("menu-open", open);
  });

  nav?.querySelectorAll("a[href^='#']").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav--open");
      navToggle?.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });

  document.getElementById("team-search")?.addEventListener("input", (e) => {
    const q = e.target.value.toLowerCase().trim();
    document.querySelectorAll(".team-card").forEach((card) => {
      const match = !q || (card.dataset.search || "").includes(q);
      card.classList.toggle("hidden", !match);
    });
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const delay = el.dataset.delay || 0;
        setTimeout(() => el.classList.add("revealed"), Number(delay));
        revealObserver.unobserve(el);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
  );

  const observeReveal = () => {
    document.querySelectorAll(".reveal:not(.revealed)").forEach((el) => revealObserver.observe(el));
  };

  observeReveal();

  const countObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = Number(el.dataset.count);
        const duration = 1600;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 4);
          el.textContent = Math.round(eased * target);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        countObserver.unobserve(el);
      });
    },
    { threshold: 0.4 }
  );

  document.querySelectorAll("[data-count]").forEach((el) => countObserver.observe(el));

  const dynamicObserver = new MutationObserver(observeReveal);
  [facilitiesEl, teamEl, galleryEl].forEach((el) => {
    if (el) dynamicObserver.observe(el, { childList: true });
  });
})();
