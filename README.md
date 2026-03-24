# The AI Factory — Book Preview Site

Interactive preview site for **The AI Factory: AI Capability Guide for SMEs** by Kevin Shepherdson, Celine Chew & Joaquin Jay Gonzalez III.

🌐 **Live site:** https://altoh5.github.io/ai-factory-preview/

---

## About the Book

Every company is now an intelligence manufacturer. This book gives SME leaders a practical framework to build, customize, and deploy their own AI Factory — no coding required.

- **15 chapters** across Foundation, Floor 1 (Production), Floor 2 (Operations), and Part 3 (The Future)
- **Free chapter preview** per section, soft-gated thereafter
- **Sketchnote infographics** for each section (generated with NotebookLM)
- **AI Factory Formula:** Data + Compute + Models = Intelligence

Endorsed by leaders from NVIDIA, Google DeepMind, Singapore Parliament & more.

📖 **Get the book:** [info@straitsinteractive.com](mailto:info@straitsinteractive.com?subject=AI%20Factory%20Book%20Inquiry)

---

## Tech Stack

- [Next.js 16](https://nextjs.org/) — static export
- [Tailwind CSS v4](https://tailwindcss.com/)
- [NotebookLM](https://notebooklm.google.com/) — sketchnote infographic generation
- Deployed via GitHub Actions → GitHub Pages

## Local Development

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy to GitHub Pages

Pushes to `main` automatically build and deploy via the included Actions workflow (`.github/workflows/deploy.yml`).

To enable for the first time:
1. Go to **Settings → Pages** in this repo
2. Set Source to **GitHub Actions**
3. Push to `main` — the workflow will build and deploy automatically

---

Published by [Straits Interactive](https://straitsinteractive.com) · Available across ASEAN
