# 🚨 Emergency Apology System ❤️

A beautiful, funny, and sincere apology website — built with pure HTML, CSS, and JavaScript. No backend. No database. Fully static.

---

## ⚙️ Personalization

Open `script.js` and update the `CONFIG` block at the top:

```js
const CONFIG = {
  GIRLFRIEND_NAME: "HER NAME",   // ← Her name
  BOYFRIEND_NAME:  "MY NAME",    // ← Your name
  NICKNAME: "Your very guilty, very sleepy, and very sorry boyfriend",

  // Your WhatsApp number (digits only, with country code, no +)
  // e.g. "255712345678" for Tanzania
  WHATSAPP_NUMBER: "",

  // Message she'll see pre-filled in WhatsApp
  WHATSAPP_MESSAGE: "Okay... I saw your apology 😂❤️",

  // Customize the apology paragraphs if you'd like
  APOLOGY_PARAGRAPHS: [ ... ],

  // The classified/secret message
  SECRET_PARAGRAPHS: [ ... ],
};
```

That's it. One config object. No other values are hardcoded.

---

## 🚀 Deployment

### Option 1 — GitHub Pages (Free, recommended)

1. Create a new repository on GitHub (e.g. `apology-site`)
2. Push all the files:
   ```bash
   git init
   git add .
   git commit -m "Emergency apology 🚨❤️"
   git remote add origin https://github.com/YOUR_USERNAME/apology-site.git
   git push -u origin main
   ```
3. Go to your repo → **Settings** → **Pages**
4. Under "Source", select **main branch / root folder**
5. Click **Save**
6. Your site will be live at: `https://YOUR_USERNAME.github.io/apology-site/`

---

### Option 2 — Vercel (Free, fastest, cleanest URL)

1. Install Vercel CLI (optional) or use the dashboard
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repository
4. Leave all settings as default (no framework, no build command)
5. Click **Deploy**
6. Your site will be live at: `https://your-repo-name.vercel.app`

---

### Option 3 — Netlify (Free, also excellent)

1. Go to [netlify.com](https://netlify.com) → **Add new site** → **Deploy manually**
2. Drag and drop the entire project folder into Netlify
3. Or connect your GitHub repo and set:
   - Build command: *(leave empty)*
   - Publish directory: `/` (root)
4. Click **Deploy**
5. Your site will be live at: `https://random-name.netlify.app`

---

## 📁 Project Structure

```
/
├── index.html      ← Main page
├── style.css       ← All styles
├── script.js       ← Logic + CONFIG (personalize here)
├── assets/         ← Optional: og-preview image
└── README.md       ← This file
```

---

## ✅ Checklist

- [x] All buttons work
- [x] Mobile-first responsive layout
- [x] Animations (fade-in, slide-up, confetti, hearts, Zzz)
- [x] `prefers-reduced-motion` respected
- [x] WhatsApp button with pre-filled message
- [x] Forgiveness + "Still Angry" flows
- [x] Secret classified message button
- [x] Names configurable from one CONFIG object
- [x] No backend, no auth, no database
- [x] Ready to deploy as a static site
- [x] Open Graph metadata for WhatsApp/social sharing

---

Made with ❤️ (and a lot of regret about not saying goodnight).
