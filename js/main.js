(function () {
  const facilitiesEl = document.getElementById("facilities-grid");
  const specEl = document.getElementById("speciality-list");
  const superSpecEl = document.getElementById("super-speciality-list");
  const teamEl = document.getElementById("team-grid");

  if (facilitiesEl && typeof FACILITIES !== "undefined") {
    facilitiesEl.innerHTML = FACILITIES.map(
      (f, i) =>
        `<article class="facility-card reveal" data-delay="${(i % 4) * 60}">` +
        `<h3>${f.title}</h3><p>${f.desc}</p></article>`
    ).join("");
  }

  if (specEl && typeof SPECIALITIES !== "undefined") {
    specEl.innerHTML = SPECIALITIES.map((s) => `<li>${s}</li>`).join("");
  }

  if (superSpecEl && typeof SUPER_SPECIALITIES !== "undefined") {
    superSpecEl.innerHTML = SUPER_SPECIALITIES.map((s) => `<li>${s}</li>`).join("");
  }

  if (teamEl && typeof TEAM !== "undefined") {
    teamEl.innerHTML = TEAM.map(
      (t, i) =>
        `<article class="team-card reveal" data-delay="${(i % 6) * 40}">` +
        `<h3>${t.dept}</h3><p>${t.doctors.join(", ")}</p></article>`
    ).join("");
  }

  const header = document.getElementById("header");
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("nav");

  const onScroll = () => {
    header.classList.toggle("header--scrolled", window.scrollY > 24);
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
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  const countObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = Number(el.dataset.count);
        const duration = 1400;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(eased * target);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        countObserver.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll("[data-count]").forEach((el) => countObserver.observe(el));
})();
