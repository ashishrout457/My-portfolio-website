# ⚡ Ashish Rout | Interactive AI/ML & Developer Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Python](https://img.shields.io/badge/Python-3.x-3776AB?logo=python&logoColor=white)](https://www.python.org/)
[![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub%20Pages-brightgreen?logo=github)](https://pages.github.com/)

An ultra-modern, high-performance interactive developer portfolio engineered with a **Cyber Glass** design system, interactive **CLI Terminal**, **3 Live Project Simulators**, **Architecture & Source Code Modals**, and a **Touch-Reactive Neural Particle Canvas**.

Built with pure Vanilla Web Technologies (**HTML5, CSS3, ES6+ JavaScript**) — zero external frameworks or heavy dependencies.

---

## 🌟 Live Features & Highlights

### 1. 🖥️ Interactive CLI Terminal (`Ctrl+K` or Floating Glowing FAB)
- Emulates a cyberpunk terminal directly in the browser with interactive prompt commands and one-touch command chips:
  - `help`: Lists all available commands.
  - `bio`: Displays background, education, and engineering summary.
  - `skills`: Prints categorized technical proficiencies.
  - `projects`: Lists all flagship projects with clickable GitHub repositories.
  - `experience`: Freelance and commercial web deployment background.
  - `certs`: Infosys Springboard certifications and credentials.
  - `nss`: National NSS delegate milestones (NIC '25).
  - `contact`: Direct clickable email, WhatsApp, GitHub, and LinkedIn links.
  - `theme`: Toggles between Cyber Dark and Clean Light themes.
  - `clear`: Clears the terminal screen.

### 2. 🧪 Flagship Interactive Project Simulators
- **🌱 Agro Cycle ML Predictor**: Interactive soil chemistry sliders (**Nitrogen**, **Phosphorus**, **Potassium**, **Moisture**, **Temperature**) calculating soil health index, crop yield estimates, and agronomic recommendations in real-time.
- **🏏 GM League S2 Real-Time Score Engine**: Live match scoreboard simulation with **Start/Pause/Reset**, **+4 Boundary**, **Wicket** triggers, **CRR/RRR** calculations, and live ball-by-ball commentary streams.
- **🛒 Zero-Dependency E-Commerce State Machine**: Cross-tab state synchronization demonstrating native browser `BroadcastChannel API`, `LocalStorage`, and live order lifecycle tracking (`Placed` ➔ `Processing` ➔ `Shipped` ➔ `Delivered`).

### 3. 🔍 Architecture & Source Code Inspector Modals
- Every project features an interactive modal with:
  - **ASCII Systems Architecture Flow Diagrams**.
  - **Production Source Code Snippets** (`app.py`, `ai.py`, `agro_yield_engine.py`, `gm_live_relay_server.py`, `store_sync_engine.js`, `main.js`, `app.js`).
  - **One-Click Code Copy** with animated toast notifications.
  - **Direct GitHub Repo** and **Live Simulator** action buttons.

### 4. 🎨 Themes & Design Aesthetics
- **Cyber Dark / Clean Light Theme Engine**: Seamless CSS custom properties toggle with persistent `localStorage` preference.
- **Neural Particle Canvas**: Mouse-interactive and touch-reactive particle mesh background that connects nodes based on proximity and velocity.
- **Animated Metric Counters**: Ease-out cubic count-up animations for academic metrics (8.0 CGPA), projects, and certifications.
- **Mobile-First & Zero Layout Shifts**: Fully responsive across mobile (iPhone/Android), tablet, and desktop viewports with zero horizontal overflow.

---

## 🐙 Integrated GitHub Projects

| Project | Domain | Technologies | Actions |
| :--- | :--- | :--- | :--- |
| **[Z-Core](https://github.com/ashishrout457/Z-Core)** | Zero-Knowledge Security & Ephemeral Relay | Python, FastAPI, WebSockets, AES-256, Docker, PWA | [GitHub](https://github.com/ashishrout457/Z-Core) • Architecture Preview |
| **[StockRadar](https://github.com/ashishrout457/StockRadar)** | AI & Financial Telemetry Engine | Python, Multi-Threading, RSS Parsers, Financial APIs | [GitHub](https://github.com/ashishrout457/StockRadar) • Architecture Preview |
| **[Zero-Dependency E-Commerce](https://github.com/ashishrout457/E-Commerse-website)** | Web APIs & Cross-Tab Sync | BroadcastChannel API, LocalStorage, FileReader API | [GitHub](https://github.com/ashishrout457/E-Commerse-website) • Live Simulator |
| **[One Promise Group](https://github.com/ashishrout457/ONEPROMISE-GROUP)** | Commercial Real Estate Platform | Modular HTML/CSS, JS, Keyframes, RERA Branding | [GitHub](https://github.com/ashishrout457/ONEPROMISE-GROUP) • Architecture Preview |
| **[Murthy Driving School](https://github.com/ashishrout457/Driving-School)** | Commercial Web Application | 3-Tier IA, Google Maps API, WhatsApp Integration | [GitHub](https://github.com/ashishrout457/Driving-School) • Architecture Preview |
| **Agro Cycle** | AI & Machine Learning | Python, Gradient Boosting Regressor, CNN Exploration | Interactive ML Predictor Simulator |
| **GM League S2 Score App** | Real-Time Systems | Python WebSockets, VM Port Forwarding | Interactive Live Score Simulator |

---

## 📁 Repository Structure

```
Portfolio/
├── index.html              # Main HTML5 document, SEO metadata & custom SVG favicon
├── style.css               # Unified stylesheet (Tokens, reset, components, responsive layouts)
├── script.js               # Unified application logic (Data, terminal, simulators, modals, canvas)
├── LICENSE                 # MIT Open-Source License
├── README.md               # Documentation & deployment guide
└── .gitignore              # Git ignore rules for clean repository
```

---

## 🚀 Quick Start (Local Setup)

No dependencies or node modules required! You can run this project locally using any standard static server:

### Option 1: Python Built-in Server (Recommended)
```bash
# Navigate to the portfolio folder
cd Portfolio

# Start server on port 3000
python -m http.server 3000
```
Open your browser at `http://localhost:3000`.

### Option 2: VS Code Live Server Extension
- Right-click `index.html` in VS Code and select **"Open with Live Server"**.

### Option 3: Node.js `npx serve`
```bash
npx serve .
```

---

## 🌐 Deployment

### Deploying to GitHub Pages (Free)
1. Push this repository to your GitHub account (e.g. `https://github.com/ashishrout457/portfolio`).
2. Navigate to your repository **Settings** ➔ **Pages**.
3. Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
4. Click **Save**. Your website will be live at:
   `https://ashishrout457.github.io/portfolio/` (or `https://ashishrout457.github.io/` if named `ashishrout457.github.io`).

### Deploying to Vercel / Netlify
1. Connect your GitHub repository to [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).
2. Keep the build settings empty (Framework: Other / Static Site, Output: `./`).
3. Click **Deploy**.

---

## 👤 Author

**Ashish Rout**  
AI & ML Engineer • Full-Stack Web Developer • Bangalore, Karnataka, India  
- **GitHub:** [@ashishrout457](https://github.com/ashishrout457)
- **LinkedIn:** [linkedin.com/in/ashish-rout-31b6b3298](https://www.linkedin.com/in/ashish-rout-31b6b3298)
- **Email:** [ashish.rout457@gmail.com](mailto:ashish.rout457@gmail.com)
- **Phone / WhatsApp:** [+91 80889 82434](https://wa.me/918088982434)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
