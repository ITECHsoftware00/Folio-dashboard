<p align="center">
  <img src="public/favicon.svg" width="56" alt="Folio logo" />
</p>

<h1 align="center">Folio</h1>

<p align="center">
  <strong>Business finance, in focus.</strong><br />
  A modern fintech dashboard for managing cash flow, invoices, payments, accounts, cards and reports — all in one place.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/node-%3E%3D22-339933?logo=node.js&logoColor=white" alt="Node.js >= 22" />
  <img src="https://img.shields.io/badge/zero_dependencies-black" alt="Zero dependencies" />
  <img src="https://img.shields.io/badge/license-private-555" alt="Private" />
  <img src="https://img.shields.io/badge/currency-GBP_(£)-243e2c" alt="GBP" />
</p>

---

## ✨ Features

| Module | What it does |
|---|---|
| **Overview** | KPI summary cards (total balance, money in/out, outstanding invoices) with a 6-month cash flow chart |
| **Transactions** | Searchable, filterable ledger of all income & expenses with inline detail modals |
| **Invoices** | Create invoices, track overdue/pending status, and record payments — auto-updates account balances |
| **Accounts** | Operating account & tax reserve views with sort codes, holders and quick-pay actions |
| **Cards** | Virtual business debit card with freeze/unfreeze control and spending limits |
| **Reports** | Interactive cash flow charts and categorised spending breakdown with visual meters |
| **Settings** | Editable workspace details (business name, owner, email) and full demo reset |

### Bonus capabilities

- 🔍 **Global search** — `⌘K` / `Ctrl+K` instant search across all transactions
- 📤 **CSV export** — one-click download of transactions or invoices
- 🔔 **Notifications** — alerts for overdue invoices and monthly summaries
- 💳 **Demo payments** — record outgoing payments with real-time balance updates
- 💾 **Persistent state** — all changes saved to `localStorage` and survive refresh
- 📱 **Fully responsive** — adaptive layout from mobile to ultra-wide

---

## 🚀 Quick Start

> **Prerequisite:** Node.js 22 or newer. No `npm install` needed — zero external dependencies.

```bash
# Clone the repo
git clone https://github.com/ITECHsoftware00/Folio-dashboard.git
cd Folio-dashboard

# Start the dev server
npm run dev
```

Open **http://127.0.0.1:4173** in your browser.

> **Windows PowerShell note:** If execution policy blocks `npm.ps1`, run `npm.cmd run dev` instead.

---

## 🧪 Testing & Validation

```bash
# Run financial logic unit tests
npm test

# Syntax-check the built modules
npm run check
```

---

## 📁 Project Structure

```
folio/
├── dist/                    # Production-ready static app
│   ├── index.html           # Entry point
│   ├── app.mjs              # Main application logic & views
│   ├── finance.mjs          # Financial data, calculations & helpers
│   ├── charts.js            # Cash flow chart renderer
│   └── styles.css           # Responsive stylesheet
├── app/                     # Next.js app scaffold (layout + placeholder)
│   ├── layout.tsx           # Root layout with Geist font
│   ├── page.tsx             # Landing page skeleton
│   └── globals.css          # Tailwind + shadcn/ui theme
├── components/ui/           # shadcn/ui component library (60+ components)
├── lib/
│   ├── finance.mjs          # Financial utilities (money formatting, filters, payments)
│   ├── finance.test.mjs     # Unit tests for financial logic
│   └── utils.ts             # General utilities
├── db/                      # Drizzle ORM schema (ready for D1/Cloudflare)
├── scripts/                 # Build, install & dev tooling
├── docs/design.md           # Design direction & architecture notes
├── package.json             # Scripts & engine requirements
└── serve.mjs                # Zero-dependency HTTP dev server
```

---

## 🎨 Design System

| Element | Detail |
|---|---|
| **Typography** | [Geist](https://vercel.com/font) — 400, 500, 600, 700 |
| **Palette** | Achromatic ledger with forest-green accents (`#243e2c`) |
| **Components** | 60+ shadcn/ui primitives (New York style, neutral base) |
| **Icons** | Hand-crafted inline SVG icon set (30+ icons) |
| **Layout** | Three-column dashboard: sidebar navigation → main content → context panels |
| **Interactions** | Native `<dialog>` modals, toast notifications, keyboard navigation |

---

## 💡 How It Works

- **No bank integration** — Folio is a self-contained demo with realistic sample data for a fictional studio called *Studio North*
- **Integer-penny arithmetic** — all monetary values stored as integer pence to avoid floating-point errors
- **XSS-safe** — all user-supplied text is escaped before rendering
- **Snapshot date** — the demo is pinned to **7 November 2026**
- **Local-first** — data persists in `localStorage` under `folio-demo-v1`; use Settings → Reset to restore defaults

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Runtime** | Node.js 22+ |
| **Frontend** | Vanilla JS (ES Modules), HTML5, CSS3 |
| **Framework scaffold** | Next.js 15, React, Tailwind CSS v4 |
| **UI library** | shadcn/ui (New York) |
| **ORM** | Drizzle (optional, D1-ready) |
| **Deployment** | Cloudflare Workers / static hosting |
| **Dev server** | Custom zero-dependency Node.js server |

---

## 📜 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server on port 4173 |
| `npm start` | Alias for `npm run dev` |
| `npm test` | Run financial logic tests (`node --test`) |
| `npm run check` | Syntax-check `dist/app.mjs` and `dist/finance.mjs` |

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is private. All rights reserved.

---

<p align="center">
  <sub>Built with care by <a href="https://github.com/ITECHsoftware00">ITECH Software</a></sub>
</p>
