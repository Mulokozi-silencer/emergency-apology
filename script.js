/* ============================================================
   ❤️ EMERGENCY APOLOGY SYSTEM — Config, Translations & Logic
   ============================================================
   1. Edit CONFIG below to personalize names, WhatsApp, colors.
   2. Edit TRANSLATIONS to customize the text in each language.
   ============================================================ */

const CONFIG = {
  // 👤 Names
  GIRLFRIEND_NAME: "Berliner",    // ← Change to her name
  BOYFRIEND_NAME:  "Mulokozi",     // ← Change to your name

  // 💬 Nickname (used in the closing signature)
  NICKNAME_EN: "Your very guilty, very sleepy, and very sorry boyfriend",
  NICKNAME_SW: "Mpenzi wako mwenye aibu sana, usingizi sana, na mwenye samahani sana",

  // 📱 WhatsApp — your number (digits only, with country code, no +)
  WHATSAPP_NUMBER: "255655478996",            // e.g. "255712345678"

  // 🎨 Theme Colors
  COLORS: {
    primary:   "#FF4F81",
    secondary: "#8B5CF6",
    accent:    "#FFD166",
  },

  // 🌐 Default language: "en" or "sw"
  DEFAULT_LANG: "en",
};

/* ============================================================
   TRANSLATIONS
   ============================================================ */
const TRANSLATIONS = {
  en: {
    // ── Hero ──────────────────────────────────────────────
    heroBadge:    "🚨 EMERGENCY APOLOGY SYSTEM 🚨",
    heroTitle:    "Mission: Get My Favorite Person\nTo Stop Being Angry With Me",
    heroDear:     "Dear",
    heroTypewriter: "Before you judge the suspect, please allow the defense to present its evidence...",

    // ── Case File ─────────────────────────────────────────
    caseLabel:  "📂 OFFICIAL CASE FILE",
    caseTitle:  "The Evidence Has Been Compiled",
    caseRows: [
      { key: "Accused",    val: "Your boyfriend 😭" },
      { key: "Crime",      val: 'Falling asleep without sending the mandatory "I\'m going to sleep" notification' },
      { key: "Intent",     val: "Absolutely ZERO intention to ignore you", cls: "intent-none" },
      { key: "Cause",      val: "Unexpected attack by Sleep™" },
      { key: "Status",     val: "Guilty of poor communication", cls: "status-badge" },
      { key: "Punishment", val: "Begging for forgiveness until further notice" },
    ],

    // ── Defense ───────────────────────────────────────────
    defenseLabel: "⚖️ THE DEFENSE RESTS",
    defenseTitle: "Would you like to hear my side?",
    defenseBtn:   "⚖️ Present My Defense",
    courtLines: [
      "Ladies and gentlemen of the court...",
      "The accused did <strong>NOT</strong> disappear.",
      "The accused did <strong>NOT</strong> ignore you.",
      "The accused did <strong>NOT</strong> decide you weren't important.",
      "The accused was attacked by an extremely powerful enemy...",
    ],
    sleepWord: "SLEEP.",
    butWord:   "BUT...",
    butText:   "I still accept responsibility — because a responsible boyfriend should have said goodnight first.",

    // ── Evidence ──────────────────────────────────────────
    evidenceLabel: "🔍 EXHIBIT A THROUGH E",
    evidenceTitle: "The Evidence",
    evidenceCards: [
      { icon: "🛏️", label: "Evidence #1", title: "Last Known Location",         value: "Bed" },
      { icon: "😴", label: "Evidence #2", title: "Weapon Involved",              value: "Sleep" },
      { icon: "❌", label: "Evidence #3", title: "Intention to Ignore Girlfriend", value: "NONE",           cls: "none-value" },
      { icon: "💔", label: "Evidence #4", title: "Level of Regret",              value: "100%",            isBar: true },
      { icon: "⚠️", label: "Evidence #5", title: "Likelihood of Repeating This", value: "Extremely low.",  cls: "low-value", note: "Because lesson learned. Loud and clear. 😭" },
    ],

    // ── Apology ───────────────────────────────────────────
    apologyHeading: "Okay... jokes aside ❤️",
    apologyParagraphs: [
      "I am genuinely sorry.",
      "I know I should have told you that I was going to sleep. You had every right to expect that from me, and I understand why you are upset.",
      "I didn't intentionally ignore you or choose sleep over you. I genuinely got caught by sleep without realizing it.",
      "But even though it wasn't intentional, I still understand that I hurt your feelings.",
      "I'm sorry, my love.",
      "I promise I'll do better with communicating before I sleep. I don't want you sitting there wondering what happened or feeling like I'm ignoring you.",
      "You mean too much to me for a stupid missed 'goodnight' message to become a reason for you to feel unwanted.",
      "So...",
      "I'm sorry. ❤️",
      "Please forgive me when your heart is ready.",
    ],

    // ── Negotiations ──────────────────────────────────────
    negoLabel: "🤝 OFFICIAL PEACE NEGOTIATIONS",
    negoTitle: "The boyfriend is willing to offer the following compensation package:",
    negoCards: [
      { icon: "❤️", text: "1× sincere apology" },
      { icon: "🤗", text: "Unlimited hugs" },
      { icon: "💬", text: 'Unlimited "I\'m sorry" messages' },
      { icon: "😂", text: "One extremely embarrassed boyfriend" },
      { icon: "📱", text: "Improved bedtime communication" },
      { icon: "🔔", text: "Lifetime subscription to Goodnight Notifications™" },
    ],
    offerValidText: "Offer valid",
    offerValidBold: "immediately.",

    // ── Verdict ───────────────────────────────────────────
    verdictLabel: "🏛️ YOUR VERDICT",
    verdictTitle: "You hold the gavel",
    verdictSub:   "There is no wrong answer here. Take your time.",
    forgiveBtn:   "❤️ I Forgive You",
    angryBtn:     "😤 I'm Still Angry",

    forgiveThankYou:    "THANK YOU!",
    systemStatusLabel:  "System status:",
    systemStatusValue:  "BOYFRIEND HAS BEEN RELEASED FROM EMOTIONAL PRISON.",

    angryLines: [
      "Fair enough. 😭",
      "Take your time.",
      "I understand that an apology doesn't automatically fix how you feel.",
      "I'll give you space.",
      "But just know...",
    ],
    angryStillHere: "I'm still here, still sorry, and still hoping you'll forgive me. ❤️",

    // ── Secret ────────────────────────────────────────────
    secretBtn:       "🔐 Classified Message",
    secretBtnClose:  "🔒 Hide Classified Message",
    secretLabel:     "Between us...",
    secretParagraphs: [
      "I really hate knowing that you're upset with me.",
      "If I could go back, I would send that goodnight message before sleep kidnapped me.",
      "I love you. ❤️",
    ],

    // ── Final ─────────────────────────────────────────────
    finalHeading:  "CASE CLOSED? 👀",
    finalMaybe:    "Maybe not yet...",
    finalSmile:    "But hopefully this website has at least earned me one small smile.",
    finalWhenever: "Whenever you're ready...",
    finalTalk:     "Talk to me. ❤️",
    whatsappBtn:   "💬 Tell Him Something",
    whatsappMsg:   "Okay... I saw your apology 😂❤️",
  },

  sw: {
    // ── Hero ──────────────────────────────────────────────
    heroBadge:    "MFUMO WA MSAMAHA WA DHARURA 🚨",
    heroTitle:    "Dhamira: Kumfanya Mpenzi Wangu\nAache Kunikasirikia",
    heroDear:     "MPENZI WANGU",
    heroTypewriter: "Kabla ya kunihukumu mshtakiwa, tafadhali niruhusu utetezi kuwasilisha ushahidi wangu...",

    // ── Case File ─────────────────────────────────────────
    caseLabel:  "📂 FAILI RASMI LA KESI",
    caseTitle:  "Ushahidi Umekusanywa",
    caseRows: [
      { key: "Mshtakiwa",   val: "Mpenzi wako😭" },
      { key: "Kosa",        val: 'Kulala bila kutuma ujumbe wa lazima wa "Ninaenda kulala Mpenzi"' },
      { key: "Nia",         val: "0 kabisa ya kukupuuza", cls: "intent-none" },
      { key: "Sababu",      val: "Shambulio la ghafla kutoka kwa adui Usingizi™" },
      { key: "Hali",        val: "Ana hatia ya mawasiliano mabaya", cls: "status-badge" },
      { key: "Adhabu",      val: "Kuomba msamaha hadi zaidi ya hapo" },
    ],

    // ── Defense ───────────────────────────────────────────
    defenseLabel: "⚖️ UTETEZI UNASIMAMA",
    defenseTitle: "Je, ungependa kusikia upande wangu?",
    defenseBtn:   "⚖️ Wasilisha Utetezi Wangu",
    courtLines: [
      "Waamuzi wa kesi...",
      "Mshtakiwa <strong>HAKUTOWEKA</strong>.",
      "Mshtakiwa <strong>HAKUKUPUUZA</strong>.",
      "Mshtakiwa <strong>HAKUAMUA</strong> kuwa si muhimu kwako.",
      "Mshtakiwa alishambuliwa na adui mwenye nguvu sana...",
    ],
    sleepWord: "USINGIZI.",
    butWord:   "LAKINI...",
    butText:   "Bado ninakubali jukumu — kwa sababu mpenzi mwenye wajibu angestahili kusema lala salama kwanza.",

    // ── Evidence ──────────────────────────────────────────
    evidenceLabel: "🔍 USHAHIDI A HADI E",
    evidenceTitle: "Ushahidi",
    evidenceCards: [
      { icon: "🛏️", label: "Ushahidi #1", title: "Mahali Alipokuwa Mwisho",      value: "Kitandani" },
      { icon: "😴", label: "Ushahidi #2", title: "Silaha Iliyotumika",            value: "Usingizi" },
      { icon: "❌", label: "Ushahidi #3", title: "Nia ya Kupuuza Msichana",       value: "HAKUNA",          cls: "none-value" },
      { icon: "💔", label: "Ushahidi #4", title: "Kiwango cha Majuto",            value: "100%",            isBar: true },
      { icon: "⚠️", label: "Ushahidi #5", title: "Uwezekano wa Kurudia Kosa Hili", value: "Chini sana.",   cls: "low-value", note: "Kwa sababu somo limejifunzwa. Wazi kabisa. 😭" },
    ],

    // ── Apology ───────────────────────────────────────────
    apologyHeading: "Sawa... bila mzaha ❤️",
    apologyParagraphs: [
      "Ninaomba msamaha kweli kweli.",
      "Najua nilipaswa kukuambia kuwa nilikuwa ninaenda kulala. Ulikuwa na haki kamili ya kutarajia hivyo kutoka kwangu, na naelewa kwa nini unakasirika.",
      "Sikukupuuza kwa makusudi wala kuchagua usingizi badala yako. Kweli nilishikwa na usingizi bila ya kutambua.",
      "Lakini hata kama haikuwa kwa makusudi, bado naelewa kuwa niliumiza hisia zako.",
      "Ninaomba msamaha, mpenzi wangu.",
      "Naahidi kufanya vizuri zaidi katika kuwasiliana kabla sijalala. Sitaki ukae ukijiuliza nini kilitokea au kuhisi ninakupuuza.",
      "Una thamani kubwa kwangu mno kwa ujumbe mmoja wa 'lala salama' uliokosekana kuwa sababu ya kukufanya uhisi hutakiwa.",
      "Kwa hivyo...",
      "Ninaomba msamaha. ❤️",
      "Tafadhali nisamehe moyo wako unapokuwa tayari.",
    ],

    // ── Negotiations ──────────────────────────────────────
    negoLabel: "🤝 MAZUNGUMZO RASMI YA AMANI",
    negoTitle: "Mpenzi wako yuko tayari kutoa mfuko huu wa fidia:",
    negoCards: [
      { icon: "❤️", text: "1× msamaha wa kweli" },
      { icon: "🤗", text: "Kukumbatiana bila kikomo" },
      { icon: "💬", text: 'Ujumbe wa "Ninaomba msamaha" bila kikomo' },
      { icon: "😂", text: "Mpenzi mmoja mwenye aibu sana" },
      { icon: "📱", text: "Mawasiliano bora wakati wa kulala" },
      { icon: "🔔", text: "Usajili wa maisha wote wa Arifa za Lala Salama™" },
    ],
    offerValidText: "Ofa inaanza",
    offerValidBold: "mara moja.",

    // ── Verdict ───────────────────────────────────────────
    verdictLabel: "🏛️ UAMUZI WAKO",
    verdictTitle: "Wewe ndiye una nyundo",
    verdictSub:   "Hakuna jibu baya hapa. Chukua muda wako.",
    forgiveBtn:   "❤️ Nakusamehe",
    angryBtn:     "😤 Bado Ninakasirika",

    forgiveThankYou:    "ASANTE SANA!",
    systemStatusLabel:  "Hali ya mfumo:",
    systemStatusValue:  "MPENZI AMEFUNGULIWA KUTOKA GEREZANI KWA HISIA.",

    angryLines: [
      "Sawa. 😭",
      "Chukua muda wako.",
      "Naelewa kwamba msamaha haurekebishi mara moja unavyohisi.",
      "Nitakupa nafasi yako.",
      "Lakini ujue tu...",
    ],
    angryStillHere: "Bado nipo hapa, bado ninaomba msamaha, na bado ninatumai utanisamehe. ❤️",

    // ── Secret ────────────────────────────────────────────
    secretBtn:       "🔐 Ujumbe wa Siri",
    secretBtnClose:  "🔒 Ficha Ujumbe wa Siri",
    secretLabel:     "Kati yetu...",
    secretParagraphs: [
      "Ninachukia sana kujua kuwa unakasirika nami.",
      "Kama ningeweza kurudi nyuma, ningetuma ujumbe ule wa lala salama kabla usingizi haujaniiba.",
      "Nakupenda sana Mpenzi wang❤️",
    ],

    // ── Final ─────────────────────────────────────────────
    finalHeading:  "KESI IMEFUNGWA? 👀",
    finalMaybe:    "Labda bado...",
    finalSmile:    "Lakini natumai tovuti hii imenipa angalau tabasamu moja dogo.",
    finalWhenever: "Ukiwa tayari...",
    finalTalk:     "Niambie. ❤️",
    whatsappBtn:   "💬 Mwambie Kitu",
    whatsappMsg:   "Sawa... Nimeona msamaha wako 😂❤️",
  },
};

/* ============================================================
   STATE
   ============================================================ */
let currentLang = CONFIG.DEFAULT_LANG;
let typewriterDone = false;
let defenseAlreadyPlayed = false;

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  setupLanguageSwitcher();
  applyLanguage(currentLang);
  createBackgroundHearts();
  observeSlideUps();
  observeRegretBar();
  setupDefenseButton();
  setupForgiveButton();
  setupAngryButton();
  setupSecretButton();
  setupWhatsApp();
});

/* ============================================================
   LANGUAGE SWITCHER
   ============================================================ */
function setupLanguageSwitcher() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      if (lang === currentLang) return;
      currentLang = lang;

      document.querySelectorAll(".lang-btn").forEach((b) => {
        b.classList.toggle("active", b.dataset.lang === lang);
        b.setAttribute("aria-pressed", b.dataset.lang === lang ? "true" : "false");
      });

      applyLanguage(lang);
    });
  });
}

/* ============================================================
   APPLY LANGUAGE — renders everything
   ============================================================ */
function applyLanguage(lang) {
  const t = TRANSLATIONS[lang];
  document.documentElement.lang = lang === "sw" ? "sw" : "en";

  // ── Simple data-i18n text nodes ──────────────────────────
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined && !["caseRows","courtLines","evidenceCards","negoCards","apologyParagraphs","secretParagraphs","angryLines"].includes(key)) {
      // heroTitle has a newline — keep the heart span
      if (key === "heroTitle") {
        const parts = t.heroTitle.split("\n");
        el.innerHTML = `${parts[0]}<br />${parts[1]} <span class="heart-pulse">❤️</span>`;
      } else {
        el.textContent = t[key];
      }
    }
  });

  // ── Case grid ─────────────────────────────────────────────
  const caseGrid = document.getElementById("caseGrid");
  caseGrid.innerHTML = "";
  t.caseRows.forEach((row, i) => {
    const div = document.createElement("div");
    div.className = "case-row slide-up" + (i > 0 ? ` delay-${i}` : "");
    div.innerHTML = `<span class="case-key">${row.key}</span><span class="case-val${row.cls ? " " + row.cls : ""}">${row.val}</span>`;
    caseGrid.appendChild(div);
  });

  // ── Court lines ───────────────────────────────────────────
  t.courtLines.forEach((line, i) => {
    const el = document.getElementById(`courtLine${i}`);
    if (el) el.innerHTML = line;
  });

  // ── Evidence cards ────────────────────────────────────────
  const evidenceGrid = document.getElementById("evidenceGrid");
  evidenceGrid.innerHTML = "";
  t.evidenceCards.forEach((card, i) => {
    const div = document.createElement("div");
    div.className = "evidence-card slide-up" + (i > 0 ? ` delay-${i}` : "");
    div.innerHTML = `
      <div class="ev-icon">${card.icon}</div>
      <div class="ev-label">${card.label}</div>
      <div class="ev-title">${card.title}</div>
      ${card.isBar ? `
        <div class="regret-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
          <div class="regret-fill" id="regretFill"></div>
        </div>` : ""}
      <div class="ev-value${card.cls ? " " + card.cls : ""}">${card.value}</div>
      ${card.note ? `<div class="ev-note">${card.note}</div>` : ""}
    `;
    evidenceGrid.appendChild(div);
  });

  // ── Apology text ──────────────────────────────────────────
  const apologyEl = document.getElementById("apologyText");
  apologyEl.innerHTML = "";
  t.apologyParagraphs.forEach((para, i) => {
    const p = document.createElement("p");
    p.textContent = para;
    if (i === t.apologyParagraphs.length - 2) p.classList.add("apology-love");
    if (i === t.apologyParagraphs.length - 1) p.classList.add("apology-sign");
    apologyEl.appendChild(p);
  });

  // ── Nego cards ────────────────────────────────────────────
  const negoGrid = document.getElementById("negoGrid");
  negoGrid.innerHTML = "";
  t.negoCards.forEach((card, i) => {
    const div = document.createElement("div");
    div.className = "nego-card slide-up" + (i > 0 ? ` delay-${i}` : "");
    div.innerHTML = `<span class="nego-icon">${card.icon}</span><span>${card.text}</span>`;
    negoGrid.appendChild(div);
  });

  // ── Angry response lines ──────────────────────────────────
  const angryEl = document.getElementById("angryResponseText");
  angryEl.innerHTML = "";
  t.angryLines.forEach((line) => {
    const p = document.createElement("p");
    p.textContent = line;
    angryEl.appendChild(p);
  });
  const pLast = document.createElement("p");
  pLast.className = "still-here";
  pLast.textContent = t.angryStillHere;
  angryEl.appendChild(pLast);

  // ── Secret text ───────────────────────────────────────────
  const secretEl = document.getElementById("secretText");
  secretEl.innerHTML = "";
  t.secretParagraphs.forEach((para, i) => {
    const p = document.createElement("p");
    p.textContent = para;
    if (i === t.secretParagraphs.length - 1) p.classList.add("secret-love");
    secretEl.appendChild(p);
  });

  // ── Signature ─────────────────────────────────────────────
  const nickname = lang === "sw" ? CONFIG.NICKNAME_SW : CONFIG.NICKNAME_EN;
  document.getElementById("finalSignature").textContent = `— ${nickname} 😭❤️`;

  // ── Dear name ─────────────────────────────────────────────
  document.getElementById("dearName").textContent = CONFIG.GIRLFRIEND_NAME;

  // ── Secret button (update open/close label) ───────────────
  const secretBtn = document.getElementById("secretBtn");
  const isOpen = secretBtn.getAttribute("aria-expanded") === "true";
  secretBtn.textContent = isOpen ? t.secretBtnClose : t.secretBtn;

  // ── Typewriter ────────────────────────────────────────────
  startTypewriter(t.heroTypewriter);

  // ── WhatsApp ──────────────────────────────────────────────
  setupWhatsApp();

  // ── Re-observe slide-ups (new DOM elements) ───────────────
  observeSlideUps();
  observeRegretBar();
}

/* ============================================================
   WHATSAPP
   ============================================================ */
function setupWhatsApp() {
  const btn = document.getElementById("whatsappBtn");
  const t   = TRANSLATIONS[currentLang];
  const msg = encodeURIComponent(t.whatsappMsg);
  const num = CONFIG.WHATSAPP_NUMBER;
  btn.href  = num ? `https://wa.me/${num}?text=${msg}` : `https://wa.me/?text=${msg}`;
}

/* ============================================================
   TYPEWRITER
   ============================================================ */
let typewriterTimer = null;

function startTypewriter(text) {
  const el = document.getElementById("heroSubtitle");
  el.textContent = "";
  el.classList.remove("done");

  if (typewriterTimer) clearTimeout(typewriterTimer);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.textContent = text;
    return;
  }

  let i = 0;
  function type() {
    if (i < text.length) {
      el.textContent += text[i++];
      typewriterTimer = setTimeout(type, 36);
    } else {
      setTimeout(() => el.classList.add("done"), 1200);
    }
  }
  typewriterTimer = setTimeout(type, 800);
}

/* ============================================================
   BACKGROUND HEARTS
   ============================================================ */
function createBackgroundHearts() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const container = document.getElementById("bgParticles");
  const hearts = ["❤️", "💕", "💗", "💓", "🩷"];
  const count  = window.innerWidth < 600 ? 10 : 18;
  for (let i = 0; i < count; i++) {
    const span = document.createElement("span");
    span.classList.add("bg-heart");
    span.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    span.style.cssText = `
      left: ${Math.random() * 100}%;
      font-size: ${0.6 + Math.random() * 1}rem;
      animation-duration: ${12 + Math.random() * 16}s;
      animation-delay: ${Math.random() * 14}s;
    `;
    container.appendChild(span);
  }
}

/* ============================================================
   SCROLL OBSERVER — slide-up
   ============================================================ */
function observeSlideUps() {
  const els = document.querySelectorAll(".slide-up:not(.visible)");
  if (!els.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  els.forEach((el) => observer.observe(el));
}

/* ============================================================
   REGRET BAR
   ============================================================ */
function observeRegretBar() {
  // There may be a new #regretFill after language switch
  const fill = document.getElementById("regretFill");
  if (!fill) return;
  fill.style.width = "0%";
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        fill.style.width = "100%";
        observer.disconnect();
      }
    },
    { threshold: 0.5 }
  );
  observer.observe(fill);
}

/* ============================================================
   DEFENSE SEQUENCE
   ============================================================ */
function setupDefenseButton() {
  const btn = document.getElementById("defenseBtn");
  const seq = document.getElementById("defenseSequence");

  btn.addEventListener("click", () => {
    if (btn.getAttribute("aria-expanded") === "true") return;
    btn.setAttribute("aria-expanded", "true");
    btn.disabled = true;
    btn.style.opacity = "0.5";
    defenseAlreadyPlayed = true;

    seq.classList.remove("hidden");

    const delays = [0, 800, 1600, 2400, 3300];
    for (let i = 0; i < 5; i++) {
      const line = document.getElementById(`courtLine${i}`);
      if (!line) continue;
      setTimeout(() => {
        line.classList.remove("hidden");
        requestAnimationFrame(() => requestAnimationFrame(() => line.classList.add("visible")));
      }, delays[i]);
    }

    setTimeout(() => {
      const sr = document.getElementById("sleepReveal");
      sr.classList.remove("hidden");
      requestAnimationFrame(() => requestAnimationFrame(() => sr.classList.add("visible")));
    }, 4400);

    setTimeout(() => {
      const bs = document.getElementById("butSection");
      bs.classList.remove("hidden");
      requestAnimationFrame(() => requestAnimationFrame(() => bs.classList.add("visible")));
      setTimeout(() => bs.scrollIntoView({ behavior: "smooth", block: "nearest" }), 300);
    }, 5800);
  });
}

/* ============================================================
   FORGIVE BUTTON
   ============================================================ */
function setupForgiveButton() {
  document.getElementById("forgiveBtn").addEventListener("click", () => {
    document.getElementById("angryResponse").classList.add("hidden");
    document.getElementById("forgiveResponse").classList.remove("hidden");
    document.getElementById("forgiveBtn").classList.add("hidden");
    document.getElementById("angryBtn").classList.add("hidden");
    launchConfetti();
    setTimeout(() => {
      document.getElementById("forgiveResponse").scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 200);
  });
}

/* ============================================================
   ANGRY BUTTON
   ============================================================ */
function setupAngryButton() {
  document.getElementById("angryBtn").addEventListener("click", () => {
    document.getElementById("forgiveResponse").classList.add("hidden");
    document.getElementById("angryResponse").classList.remove("hidden");
    document.getElementById("forgiveBtn").classList.add("hidden");
    document.getElementById("angryBtn").classList.add("hidden");
    setTimeout(() => {
      document.getElementById("angryResponse").scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 200);
  });
}

/* ============================================================
   SECRET BUTTON
   ============================================================ */
function setupSecretButton() {
  const btn     = document.getElementById("secretBtn");
  const content = document.getElementById("secretContent");

  btn.addEventListener("click", () => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    const t = TRANSLATIONS[currentLang];
    if (isOpen) {
      content.classList.add("hidden");
      btn.setAttribute("aria-expanded", "false");
      btn.textContent = t.secretBtn;
    } else {
      content.classList.remove("hidden");
      btn.setAttribute("aria-expanded", "true");
      btn.textContent = t.secretBtnClose;
      setTimeout(() => content.scrollIntoView({ behavior: "smooth", block: "nearest" }), 100);
    }
  });
}

/* ============================================================
   CONFETTI
   ============================================================ */
function launchConfetti() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const container = document.getElementById("confettiContainer");
  const colors = [CONFIG.COLORS.primary, CONFIG.COLORS.secondary, CONFIG.COLORS.accent, "#ffffff", "#FFB3C6", "#C4B5FD"];

  function spawnWave(count, delay) {
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        const piece = document.createElement("div");
        piece.classList.add("confetti-piece");
        const isHeart = Math.random() > 0.7;
        piece.style.cssText = `
          left: ${Math.random() * 100}%;
          background: ${isHeart ? "transparent" : colors[Math.floor(Math.random() * colors.length)]};
          width:  ${6 + Math.random() * 8}px;
          height: ${6 + Math.random() * 8}px;
          border-radius: ${Math.random() > 0.5 ? "50%" : "2px"};
          animation-duration: ${2.5 + Math.random() * 2}s;
          font-size: 1rem;
        `;
        if (isHeart) piece.textContent = "❤️";
        container.appendChild(piece);
        setTimeout(() => piece.remove(), 5500);
      }, i * 30 + delay);
    }
  }

  spawnWave(80, 0);
  spawnWave(40, 1200);
}
