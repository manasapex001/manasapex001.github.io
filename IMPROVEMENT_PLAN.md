# Manas Singh — Portfolio Improvement Plan

A practical roadmap for upgrading the Figma-Make-exported site into a polished, interactive portfolio. Written so you can do it incrementally — each phase produces a visibly better site and nothing depends on later phases.

The good news up front: the existing codebase is in solid shape. It's React 18 + Vite + TypeScript + Tailwind v4 + shadcn/ui, with `motion` (Framer Motion), `embla-carousel`, `recharts`, `react-slick`, and `canvas-confetti` already installed but unused. So everything below can be done without adding new dependencies.

---

## Audit — what's there today

The site has eight sections wired up in `App.tsx`: Hero, About, Publications, Projects, Awards, Updates, Writings, Miscellaneous, Contact. Three of them (Publications, Writings, Updates) are "Coming Soon" placeholders. Projects has five entries, hand-coded inside the component. Navigation is a fixed top bar with smooth-scroll and an active-section indicator driven by a scroll listener in `App.tsx`. Styling is a black background with `bg-white/5` cards and `border-white/10` borders — clean, but every card looks the same and nothing on the page moves.

Things worth fixing while we're in there:

- `index.html` title is still `"Create Minimalist Portfolio Prototype"`. No favicon, no OG tags, no description.
- Hero shows initials `MS` instead of a photo.
- Contact has a phone mismatch — display says `+91 123456789` but `href` is a different number. The Google Scholar link points to `https://scholar.google.com` (no profile) and the X handle is `yourhandle`.
- Eight nav items will wrap or get cramped on mobile; there's no hamburger.
- The form in Contact has no submit handler.
- A scroll listener runs on every scroll without throttling; should be `IntersectionObserver`.
- Three duplicate `manas*.github.io` repos exist on GitHub — worth deleting the dead ones.

---

## Phase 1 — Global polish (highest impact, lowest risk)

This is the phase that will make the site feel "alive" without changing any content.

**Scroll-triggered fade-ins.** Wrap each section in a small `<Section>` component that uses `framer-motion`'s `whileInView` to fade and slide the content up the first time it enters the viewport. About 15 lines of code, applied site-wide via the existing wrapper pattern.

**Replace the scroll listener with IntersectionObserver.** The current `handleScroll` runs on every pixel of scroll. An observer with `rootMargin: "-40% 0px -55% 0px"` on each section element does the same job, smoother, and removes the listener entirely.

**Mobile navigation.** The nav has eight items — that won't fit on a phone. Add a hamburger that opens a `Sheet` (already imported via shadcn) on screens below `md`. The active-indicator logic stays the same.

**Active-section underline.** Right now the active item just changes color. A `motion.div` `layoutId="nav-underline"` underline that slides between items reads as much more polished and is ~10 lines.

**Cursor & focus states.** Buttons currently rely on `hover:bg-white/10` only. Adding a subtle `ring-1 ring-white/20` on `focus-visible` makes keyboard navigation usable, and a small `scale-[1.02]` on hover for cards adds life.

**SEO + meta.** Real `<title>`, `<meta name="description">`, OG image, favicon. Takes 5 minutes; massive difference when someone shares the link.

**Theme tokens.** You already have `theme.css`. Promote the few hardcoded colors (`bg-blue-500/20`, `text-blue-400`, etc.) into CSS variables so a future light-mode switch is a one-line change.

---

## Phase 2 — Hero & About

**Real photo.** Drop a square image into `src/assets/` and replace the `MS` initials. Add a subtle ring + slow rotating gradient halo behind it (a `motion.div` with `animate={{ rotate: 360 }}` over 20s).

**Animated headline.** Stagger each letter of "Manas Singh" using `motion`'s `staggerChildren`. Cheesy if overdone, perfect at 0.04s delay.

**Typing effect on the role line.** "Economics & Data Analyst" can rotate through a small set: "Economics & Data Analyst" → "Quantitative Researcher" → "Trade & Finance" → "Time-series forecaster". Use a small custom hook, no library needed.

**Fix the social links.** Real Google Scholar profile (or remove the icon), real X handle, double-check the GitHub URL (`manasapex001` is correct based on the repos I pulled).

**About — make skills interactive.** Skills currently render as static pills. Group them into three buckets (Languages, ML/Stats, Tools) and let the user filter by clicking. When you click "Languages", the others fade. About 30 lines.

**Education — vertical timeline.** Replace the two stacked cards with a left-side timeline (a vertical line with dots), which reads as a CV and looks more deliberate.

---

## Phase 3 — Projects (rewritten with your real GitHub data)

I pulled the public repos under `manasapex001`. Here's what's there and what I'd put on the site:

| Repo | What it is | Site-ready? |
|---|---|---|
| Forecasting-The-Price-Of-Natural-Gas | ARIMA/SARIMA/LSTM/RNN/VAR on 1990–2023 gas prices | Already on site — add GitHub link |
| Credit-Card-Fraud-Detection | Autoencoders in Keras | New — add |
| Heart-Disease-Prediction-using-ML | KNN, Decision Tree, etc. on heart-disease dataset | New — add |
| E-Commerce-Data-Analysis | Power BI dashboard | New — add (good visual) |
| Analyzing-Historical-Stock-Revenue-Data-and-Building-a-Dashboard | Python, stock + revenue dashboard | New — add |
| Online-Retail-K-Means-Clustering | RFM segmentation, k-means | New — add |
| MY-statement-of-purpose | SOP HTML | Skip |

Combined with the four academic projects already in the file (Vietnam trade, India inequality, BRICS convergence, Aga Analytics internship), that's **eleven projects** — too many to dump as a flat list. Two design moves:

**Tag-based filtering.** Each project gets `category` (`"Research"` or `"Data Science"` or `"Internship"`) and `tags` (e.g. `["Python", "Time Series", "Deep Learning"]`). A row of pills above the grid lets the visitor narrow down. `motion`'s `<AnimatePresence>` + `layout` makes the cards reflow smoothly when filters change. About 60 lines.

**Expandable cards.** Default state shows title, period, one-line summary, tech badges. Click expands to show full description, GitHub/demo links, and an optional thumbnail. That's `<motion.div layout>` + a `useState` per card.

**Move the data out.** Pull the projects array into `src/app/data/projects.ts`. Easier to maintain, and the same data structure can feed a future `/projects/[slug]` route if you ever want detail pages.

**Add GitHub stats.** A small line under each repo-backed project — "★ 3 · Jupyter · Updated Feb 2026" — pulled at build time from a static JSON, or live via a tiny fetch on mount. Visually grounds the project as real.

---

## Phase 4 — Publications, Writings, Updates

These are placeholders today. Two paths:

**If you have content:** turn each into a list of cards with a date, title, one-paragraph abstract, and a "Read PDF" button. For Publications, follow the convention of academic sites — author list (your name in bold), venue, year, BibTeX copy button.

**If you don't yet:** keep them placeholders but make them look intentional. Replace the generic "Coming Soon" with a Substack/RSS subscribe form ("Get notified when I publish"), or hide these sections from the nav and bring them back when you have content. A "Coming Soon" card on a portfolio reads as unfinished; a clean subscribe box reads as deliberate.

I'd suggest hiding `Publications`, `Writings`, `Updates` from the nav until they have at least one real entry, and keep them as routes you can link to. That's a one-line change in `Navigation.tsx`.

---

## Phase 5 — Contact

**Wire the form.** Right now it's decorative. Easiest: [Formspree](https://formspree.io) or [Resend](https://resend.com) — change the `<form>` to `action="https://formspree.io/f/yourid" method="POST"` and you're done. No backend.

**Fix the phone mismatch.** Display says `+91 123456789`, `href` says `+916391280096` — pick one.

**Add a "Download CV" button.** Drop a PDF in `public/`, link from the hero and contact section.

**Confetti easter egg.** You have `canvas-confetti` installed. Fire a small burst on successful form submit. Two lines, instant delight.

---

## Phase 6 — Miscellaneous & nice-to-haves

**Photography masonry.** You list photography as a hobby — `react-responsive-masonry` is already installed. A small gallery of 6–9 photos under "Miscellaneous" would make the page feel personal in a way that no amount of text can.

**Reading list.** Pull a "Currently reading" card from a small JSON, with cover thumbnail. Updates rarely, signals personality.

**Scroll progress bar.** A 2px gradient bar at the top of the page that fills as you scroll. ~5 lines with `motion`'s `useScroll` + `scaleX`.

**Cursor effect.** A faint radial gradient that follows the cursor on the hero (`onMouseMove` setting two CSS variables). Subtle but distinctive.

**Light mode.** `next-themes` is installed. A toggle in the nav. Most of the work is in `theme.css` — promote colors to variables in Phase 1 and the toggle becomes trivial.

**Analytics.** Plausible or Vercel Analytics — both are free for personal sites and don't require a cookie banner.

---

## Suggested sequence

If you want one PR per phase: 1 → 3 → 2 → 5 → 4 → 6. Phase 1 changes the feel of the whole site; Phase 3 changes the most-looked-at section; Phase 2 polishes the first thing visitors see; Phase 5 makes the page actually useful for outreach; Phases 4 and 6 are content-dependent.

If you want one PR total: do Phase 1 + the Projects rework from Phase 3, ship that, then iterate.

---

## What I'd want from you before writing code

Three small things:

1. A real photo for the Hero (square, 600×600 minimum), or confirmation to keep the "MS" monogram.
2. The actual phone number you want shown (or whether to remove the phone card entirely).
3. Confirmation on the GitHub username — I see the public repos under `manasapex001` and the Hero links there too, so I'll use that.

Once those are settled, I'll start with Phase 1 + Phase 3 and show you the diff.
