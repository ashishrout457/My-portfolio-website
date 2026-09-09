// --- Sourced from js/data.js ---
/**
 * Data Model for Ashish Rout's Portfolio
 * Sourced directly from resume
 */

const portfolioData = {
  personal: {
    name: "ASHISH ROUT",
    title: "AI & ML Engineer / Full-Stack Web Developer",
    email: "ashish.rout457@gmail.com",
    phone: "+918088982434",
    phoneDisplay: "+91 80889 82434",
    github: "https://github.com/ashishrout457",
    githubDisplay: "github.com/ashishrout457",
    linkedin: "https://www.linkedin.com/in/ashish-rout-31b6b3298",
    linkedinDisplay: "linkedin.com/in/ashish-rout-31b6b3298",
    gender: "Male",
    location: "Bangalore, Karnataka, India",
    summary: "I am a developer and analyst with a specialized skill set bridging Python programming, full-stack web development, and artificial intelligence. My expertise lies in building sophisticated AI models, managing relational databases with SQL, and integrating complex APIs to drive automation and data-driven decision-making.",
    stats: [
      { number: "8.0", label: "CGPA (UG CSE-AIML)" },
      { number: "7", label: "Flagship Projects" },
      { number: "4+", label: "Infosys Certifications" },
      { number: "2+", label: "Commercial Deployments" },
      { number: "1", label: "National NIC Delegate" }
    ],
    roles: [
      "AI & Machine Learning Engineer",
      "Full-Stack Web Developer",
      "Relational Database & SQL Analyst",
      "Python & Systems Specialist"
    ]
  },

  education: [
    {
      degree: "UG CSE-AIML (Computer Science & Engineering - AI & ML)",
      institution: "FET",
      duration: "Sep 2023 – Present",
      grade: "CGPA: 8.0",
      description: "Specializing in Machine Learning architectures, Deep Learning, Relational Database Management, Data Structures, and Modern Web Systems."
    },
    {
      degree: "Pre-University Course (PUC / 12th)",
      institution: "Narayana E-Techno",
      duration: "Mar 2022 – Mar 2023",
      grade: "Score: 70%",
      description: "Focused on Physics, Chemistry, Mathematics, and Computer Science foundation."
    },
    {
      degree: "SSLC / 10th Grade",
      institution: "Sharada Vidya Mandira",
      duration: "May 2020 – Mar 2021",
      grade: "Score: 90.00%",
      description: "Graduated with High Distinction, actively participating in academic and socio-cultural competitions."
    }
  ],

  experience: [
    {
      role: "Freelance Web Developer",
      company: "One Promise Group",
      location: "Bangalore, India",
      duration: "Jan 2026 – Feb 2026",
      highlights: [
        {
          title: "Front-End Architecture",
          desc: "Built a fully mobile-responsive real estate website from scratch, utilizing modular HTML, CSS, and JavaScript for a clean, scalable codebase."
        },
        {
          title: "Dynamic UI/UX",
          desc: "Engineered interactive user features, including a site-wide light/dark mode toggle and custom CSS keyframe animations for high user retention."
        },
        {
          title: "User Engagement",
          desc: "Developed and integrated lead-generation tools, such as a fixed floating communication button and a custom event-triggered launch pop-up."
        },
        {
          title: "Content Integration",
          desc: "Structured site layout and positioning for key business assets, including interactive executive profile cards and official RERA-approved branding."
        }
      ],
      technologies: ["HTML5", "CSS3 Keyframes", "Vanilla JavaScript", "Responsive Design", "Lead Gen UI", "RERA Branding"]
    },
    {
      role: "Freelance Web Developer",
      company: "Murthy Driving School",
      location: "Bangalore, India",
      duration: "Mar 2026 – Mar 2026",
      highlights: [
        {
          title: "Front-End Development",
          desc: "Developed a fully responsive landing page featuring an interactive light and dark theme toggle for enhanced accessibility and brand presence."
        },
        {
          title: "Information Architecture",
          desc: "Designed the service layout by structuring and categorizing driving courses into distinct tiers (Beginner, Intermediate, and Advanced) to streamline user navigation."
        },
        {
          title: "Third-Party Integrations",
          desc: "Embedded an interactive map for precise location tracking and implemented a direct WhatsApp contact integration to drive immediate customer inquiries."
        },
        {
          title: "UI/UX Design",
          desc: "Built and styled a dedicated testimonials section to showcase student reviews and establish strong business credibility."
        }
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Google Maps Integration", "WhatsApp Click-to-Chat", "Theme Engine"]
    }
  ],

  projects: [
    {
      id: "z-core",
      title: "Z-Core | Zero-Knowledge Ephemeral Relay",
      category: "realtime",
      categoryLabel: "Security & Real-Time Systems",
      duration: "Aug 2026 – Present",
      shortDesc: "RAM-only end-to-end encrypted private communications relay with zero-knowledge AES-256 and PWA support.",
      fullDesc: "Z-Core is a zero-history, zero-database ephemeral communications system. Features client-side AES-256 encryption with keys in URL fragments, FastAPI WebSocket relays held purely in RAM, anti-screenshot security guards, panic room nukes, and installable PWA support.",
      technologies: ["Python", "FastAPI", "WebSockets", "AES-256 Encryption", "Docker", "PWA", "ServiceWorker"],
      features: [
        "Zero-knowledge client-side AES-256 cryptographic encryption",
        "Pure RAM-only ephemeral relay with zero disk writes & zero database",
        "Anti-screenshot protection & clipboard clearing triggers",
        "Instant Panic-Room memory and DOM nuke system",
        "Standalone Progressive Web App (PWA) with offline service workers"
      ],
      githubUrl: "https://github.com/ashishrout457/Z-Core",
      simulatorId: null
    },
    {
      id: "stock-radar",
      title: "StockRadar | Market Intelligence Engine",
      category: "ai",
      categoryLabel: "AI & Financial Systems",
      duration: "Aug 2026 – Present",
      shortDesc: "Real-time stock market telemetry, financial news aggregator, and multi-threaded market analytics engine.",
      fullDesc: "StockRadar is a stock intelligence platform delivering automated financial news feed parsing, multi-threaded ticker analytics, real-time watchlist tracking, and AI-driven market sentiment indicators built with Python and web technologies.",
      technologies: ["Python", "Financial APIs", "JavaScript", "HTML5/CSS3", "Multi-Threading", "PWA"],
      features: [
        "Automated financial RSS and market news parsing engine",
        "Multi-threaded concurrent ticker telemetry fetching",
        "Dynamic watchlist management with persistent JSON state",
        "Mobile-first PWA dashboard with interactive market visualizers"
      ],
      githubUrl: "https://github.com/ashishrout457/StockRadar",
      simulatorId: null
    },
    {
      id: "agro-cycle",
      title: "Agro Cycle | AI Crop Yield Predictor",
      category: "ai",
      categoryLabel: "AI & Machine Learning",
      duration: "Jan 2024 – Present",
      shortDesc: "ML-powered crop yield and soil chemistry advisory platform analyzing environmental sensor data.",
      fullDesc: "The platform uses machine learning regression models to analyze soil conditions (N-P-K), weather patterns, and historical data to provide farmers with accurate crop yield predictions and soil health insights. Exploring CNN integration for leaf foliage diagnostics.",
      technologies: ["Machine Learning", "Python", "HTML5", "JavaScript", "CSS3", "CNN (Exploring)", "Predictive Modeling"],
      features: [
        "Real-time N-P-K soil chemistry health assessment",
        "Predictive crop yield output based on temperature & rainfall",
        "CNN image processing exploration for foliage analysis",
        "Zero-friction client-side advisory interface"
      ],
      githubUrl: null,
      simulatorId: "agro"
    },
    {
      id: "gm-league",
      title: "GM League S2 Score Application",
      category: "realtime",
      categoryLabel: "Real-Time / Systems",
      duration: "Mar 2026 – May 2026",
      shortDesc: "Live sports scoring web platform with network port forwarding and global VM spectator deployment.",
      fullDesc: "Built a real-time live match scoring platform for GM League Season 2, initially deployed on the campus network and later made globally accessible using virtual machines and port forwarding. Features ultra-low latency updates and dynamic ball commentary.",
      technologies: ["Python", "HTML5", "CSS3", "JavaScript", "Networking", "Port Forwarding", "Virtual Machines"],
      features: [
        "Real-time ball-by-ball score synchronization",
        "Campus intranet & global VM port forwarding architecture",
        "Instant run-rate & overs progression calculation",
        "Dynamic match status timeline and responsive spectator view"
      ],
      githubUrl: null,
      simulatorId: "gm"
    },
    {
      id: "ecommerce-platform",
      title: "Zero-Dependency E-Commerce Platform",
      category: "fullstack",
      categoryLabel: "Full-Stack Web APIs",
      duration: "Jul 2026 – Aug 2026",
      shortDesc: "High-performance web storefront featuring live cross-tab state synchronization and order lifecycle tracking.",
      fullDesc: "A responsive, zero-dependency Vanilla JavaScript e-commerce web application with real-time cross-tab state synchronization, live order lifecycle tracking, customer photo review attachments, and an administrative store operations dashboard utilizing modern browser Web APIs.",
      technologies: ["JavaScript (ES6+)", "HTML5", "CSS3", "BroadcastChannel API", "LocalStorage API", "FileReader API"],
      features: [
        "Cross-tab synchronization via BroadcastChannel API",
        "Persistent cart & settings using LocalStorage API",
        "User photo upload & instant preview via FileReader API",
        "Live order lifecycle state machine (Placed → Processing → Shipped → Delivered)",
        "Admin store operations dashboard"
      ],
      githubUrl: "https://github.com/ashishrout457/E-Commerse-website",
      simulatorId: "ecom"
    },
    {
      id: "onepromise-group",
      title: "One Promise Group Real Estate",
      category: "fullstack",
      categoryLabel: "Commercial Web Application",
      duration: "Jan 2026 – Feb 2026",
      shortDesc: "Production real estate platform with modular architecture, interactive theme engine, and lead generation tools.",
      fullDesc: "Built a mobile-responsive commercial real estate web application from scratch with modular HTML/CSS/JS, site-wide light/dark mode, CSS keyframe animations, floating lead-gen communication modals, and official RERA compliance branding.",
      technologies: ["HTML5", "CSS3 Keyframes", "JavaScript", "Responsive Design", "Lead Gen UI", "RERA Branding"],
      features: [
        "Modular front-end architecture designed for high scalability",
        "Interactive dark/light theme engine with CSS variables",
        "Floating communication lead-gen widget and launch pop-ups",
        "RERA-approved layout & interactive executive profile cards"
      ],
      githubUrl: "https://github.com/ashishrout457/ONEPROMISE-GROUP",
      simulatorId: null
    },
    {
      id: "driving-school",
      title: "Murthy Driving School Platform",
      category: "fullstack",
      categoryLabel: "Commercial Web Application",
      duration: "Mar 2026",
      shortDesc: "Commercial landing page with 3-tier course architecture, interactive map tracking, and WhatsApp API integration.",
      fullDesc: "Developed a responsive web platform for Murthy Driving School featuring 3-tier course information architecture (Beginner, Intermediate, Advanced), dark/light accessibility theme toggle, interactive location maps, student testimonials, and direct WhatsApp customer inquiries.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Google Maps Integration", "WhatsApp API", "UI/UX Testimonials"],
      features: [
        "Tiered course information architecture (Beginner, Intermediate, Advanced)",
        "Interactive Google Maps location integration",
        "Direct WhatsApp click-to-chat inquiry generator",
        "Client testimonials showcase for brand credibility"
      ],
      githubUrl: "https://github.com/ashishrout457/Driving-School",
      simulatorId: null
    }
  ],

  skills: {
    programming: [
      { name: "Python", level: "Expert", desc: "Core language for ML modeling, data automation, back-end scripting." },
      { name: "JavaScript (ES6+)", level: "Advanced", desc: "Modern DOM, Web APIs, async flows, zero-dependency architecture." },
      { name: "SQL", level: "Advanced", desc: "Relational modeling, ACID transactions, complex queries, and Views." },
      { name: "Java", level: "Intermediate", desc: "Object-oriented programming, data structures, algorithm design." },
      { name: "C", level: "Intermediate", desc: "Memory management, algorithmic fundamentals, system-level concepts." }
    ],
    webAndApis: [
      { name: "HTML5 Semantic Web", level: "Expert", desc: "Modern markup, accessibility, SEO optimization." },
      { name: "CSS3 & Keyframe Animation", level: "Expert", desc: "Custom layouts, responsive design, glassmorphism, themes." },
      { name: "BroadcastChannel API", level: "Advanced", desc: "Real-time cross-tab state synchronization." },
      { name: "LocalStorage API", level: "Advanced", desc: "Client-side state persistence and caching." },
      { name: "FileReader API", level: "Advanced", desc: "Client-side image and binary file processing." }
    ],
    aiAndSystems: [
      { name: "Machine Learning Principles", level: "Advanced", desc: "Predictive modeling, regression, classification pipelines." },
      { name: "Convolutional Neural Networks (CNN)", level: "Intermediate", desc: "Image analysis, feature maps, visual classification." },
      { name: "System Design", level: "Intermediate", desc: "Modular architecture, state machines, deployment patterns." },
      { name: "Networking & Port Forwarding", level: "Advanced", desc: "VM deployment, intranet routing, global tunneling." }
    ],
    softAndLanguages: [
      { name: "Problem Solving", type: "Soft Skill" },
      { name: "Teamwork & Collaboration", type: "Soft Skill" },
      { name: "Communication", type: "Soft Skill" },
      { name: "Adaptability", type: "Soft Skill" },
      { name: "Emotional Intelligence", type: "Soft Skill" },
      { name: "English", type: "Fluent" },
      { name: "Hindi", type: "Fluent" },
      { name: "Kannada", type: "Fluent" }
    ]
  },

  certifications: [
    {
      id: "cert-ai",
      title: "Artificial Intelligence",
      issuer: "Infosys Springboard",
      date: "Jan 2025",
      badge: "AI & ML",
      summary: "Comprehensive overview of fundamental Artificial Intelligence concepts, covering core machine learning principles, algorithm design, and data-driven problem-solving methodologies.",
      keyLearnings: [
        "Theoretical frameworks and real-world applications of AI",
        "Foundations of predictive modeling and neural networks",
        "Generative systems architecture and optimization techniques"
      ]
    },
    {
      id: "cert-sql-workshop",
      title: "SQL Case Study - SQL Workshop",
      issuer: "Infosys Springboard",
      date: "Jan 2026",
      badge: "Database",
      summary: "Workshop-style practical course focused on the application of database management and querying skills through dedicated real-world case studies.",
      keyLearnings: [
        "Complex multi-table relational querying and aggregations",
        "Real-world data problem formulation and resolution",
        "Query performance optimization and relational dataset analysis"
      ]
    },
    {
      id: "cert-sql-transactions",
      title: "SQL Transactions",
      issuer: "Infosys Springboard",
      date: "Jul 2025",
      badge: "Data Integrity",
      summary: "In-depth course on managing and executing database transactions to ensure data integrity across multi-step database operations.",
      keyLearnings: [
        "Core ACID properties (Atomicity, Consistency, Isolation, Durability)",
        "Managing transaction control states via COMMIT, ROLLBACK, and SAVEPOINT",
        "Concurrency control and preventing race conditions during updates"
      ]
    },
    {
      id: "cert-sql-views",
      title: "SQL Views",
      issuer: "Infosys Springboard",
      date: "Jul 2025",
      badge: "Security & Abstraction",
      summary: "Advanced database course covering the creation, indexing, and management of virtual tables derived from underlying query results.",
      keyLearnings: [
        "Simplifying complex queries into reusable virtual table abstractions",
        "Enhancing database security by masking direct base-table access",
        "Formatting and tailoring multi-source data for analytical consumption"
      ]
    }
  ],

  achievements: [
    {
      title: "NSS National Integration Camp (NIC 2025)",
      organization: "Kuvempu University / Government of India",
      date: "May 2025",
      location: "Shivamogga, Karnataka",
      theme: "Youth for Viksit Bharat (Youth for Developed India)",
      description: "Selected as an NSS delegate for the prestigious 7-day national residential youth camp bringing together nearly 200 NSS volunteers and officers from diverse states (Karnataka, Kerala, Tamil Nadu, Andhra Pradesh, Puducherry, and Maharashtra). Engaged in community service leadership, personality development workshops, morning fitness regimes, and socio-cultural showcases celebrating India's heritage and fostering national unity."
    }
  ]
};

// Expose globally
window.portfolioData = portfolioData;


// --- Sourced from js/contact.js ---
/**
 * Contact Form, Clipboard Actions & Toast Notification Manager
 * Ashish Rout - Interactive Portfolio
 */

(function () {
  const toastContainer = document.getElementById('toast-container');

  window.showToast = function (message, type = 'info') {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type === 'success' ? 'success' : ''}`;

    const icon = type === 'success' ? '✓' : 'ℹ';
    toast.innerHTML = `
      <span class="toast-icon" style="color: ${type === 'success' ? 'var(--accent-emerald)' : 'var(--accent-cyan)'}; font-weight: bold;">${icon}</span>
      <span class="toast-message">${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('show');
    }, 10);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentElement) toast.parentElement.removeChild(toast);
      }, 400);
    }, 3500);
  };

  // Clipboard copy triggers
  const copyButtons = document.querySelectorAll('[data-copy]');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      const label = btn.getAttribute('data-copy-label') || 'Text';

      navigator.clipboard.writeText(textToCopy).then(() => {
        window.showToast(`Copied ${label} to clipboard!`, 'success');
      }).catch(() => {
        window.showToast(`Failed to copy to clipboard`, 'info');
      });
    });
  });

  // Contact Form Submission Handler
  const contactForm = document.getElementById('portfolio-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name')?.value.trim();
      const email = document.getElementById('form-email')?.value.trim();
      const subject = document.getElementById('form-subject')?.value.trim() || 'Collaboration Opportunity';
      const message = document.getElementById('form-message')?.value.trim();

      if (!name || !email || !message) {
        window.showToast('Please fill in all required fields.', 'info');
        return;
      }

      // Generate Mailto Link as fallback direct communication
      const mailtoUrl = `mailto:ashish.rout457@gmail.com?subject=${encodeURIComponent(`[Portfolio Inquiry] ${subject} - from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

      window.location.href = mailtoUrl;

      window.showToast(`Opening your email client to reach Ashish Rout!`, 'success');
      contactForm.reset();
    });
  }
})();


// --- Sourced from js/modals.js ---
/**
 * Modal System for Project Architecture & Certifications
 * Ashish Rout - Interactive Portfolio
 */

(function () {
  const modalBackdrop = document.getElementById('details-modal');
  const modalContent = document.getElementById('modal-dynamic-content');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  if (!modalBackdrop || !modalContent) return;

  function openModal(html) {
    modalContent.innerHTML = html;
    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });

  // Project Architecture & Code Viewer
  window.openProjectModal = function (projectId) {
    const project = window.portfolioData.projects.find(p => p.id === projectId);
    if (!project) return;

    let archDiagram = '';
    let codeSnippet = '';
    let codeFilename = '';
    let simTabId = project.simulatorId || null;

    if (projectId === 'z-core') {
      codeFilename = 'app.py (FastAPI & Ephemeral WebSocket Relay)';
      archDiagram = `
      <div style="background: var(--bg-tertiary); padding: 1.1rem; border-radius: var(--radius-md); font-family: var(--font-mono); font-size: 0.76rem; line-height: 1.45; border: 1px solid var(--bg-glass-border); margin: 1rem 0; overflow-x: auto; -webkit-overflow-scrolling: touch; white-space: pre;">
<strong style="color: var(--accent-cyan);">[Zero-Knowledge Cryptographic Architecture]</strong>

[Client Browser] ──(AES-256 Encrypted Payload)──► [FastAPI RAM Relay Node]
        │ (Key in URL Fragment #key)                          │ (Zero DB / Zero Disk Writes)
        ▼                                                     ▼
[Local WebCrypto SubtleAPI]                        [Ephemeral Broadcast Queue]
        │                                                     │
[Anti-Screenshot & Snip Blocker] ◄──(Instant RAM Purge)───────┘
      </div>`;

      codeSnippet = `# app.py - Z-Core: Zero-Knowledge Ephemeral Relay Server
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from typing import Dict, Set
import json

app = FastAPI(title="Z-Core Ephemeral Relay")

# Pure in-memory RAM relay - Zero database, zero disk writes, zero logs
ACTIVE_ROOMS: Dict[str, Set[WebSocket]] = {}

@app.websocket("/ws/{room_id}")
async def ephemeral_websocket_relay(websocket: WebSocket, room_id: str):
    await websocket.accept()
    if room_id not in ACTIVE_ROOMS:
        ACTIVE_ROOMS[room_id] = set()
    ACTIVE_ROOMS[room_id].add(websocket)
    
    try:
        while True:
            # Receive encrypted ciphertext (Server NEVER sees plaintext or AES-256 keys)
            encrypted_payload = await websocket.receive_text()
            data = json.loads(encrypted_payload)

            # Handle Emergency Panic-Room Nuke Command
            if data.get("action") == "NUKE_ROOM":
                for client in list(ACTIVE_ROOMS.get(room_id, [])):
                    await client.send_text(json.dumps({"action": "FORCE_WIPE_DOM"}))
                    await client.close()
                ACTIVE_ROOMS.pop(room_id, None)
                break

            # Broadcast encrypted ciphertext directly to active room peers
            for peer in list(ACTIVE_ROOMS.get(room_id, [])):
                if peer != websocket:
                    await peer.send_text(encrypted_payload)
    except WebSocketDisconnect:
        ACTIVE_ROOMS[room_id].discard(websocket)
        if not ACTIVE_ROOMS[room_id]:
            ACTIVE_ROOMS.pop(room_id, None)`;
    } else if (projectId === 'stock-radar') {
      codeFilename = 'ai.py (Multi-Threaded Ticker Analytics Engine)';
      archDiagram = `
      <div style="background: var(--bg-tertiary); padding: 1.1rem; border-radius: var(--radius-md); font-family: var(--font-mono); font-size: 0.76rem; line-height: 1.45; border: 1px solid var(--bg-glass-border); margin: 1rem 0; overflow-x: auto; -webkit-overflow-scrolling: touch; white-space: pre;">
<strong style="color: var(--accent-cyan);">[StockRadar Telemetry Pipeline]</strong>

[Financial RSS & News Streams] ──► [Multi-Threaded Worker Pool]
                                                 │
[Yahoo/Market Data Feeds]       ──► [Sentiment & Momentum Analyzer]
                                                 │
[Client Dashboard (PWA)]        ◄── [Cached JSON Telemetry Feed]
      </div>`;

      codeSnippet = `# ai.py - StockRadar Multi-Threaded Financial Telemetry Pipeline
import concurrent.futures
import urllib.request
import json
import xml.etree.ElementTree as ET

class StockRadarEngine:
    def __init__(self, tickers=None):
        self.tickers = tickers or ["AAPL", "NVDA", "MSFT", "GOOGL", "TSLA"]
        self.cache = {}

    def fetch_market_news(self, ticker):
        """Fetches real-time financial RSS headlines and parses market sentiment."""
        url = f"https://finance.yahoo.com/rss/headline?s={ticker}"
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=5) as response:
                root = ET.fromstring(response.read())
                items = []
                for item in root.findall('.//item')[:5]:
                    items.append({
                        "title": item.find('title').text,
                        "link": item.find('link').text,
                        "pubDate": item.find('pubDate').text
                    })
                return {"ticker": ticker, "headlines": items, "status": "OK"}
        except Exception as e:
            return {"ticker": ticker, "error": str(e), "status": "FAIL"}

    def run_parallel_analysis(self):
        """Executes concurrent non-blocking ticker telemetry aggregation."""
        with concurrent.futures.ThreadPoolExecutor(max_workers=8) as executor:
            results = list(executor.map(self.fetch_market_news, self.tickers))
        return results`;
    } else if (projectId === 'agro-cycle') {
      codeFilename = 'agro_yield_engine.py';
      archDiagram = `
      <div style="background: var(--bg-tertiary); padding: 1.1rem; border-radius: var(--radius-md); font-family: var(--font-mono); font-size: 0.76rem; line-height: 1.45; border: 1px solid var(--bg-glass-border); margin: 1rem 0; overflow-x: auto; -webkit-overflow-scrolling: touch; white-space: pre;">
<strong style="color: var(--accent-cyan);">[Data Pipeline & Model Architecture]</strong>

[Soil N-P-K Sensors / Inputs] ──► [Feature Normalization Matrix]
                                              │
[Weather API + Historical Yields]  ──► [ML Regressor Engine]
                                              │
[Plant Leaf Image Upload (Future)] ──► [CNN Feature Extractor] ──► [Soil Health & Yield Score]
      </div>`;
      
      codeSnippet = `# agro_yield_engine.py - Machine Learning Pipeline for Soil & Yield Prediction
import numpy as np
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.preprocessing import StandardScaler

class AgroYieldPredictor:
    def __init__(self):
        self.scaler = StandardScaler()
        self.model = GradientBoostingRegressor(n_estimators=160, learning_rate=0.08, max_depth=4, random_state=42)

    def compute_soil_health_index(self, n, p, k, moisture, temp):
        """Calculates normalized agronomic health coefficient (0-100%)."""
        base_score = 100.0
        base_score -= abs(85 - n) * 0.40     # Optimal N: 70-100 mg/kg
        base_score -= abs(55 - p) * 0.45     # Optimal P: 40-70 mg/kg
        base_score -= abs(60 - k) * 0.40     # Optimal K: 40-80 mg/kg
        base_score -= abs(70 - moisture) * 0.60 # Optimal Moisture: 60-80%
        base_score -= abs(26 - temp) * 1.20   # Optimal Temp: 22-30°C
        return max(25, min(99, round(base_score, 1)))

    def predict_yield_and_recommendation(self, n, p, k, moisture, temp):
        health = self.compute_soil_health_index(n, p, k, moisture, temp)
        if temp > 28 and moisture > 70 and n > 70:
            rec_crop = "Rice (Paddy - Wet Cultivation)"
            base_yield = 4.5 + (health / 100.0) * 3.1
        elif temp > 30 and moisture < 50 and k > 60:
            rec_crop = "Cotton / Pearl Millet (Dryland)"
            base_yield = 2.1 + (health / 100.0) * 2.0
        elif temp < 24 and p > 60:
            rec_crop = "Maize / High-Phosphorus Legumes"
            base_yield = 3.8 + (health / 100.0) * 2.4
        else:
            rec_crop = "Wheat / Barley"
            base_yield = 3.2 + (health / 100.0) * 2.6

        return {
            "soil_health_score": health,
            "recommended_crop": rec_crop,
            "estimated_yield_tons_per_ha": round(base_yield, 2)
        }`;
    } else if (projectId === 'gm-league') {
      codeFilename = 'gm_live_relay_server.py';
      archDiagram = `
      <div style="background: var(--bg-tertiary); padding: 1.1rem; border-radius: var(--radius-md); font-family: var(--font-mono); font-size: 0.76rem; line-height: 1.45; border: 1px solid var(--bg-glass-border); margin: 1rem 0; overflow-x: auto; -webkit-overflow-scrolling: touch; white-space: pre;">
<strong style="color: var(--accent-cyan);">[Live Score Streaming Architecture]</strong>

[Scorer Web Console] ──► [Python Async WebSocket Relay] ──► [Campus LAN]
                                        │
                          [Virtual Machine Node]
                                        │ (Port Forwarding)
                          [Global Client Real-Time Feed]
      </div>`;

      codeSnippet = `# gm_live_relay_server.py - Ultra Low Latency Sports Score Broadcast
import asyncio
import json
import websockets

CONNECTED_CLIENTS = set()
MATCH_STATE = {
    "match_id": "GM-S2-FINAL",
    "batting_team": "Phoenix Strikers",
    "bowling_team": "Titan Warriors",
    "runs": 164,
    "wickets": 4,
    "overs": 17.3,
    "recent_events": ["4", "1", "W", "6", "2"]
}

async def match_stream_handler(websocket, path):
    CONNECTED_CLIENTS.add(websocket)
    try:
        await websocket.send(json.dumps({"event": "SYNC_STATE", "payload": MATCH_STATE}))
        async for raw_message in websocket:
            packet = json.loads(raw_message)
            if packet.get("action") == "SCORER_EVENT":
                event_type = packet.get("event_type")
                if event_type == "RUN":
                    MATCH_STATE["runs"] += packet.get("value", 1)
                elif event_type == "WICKET":
                    MATCH_STATE["wickets"] += 1
                elif event_type == "BOUNDARY":
                    MATCH_STATE["runs"] += packet.get("value", 4)
                
                broadcast_packet = json.dumps({"event": "LIVE_SCORE_UPDATE", "payload": MATCH_STATE})
                await asyncio.gather(*[c.send(broadcast_packet) for c in CONNECTED_CLIENTS if c.open])
    finally:
        CONNECTED_CLIENTS.remove(websocket)

server = websockets.serve(match_stream_handler, "0.0.0.0", 8765)`;
    } else if (projectId === 'onepromise-group') {
      codeFilename = 'main.js (Theme & Lead-Gen Modal System)';
      archDiagram = `
      <div style="background: var(--bg-tertiary); padding: 1.1rem; border-radius: var(--radius-md); font-family: var(--font-mono); font-size: 0.76rem; line-height: 1.45; border: 1px solid var(--bg-glass-border); margin: 1rem 0; overflow-x: auto; -webkit-overflow-scrolling: touch; white-space: pre;">
<strong style="color: var(--accent-cyan);">[One Promise Group Front-End Architecture]</strong>

[Interactive Property Showcase] ──► [Theme Toggle State Machine]
              │                                      │
[Lead Generation Widget]        ──► [RERA Compliance Metadata Layer]
      </div>`;

      codeSnippet = `// main.js - Modular Theme & Interactive Lead Generation Controller
class RealEstateApp {
  constructor() {
    this.themeKey = 'opg_theme_pref';
    this.initTheme();
    this.initLeadGenTrigger();
  }

  initTheme() {
    const saved = localStorage.getItem(this.themeKey) || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
  }

  toggleTheme() {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(this.themeKey, next);
  }

  initLeadGenTrigger() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 600 && !sessionStorage.getItem('lead_prompt_shown')) {
        this.openFloatingInquiry();
        sessionStorage.setItem('lead_prompt_shown', 'true');
      }
    });
  }
}`;
    } else if (projectId === 'driving-school') {
      codeFilename = 'app.js (Course Architecture & WhatsApp Routing)';
      archDiagram = `
      <div style="background: var(--bg-tertiary); padding: 1.1rem; border-radius: var(--radius-md); font-family: var(--font-mono); font-size: 0.76rem; line-height: 1.45; border: 1px solid var(--bg-glass-border); margin: 1rem 0; overflow-x: auto; -webkit-overflow-scrolling: touch; white-space: pre;">
<strong style="color: var(--accent-cyan);">[Murthy Driving School IA & Communications]</strong>

[3-Tier Course Matrix] ──► [Interactive Location Map Embed]
          │                                  │
[Student Reviews]      ──► [Direct WhatsApp Click-to-Chat Router]
      </div>`;

      codeSnippet = `// app.js - Tiered Course Selector & Direct WhatsApp Lead Router
function initiateCourseBooking(tierName, durationDays, feeAmount) {
  const message = encodeURIComponent(
    \`Hello Murthy Driving School! I would like to enroll in the \${tierName} course (\${durationDays} Days / ₹\${feeAmount}).\`
  );
  window.open(\`https://wa.me/918088982434?text=\${message}\`, '_blank');
}`;
    } else {
      codeFilename = 'store_sync_engine.js';
      archDiagram = `
      <div style="background: var(--bg-tertiary); padding: 1.1rem; border-radius: var(--radius-md); font-family: var(--font-mono); font-size: 0.76rem; line-height: 1.45; border: 1px solid var(--bg-glass-border); margin: 1rem 0; overflow-x: auto; -webkit-overflow-scrolling: touch; white-space: pre;">
<strong style="color: var(--accent-cyan);">[Zero-Dependency Cross-Tab Sync]</strong>

[Tab 1: Customer Storefront] ──(BroadcastChannel API)──► [Tab 2: Store Admin Console]
              │                                                     │
[FileReader API (Photo Attachments)] ──► [LocalStorage State] ◄── [Order Status Engine]
      </div>`;

      codeSnippet = `// store_sync_engine.js - Zero-Dependency Cross-Tab State Synchronization
class CrossTabStoreSync {
  constructor(channelName = 'ashish_ecommerce_sync') {
    this.channel = new BroadcastChannel(channelName);
    this.storageKey = 'ashish_portfolio_orders';
    this.listeners = [];
    
    this.channel.onmessage = (event) => {
      const { type, payload } = event.data;
      if (type === 'ORDER_CREATED') {
        this.notifyListeners(payload);
      }
    };
  }

  dispatchOrder(orderData) {
    const existingOrders = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    existingOrders.unshift(orderData);
    localStorage.setItem(this.storageKey, JSON.stringify(existingOrders));

    this.channel.postMessage({
      type: 'ORDER_CREATED',
      payload: orderData,
      timestamp: Date.now()
    });
  }

  onOrderReceived(callback) {
    this.listeners.push(callback);
  }

  notifyListeners(order) {
    this.listeners.forEach(cb => cb(order));
  }
}`;
    }

    const githubBtnHtml = project.githubUrl ? `
      <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 4px;"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
        <span>GitHub Repo</span>
      </a>
    ` : '';

    const simBtnHtml = simTabId ? `
      <button onclick="document.getElementById('details-modal').classList.remove('active'); document.body.style.overflow=''; window.switchToSimTab('${simTabId}');" class="btn btn-primary btn-sm">
        ⚡ Launch Live Simulator
      </button>
    ` : '';

    const html = `
      <div style="margin-bottom: 1.25rem;">
        <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.35rem; flex-wrap: wrap;">
          <span class="badge badge-cyan">${project.categoryLabel}</span>
          <span style="font-size: 0.8rem; color: var(--text-muted);">${project.duration}</span>
        </div>
        <h2 style="margin: 0.25rem 0 0.25rem; font-size: 1.65rem;">${project.title}</h2>
      </div>

      <!-- Modal Inner Tabs -->
      <div class="modal-nav-tabs">
        <button class="modal-tab-btn active" onclick="window.switchModalTab('arch')">
          <span>📐 Architecture Flow</span>
        </button>
        <button class="modal-tab-btn" onclick="window.switchModalTab('code')">
          <span>💻 Production Code Preview</span>
        </button>
        <button class="modal-tab-btn" onclick="window.switchModalTab('features')">
          <span>✨ Features &amp; Stack</span>
        </button>
      </div>

      <!-- Tab 1: Architecture -->
      <div id="modal-tab-arch" class="modal-tab-pane active">
        <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 0.75rem; font-size: 0.95rem;">
          ${project.fullDesc}
        </p>
        ${archDiagram}
      </div>

      <!-- Tab 2: Code Snippet -->
      <div id="modal-tab-code" class="modal-tab-pane">
        <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 0.5rem;">
          Production-grade source implementation showcasing data structures, networking, and asynchronous logic:
        </p>
        <div class="modal-code-box">
          <div class="modal-code-header">
            <div class="modal-code-title">
              <span>📄</span>
              <span>${codeFilename}</span>
            </div>
            <button class="modal-copy-btn" id="modal-copy-code-btn" onclick="window.copyModalCode()">
              <span>📋</span>
              <span id="modal-copy-text">Copy Code</span>
            </button>
          </div>
          <pre class="modal-code-content" id="modal-code-text">${codeSnippet}</pre>
        </div>
      </div>

      <!-- Tab 3: Features & Technologies -->
      <div id="modal-tab-features" class="modal-tab-pane">
        <h4 style="margin: 0.75rem 0 0.5rem; color: var(--text-primary); font-size: 1rem;">Core Engineering Highlights:</h4>
        <ul style="display: flex; flex-direction: column; gap: 0.6rem; margin-bottom: 1.25rem;">
          ${project.features.map(f => `<li style="display: flex; align-items: center; gap: 0.5rem; color: var(--text-secondary); font-size: 0.92rem;"><span style="color: var(--accent-cyan); font-weight: 700;">✓</span> ${f}</li>`).join('')}
        </ul>

        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary); font-size: 1rem;">Technology Stack:</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
          ${project.technologies.map(t => `<span class="badge badge-violet">${t}</span>`).join('')}
        </div>
      </div>

      <div style="display: flex; gap: 0.75rem; justify-content: space-between; align-items: center; margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid var(--bg-glass-border); flex-wrap: wrap;">
        <button onclick="document.getElementById('details-modal').classList.remove('active'); document.body.style.overflow='';" class="btn btn-secondary btn-sm">
          Close
        </button>
        <div style="display: flex; gap: 0.6rem; align-items: center; flex-wrap: wrap;">
          ${githubBtnHtml}
          ${simBtnHtml}
        </div>
      </div>
    `;

    openModal(html);
  };

  // Helper to switch tabs inside project modal
  window.switchModalTab = function (tabKey) {
    const tabBtns = document.querySelectorAll('.modal-tab-btn');
    const panes = document.querySelectorAll('.modal-tab-pane');

    tabBtns.forEach(btn => {
      btn.classList.remove('active');
    });

    panes.forEach(p => {
      p.classList.remove('active');
    });

    const activePane = document.getElementById(`modal-tab-${tabKey}`);
    if (activePane) activePane.classList.add('active');

    // Set matching button active
    const btnIndex = tabKey === 'arch' ? 0 : tabKey === 'code' ? 1 : 2;
    if (tabBtns[btnIndex]) tabBtns[btnIndex].classList.add('active');
  };

  // Copy code from modal
  window.copyModalCode = function () {
    const codeEl = document.getElementById('modal-code-text');
    const copyText = document.getElementById('modal-copy-text');
    if (!codeEl) return;

    navigator.clipboard.writeText(codeEl.textContent).then(() => {
      if (copyText) copyText.textContent = 'Copied!';
      if (window.showToast) {
        window.showToast('Code snippet copied to clipboard!', 'success');
      }
      setTimeout(() => {
        if (copyText) copyText.textContent = 'Copy Code';
      }, 2500);
    }).catch(() => {
      if (copyText) copyText.textContent = 'Copied!';
      setTimeout(() => {
        if (copyText) copyText.textContent = 'Copy Code';
      }, 2500);
    });
  };

  // Certificate Viewer Modal
  window.openCertModal = function (certId) {
    const cert = window.portfolioData.certifications.find(c => c.id === certId);
    if (!cert) return;

    const html = `
      <div style="text-align: center; margin-bottom: 1.5rem;">
        <div style="width: 58px; height: 58px; border-radius: 50%; background: rgba(0, 242, 254, 0.1); border: 2px solid var(--accent-cyan); display: flex; align-items: center; justify-content: center; margin: 0 auto 0.75rem; color: var(--accent-cyan); font-size: 1.5rem;">
          📜
        </div>
        <span class="badge badge-cyan">${cert.issuer}</span>
        <h2 style="margin: 0.6rem 0 0.25rem; font-size: 1.6rem;">${cert.title}</h2>
        <div style="color: var(--text-muted); font-size: 0.85rem;">Issued: ${cert.date} • Verified Credential</div>
      </div>

      <div style="background: var(--bg-surface); border: 1px solid var(--bg-glass-border); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.5rem;">
        <h4 style="margin-bottom: 0.5rem; color: var(--text-primary);">Course Overview & Scope:</h4>
        <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">
          ${cert.summary}
        </p>
      </div>

      <h4 style="margin-bottom: 0.75rem; color: var(--text-primary);">Core Competencies Mastered:</h4>
      <ul style="display: flex; flex-direction: column; gap: 0.6rem; margin-bottom: 1.5rem;">
        ${cert.keyLearnings.map(k => `
          <li style="display: flex; align-items: flex-start; gap: 0.6rem; color: var(--text-secondary); font-size: 0.9rem;">
            <span style="color: var(--accent-emerald); font-weight: 700;">✦</span> ${k}
          </li>
        `).join('')}
      </ul>

      <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 1rem; border-top: 1px solid var(--bg-glass-border);">
        <span style="color: var(--text-muted); font-size: 0.8rem;">Credential Verification ID: INF-SB-${certId.toUpperCase()}</span>
        <button onclick="document.getElementById('details-modal').classList.remove('active'); document.body.style.overflow='';" class="btn btn-secondary btn-sm">Close</button>
      </div>
    `;

    openModal(html);
  };
})();


// --- Sourced from js/simulators.js ---
/**
 * Interactive Project Simulators for Ashish Rout's Portfolio
 * Demonstrates live logic for Agro Cycle ML, GM League Scoreboard, and E-Commerce Sync
 */

(function () {
  // --------------------------------------------------------------------------
  // Simulator Tab Switching Logic
  // --------------------------------------------------------------------------
  const tabBtns = document.querySelectorAll('.playground-tab-btn');
  const panes = document.querySelectorAll('.playground-pane');

  function switchSimTab(targetTab) {
    const allBtns = document.querySelectorAll('.playground-tab-btn');
    const allPanes = document.querySelectorAll('.playground-pane');

    allBtns.forEach(b => {
      if (b.getAttribute('data-tab') === targetTab) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });

    allPanes.forEach(p => {
      if (p.id === `sim-pane-${targetTab}`) {
        p.classList.add('active');
      } else {
        p.classList.remove('active');
      }
    });
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      switchSimTab(targetTab);
    });
  });

  window.switchToSimTab = function (tabId) {
    switchSimTab(tabId);
    const playgroundSec = document.getElementById('playground');
    if (playgroundSec) {
      playgroundSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // --------------------------------------------------------------------------
  // Simulator 1: Agro Cycle Soil & Yield Prediction Engine
  // --------------------------------------------------------------------------
  const sliderN = document.getElementById('slider-n');
  const sliderP = document.getElementById('slider-p');
  const sliderK = document.getElementById('slider-k');
  const sliderMoist = document.getElementById('slider-moist');
  const sliderTemp = document.getElementById('slider-temp');

  const valN = document.getElementById('val-n');
  const valP = document.getElementById('val-p');
  const valK = document.getElementById('val-k');
  const valMoist = document.getElementById('val-moist');
  const valTemp = document.getElementById('val-temp');

  const soilHealthVal = document.getElementById('sim-health-val');
  const yieldVal = document.getElementById('sim-yield-val');
  const cropRecVal = document.getElementById('sim-crop-rec');
  const advisoryNote = document.getElementById('sim-advisory-note');

  function updateAgroCycle() {
    if (!sliderN || !sliderP || !sliderK || !sliderMoist || !sliderTemp) return;

    const n = parseInt(sliderN.value, 10);
    const p = parseInt(sliderP.value, 10);
    const k = parseInt(sliderK.value, 10);
    const moist = parseInt(sliderMoist.value, 10);
    const temp = parseInt(sliderTemp.value, 10);

    // Update labels
    if (valN) valN.textContent = `${n} mg/kg`;
    if (valP) valP.textContent = `${p} mg/kg`;
    if (valK) valK.textContent = `${k} mg/kg`;
    if (valMoist) valMoist.textContent = `${moist}%`;
    if (valTemp) valTemp.textContent = `${temp}°C`;

    // Simulated ML heuristic algorithm
    // Optimal N: 70-100, P: 40-70, K: 40-80, Moisture: 60-80%, Temp: 22-30°C
    let score = 100;
    score -= Math.abs(85 - n) * 0.4;
    score -= Math.abs(55 - p) * 0.45;
    score -= Math.abs(60 - k) * 0.4;
    score -= Math.abs(70 - moist) * 0.6;
    score -= Math.abs(26 - temp) * 1.2;
    score = Math.max(25, Math.min(99, Math.round(score)));

    // Calculate crop recommendation and yield
    let crop = "Wheat / Barley";
    let estYield = (3.2 + (score / 100) * 2.6).toFixed(1);
    let advice = "Balanced nutrient profile. Maintain current irrigation cycle.";

    if (temp > 28 && moist > 70 && n > 70) {
      crop = "Rice (Paddy)";
      estYield = (4.5 + (score / 100) * 3.1).toFixed(1);
      advice = "Optimal conditions for wet-cultivation. Nitrogen saturation is ideal.";
    } else if (temp > 30 && moist < 50 && k > 60) {
      crop = "Cotton / Millets";
      estYield = (2.1 + (score / 100) * 2.0).toFixed(1);
      advice = "Dryland soil condition detected. Potassium supports drought resilience.";
    } else if (temp < 24 && p > 60) {
      crop = "Maize / Legumes";
      estYield = (3.8 + (score / 100) * 2.4).toFixed(1);
      advice = "High phosphorus availability supports root elongation in temperate climate.";
    } else if (score < 50) {
      advice = "Warning: Sub-optimal soil metrics detected. Recommend compost or bio-fertilizer.";
    }

    if (soilHealthVal) soilHealthVal.textContent = `${score}%`;
    if (yieldVal) yieldVal.textContent = `${estYield} T/Ha`;
    if (cropRecVal) cropRecVal.textContent = crop;
    if (advisoryNote) advisoryNote.textContent = advice;
  }

  [sliderN, sliderP, sliderK, sliderMoist, sliderTemp].forEach(slider => {
    if (slider) {
      slider.addEventListener('input', updateAgroCycle);
    }
  });

  // Initial calculation
  updateAgroCycle();

  // --------------------------------------------------------------------------
  // Simulator 2: GM League S2 Real-Time Score Engine
  // --------------------------------------------------------------------------
  let matchInterval = null;
  let runs = 142;
  let wickets = 3;
  let balls = 86; // 14.2 overs
  const target = 178;
  const maxBalls = 120; // 20 overs

  const scoreDisplay = document.getElementById('gm-score-display');
  const oversDisplay = document.getElementById('gm-overs-display');
  const crrDisplay = document.getElementById('gm-crr-display');
  const rrrDisplay = document.getElementById('gm-rrr-display');
  const commentaryFeed = document.getElementById('gm-commentary-feed');
  const btnStartMatch = document.getElementById('gm-btn-start');
  const btnPauseMatch = document.getElementById('gm-btn-pause');
  const btnBoundary = document.getElementById('gm-btn-boundary');
  const btnWicket = document.getElementById('gm-btn-wicket');
  const btnResetMatch = document.getElementById('gm-btn-reset');
  const liveStatusBadge = document.getElementById('gm-live-badge');

  function renderGMScore() {
    if (!scoreDisplay) return;
    const completedOvers = Math.floor(balls / 6);
    const remBalls = balls % 6;
    const oversFormatted = `${completedOvers}.${remBalls}`;

    scoreDisplay.textContent = `${runs}/${wickets}`;
    if (oversDisplay) oversDisplay.textContent = `${oversFormatted} Overs`;

    const totalOversDec = completedOvers + remBalls / 6;
    const crr = totalOversDec > 0 ? (runs / totalOversDec).toFixed(2) : '0.00';
    if (crrDisplay) crrDisplay.textContent = `CRR: ${crr}`;

    const remRuns = target - runs;
    const remBallsTotal = maxBalls - balls;
    const rrr = remBallsTotal > 0 && remRuns > 0 ? ((remRuns / remBallsTotal) * 6).toFixed(2) : '0.00';
    if (rrrDisplay) {
      if (remRuns <= 0) {
        rrrDisplay.textContent = "Target Achieved! 🎉";
      } else {
        rrrDisplay.textContent = `Need ${remRuns} off ${remBallsTotal}b (RRR: ${rrr})`;
      }
    }
  }

  function addCommentary(text, highlight = false) {
    if (!commentaryFeed) return;
    const completedOvers = Math.floor(balls / 6);
    const remBalls = balls % 6;
    const overStamp = `${completedOvers}.${remBalls}`;

    const line = document.createElement('div');
    line.className = 'commentary-item';
    line.innerHTML = `<span style="color: var(--accent-cyan); font-weight: 600;">[${overStamp} ov]</span> ${highlight ? `<strong style="color: var(--accent-amber);">${text}</strong>` : text}`;
    
    commentaryFeed.prepend(line);
    if (commentaryFeed.children.length > 20) {
      commentaryFeed.removeChild(commentaryFeed.lastChild);
    }
  }

  function simulateNextBall() {
    if (balls >= maxBalls || wickets >= 10 || runs >= target) {
      clearInterval(matchInterval);
      matchInterval = null;
      if (liveStatusBadge) liveStatusBadge.innerHTML = '<span class="badge badge-emerald">MATCH COMPLETED</span>';
      addCommentary(`🏁 Match ended. Final Score: ${runs}/${wickets} in ${Math.floor(balls/6)}.${balls%6} ov.`, true);
      return;
    }

    balls++;
    const outcomes = [0, 1, 1, 2, 4, 1, 6, 0, 1, 'W'];
    const roll = outcomes[Math.floor(Math.random() * outcomes.length)];

    if (roll === 'W') {
      wickets++;
      addCommentary(`OUT! Clean bowled! Critical wicket falls for the batting side!`, true);
    } else {
      runs += roll;
      if (roll === 4) {
        addCommentary(`FOUR! Beautiful lofted drive through cover!`, true);
      } else if (roll === 6) {
        addCommentary(`SIX! Towering maximum deep into the stands!`, true);
      } else if (roll === 0) {
        addCommentary(`Dot ball. Tight line on off-stump, defended back to bowler.`);
      } else {
        addCommentary(`Pushed into the gap for ${roll} run(s).`);
      }
    }

    renderGMScore();
  }

  if (btnStartMatch) {
    btnStartMatch.addEventListener('click', () => {
      if (!matchInterval) {
        matchInterval = setInterval(simulateNextBall, 1500);
        if (liveStatusBadge) liveStatusBadge.innerHTML = '<span class="badge badge-emerald"><span class="pulse-dot"></span> LIVE BROADCAST</span>';
        addCommentary('▶ Live broadcast stream resumed via VM socket sync.');
      }
    });
  }

  if (btnPauseMatch) {
    btnPauseMatch.addEventListener('click', () => {
      if (matchInterval) {
        clearInterval(matchInterval);
        matchInterval = null;
        if (liveStatusBadge) liveStatusBadge.innerHTML = '<span class="badge badge-amber">PAUSED</span>';
        addCommentary('⏸ Match simulation paused.');
      }
    });
  }

  if (btnBoundary) {
    btnBoundary.addEventListener('click', () => {
      if (balls < maxBalls && wickets < 10) {
        balls++;
        runs += 4;
        addCommentary(`FOUR! Driven effortlessly over extra cover boundary!`, true);
        renderGMScore();
      }
    });
  }

  if (btnWicket) {
    btnWicket.addEventListener('click', () => {
      if (balls < maxBalls && wickets < 9) {
        balls++;
        wickets++;
        addCommentary(`OUT! Caught behind! Superb delivery takes the outside edge!`, true);
        renderGMScore();
      }
    });
  }

  if (btnResetMatch) {
    btnResetMatch.addEventListener('click', () => {
      clearInterval(matchInterval);
      matchInterval = null;
      runs = 142;
      wickets = 3;
      balls = 86;
      if (commentaryFeed) commentaryFeed.innerHTML = '<div class="commentary-item" style="color: var(--text-muted);">Match initialized. Ready to broadcast GM League S2 real-time data.</div>';
      if (liveStatusBadge) liveStatusBadge.innerHTML = '<span class="badge badge-cyan"><span class="pulse-dot"></span> READY TO STREAM</span>';
      renderGMScore();
    });
  }

  renderGMScore();

  // --------------------------------------------------------------------------
  // Simulator 3: Zero-Dependency E-Commerce Sync Simulation
  // --------------------------------------------------------------------------
  let currentOrderStage = 0;
  const orderStages = [
    { title: "Order Placed", status: "Received on Tab A (Storefront)", color: "cyan" },
    { title: "Processing", status: "BroadcastChannel notified Tab B (Admin Ops)", color: "violet" },
    { title: "Shipped", status: "Courier package dispatched & tracking assigned", color: "amber" },
    { title: "Delivered", status: "Completed with customer photo review attached", color: "emerald" }
  ];

  const btnAdvanceOrder = document.getElementById('ecom-btn-advance');
  const btnResetOrder = document.getElementById('ecom-btn-reset');
  const ecomSyncLog = document.getElementById('ecom-sync-log');
  const orderStepNodes = document.querySelectorAll('.step-node');
  const ecomStatusText = document.getElementById('ecom-status-text');

  function renderEcomStepper() {
    if (!orderStepNodes.length) return;

    orderStepNodes.forEach((node, index) => {
      node.classList.remove('completed', 'active');
      if (index < currentOrderStage) {
        node.classList.add('completed');
      } else if (index === currentOrderStage) {
        node.classList.add('active');
      }
    });

    const curr = orderStages[currentOrderStage];
    if (ecomStatusText && curr) {
      ecomStatusText.innerHTML = `<strong>${curr.title}</strong>: ${curr.status}`;
    }
  }

  function logEcomEvent(channel, eventMsg) {
    if (!ecomSyncLog) return;
    const item = document.createElement('div');
    item.style.fontSize = "0.82rem";
    item.style.fontFamily = "var(--font-mono)";
    item.style.padding = "0.25rem 0";
    item.innerHTML = `<span style="color: var(--accent-cyan); font-weight:600;">[${channel}]</span> ${eventMsg}`;
    ecomSyncLog.prepend(item);

    if (ecomSyncLog.children.length > 15) {
      ecomSyncLog.removeChild(ecomSyncLog.lastChild);
    }
  }

  if (btnAdvanceOrder) {
    btnAdvanceOrder.addEventListener('click', () => {
      if (currentOrderStage < orderStages.length - 1) {
        currentOrderStage++;
        const curr = orderStages[currentOrderStage];
        logEcomEvent('BroadcastChannel:orders', `postMessage({ id: 'ORD-9842', status: '${curr.title}' })`);
        logEcomEvent('LocalStorage', `setItem('order_state_9842', '${curr.title}')`);
        renderEcomStepper();
      } else {
        logEcomEvent('System', 'Order is already in final Delivered state.');
      }
    });
  }

  if (btnResetOrder) {
    btnResetOrder.addEventListener('click', () => {
      currentOrderStage = 0;
      if (ecomSyncLog) {
        ecomSyncLog.innerHTML = '<div style="color: var(--text-muted); font-size: 0.8rem;">[BroadcastChannel:ready] Listening on channel "ecom_store_ops"...</div>';
      }
      logEcomEvent('BroadcastChannel:orders', 'postMessage({ id: ' + "'ORD-9842'" + ', status: ' + "'Order Placed'" + ' })');
      renderEcomStepper();
    });
  }

  renderEcomStepper();
})();


// --- Sourced from js/canvas.js ---
/**
 * Neural Network / Particle Canvas Background
 * Interactive dynamic canvas with mouse proximity interaction
 */

(function () {
  const canvas = document.getElementById('neural-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let width, height;
  let particles = [];
  const particleCount = 65;
  const maxDistance = 140;
  const mouseRadius = 160;

  const mouse = {
    x: null,
    y: null,
    radius: mouseRadius
  };

  function isDarkTheme() {
    return document.documentElement.getAttribute('data-theme') !== 'light';
  }

  function resize() {
    const parent = canvas.parentElement;
    width = canvas.width = parent.offsetWidth;
    height = canvas.height = parent.offsetHeight;
    initParticles();
  }

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.9;
      this.vy = (Math.random() - 0.5) * 0.9;
      this.radius = Math.random() * 2 + 1.5;
      this.baseRadius = this.radius;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Bounce on edges
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse interactivity
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          this.x += Math.cos(angle) * force * 1.5;
          this.y += Math.sin(angle) * force * 1.5;
          this.radius = this.baseRadius * 1.8;
        } else {
          this.radius = this.baseRadius;
        }
      }
    }

    draw() {
      const dark = isDarkTheme();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = dark ? 'rgba(0, 242, 254, 0.8)' : 'rgba(2, 132, 199, 0.8)';
      ctx.shadowBlur = dark ? 8 : 4;
      ctx.shadowColor = dark ? '#00f2fe' : '#0284c7';
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  function initParticles() {
    particles = [];
    const count = width < 768 ? Math.floor(particleCount * 0.5) : particleCount;
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }

  function drawLines() {
    const dark = isDarkTheme();
    const lineColor = dark ? '0, 242, 254' : '2, 132, 199';

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const opacity = 1 - dist / maxDistance;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${lineColor}, ${opacity * 0.25})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Connect to mouse cursor
      if (mouse.x !== null && mouse.y !== null) {
        const dx = particles[i].x - mouse.x;
        const dy = particles[i].y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const opacity = 1 - dist / mouse.radius;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(139, 92, 246, ${opacity * 0.5})`;
          ctx.lineWidth = 1.4;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    drawLines();
    animationFrameId = requestAnimationFrame(animate);
  }

  window.addEventListener('resize', () => {
    resize();
  });

  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    if (
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom
    ) {
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    } else {
      mouse.x = null;
      mouse.y = null;
    }
  });

  function handleTouch(e) {
    if (e.touches && e.touches.length > 0) {
      const touch = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      if (
        touch.clientX >= rect.left &&
        touch.clientX <= rect.right &&
        touch.clientY >= rect.top &&
        touch.clientY <= rect.bottom
      ) {
        mouse.x = touch.clientX - rect.left;
        mouse.y = touch.clientY - rect.top;
      }
    }
  }

  window.addEventListener('touchstart', handleTouch, { passive: true });
  window.addEventListener('touchmove', handleTouch, { passive: true });
  window.addEventListener('touchend', () => {
    mouse.x = null;
    mouse.y = null;
  });

  window.addEventListener('orientationchange', () => {
    setTimeout(resize, 120);
  });

  // Init
  resize();
  animate();
})();


// --- Sourced from js/terminal.js ---
/**
 * Developer CLI Terminal & Command Palette (`Ctrl+K`)
 * Ashish Rout - Interactive Portfolio
 */

(function () {
  const terminalBackdrop = document.getElementById('terminal-modal');
  const terminalInput = document.getElementById('terminal-cmd-input');
  const terminalOutput = document.getElementById('terminal-output-container');
  const closeBtn = document.getElementById('terminal-close-btn');
  const openButtons = document.querySelectorAll('.trigger-terminal');

  if (!terminalBackdrop || !terminalInput) return;

  function openTerminal() {
    terminalBackdrop.classList.add('active');
    setTimeout(() => terminalInput.focus(), 100);
  }

  function closeTerminal() {
    terminalBackdrop.classList.remove('active');
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', openTerminal);
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeTerminal);
  }

  terminalBackdrop.addEventListener('click', (e) => {
    if (e.target === terminalBackdrop) {
      closeTerminal();
    }
  });

  // Global Ctrl+K shortcut
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (terminalBackdrop.classList.contains('active')) {
        closeTerminal();
      } else {
        openTerminal();
      }
    }
    if (e.key === 'Escape' && terminalBackdrop.classList.contains('active')) {
      closeTerminal();
    }
  });

  function printLine(htmlContent, isPrompt = false, cmd = '') {
    const line = document.createElement('div');
    line.className = 'terminal-line';
    if (isPrompt) {
      line.innerHTML = `<span class="terminal-prompt">ashish:~$</span> <span style="color: #fff;">${cmd}</span>`;
    } else {
      line.innerHTML = htmlContent;
    }
    terminalOutput.appendChild(line);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  const commands = {
    help: () => `
<div style="color: var(--accent-cyan); font-weight: 600; margin-bottom: 0.4rem;">🚀 Available Commands:</div>
<div style="display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.85rem;">
  <div><strong style="color: #38bdf8;">help</strong> — List all available commands</div>
  <div><strong style="color: #38bdf8;">bio / about</strong> — Summary of professional background</div>
  <div><strong style="color: #38bdf8;">skills</strong> — Technical & programming competencies</div>
  <div><strong style="color: #38bdf8;">projects</strong> — Flagship project overviews</div>
  <div><strong style="color: #38bdf8;">experience / exp</strong> — Commercial freelance impact</div>
  <div><strong style="color: #38bdf8;">education / edu</strong> — Academic degrees & CGPA</div>
  <div><strong style="color: #38bdf8;">certs</strong> — Infosys Springboard certifications</div>
  <div><strong style="color: #38bdf8;">nss</strong> — NSS National Integration Camp 2025</div>
  <div><strong style="color: #38bdf8;">contact</strong> — Direct email, phone, and WhatsApp</div>
  <div><strong style="color: #38bdf8;">theme</strong> — Toggle Dark / Light mode</div>
  <div><strong style="color: #38bdf8;">clear</strong> — Clear the terminal output</div>
</div>`,

    bio: () => `
<div>
  <strong style="color: var(--accent-cyan); font-size: 1rem;">ASHISH ROUT</strong> — AI & ML Engineer / Full-Stack Developer<br>
  📍 Bangalore, Karnataka | 🎓 UG CSE-AIML @ FET (CGPA: 8.0)<br>
  <p style="margin-top: 0.5rem; color: #94a3b8;">${window.portfolioData.personal.summary}</p>
</div>`,

    skills: () => `
<div>
  <div style="color: var(--accent-cyan); font-weight: 600;">💻 Core Technical Skills:</div>
  • <strong>Languages:</strong> Python, JavaScript (ES6+), SQL, Java, C<br>
  • <strong>Web & APIs:</strong> HTML5, CSS3 Keyframes, BroadcastChannel, LocalStorage, FileReader API<br>
  • <strong>AI & Systems:</strong> Machine Learning, CNNs, System Design, Networking & VM Port Forwarding<br>
  • <strong>Databases:</strong> Relational Modeling, ACID Transactions, SQL Views<br>
  • <strong>Languages Spoken:</strong> English, Hindi, Kannada
</div>`,

    projects: () => `
<div>
  <div style="color: var(--accent-cyan); font-weight: 600;">🚀 Flagship Projects & GitHub Repositories:</div>
  1. <strong>Z-Core</strong> [Security/Relay] — RAM-only zero-knowledge AES-256 ephemeral communications with PWA.<br>
     &nbsp;&nbsp;↳ <a href="https://github.com/ashishrout457/Z-Core" target="_blank" style="color: var(--accent-cyan); text-decoration: underline;">github.com/ashishrout457/Z-Core</a><br>
  2. <strong>StockRadar</strong> [AI/Finance] — Multi-threaded stock telemetry & financial RSS news analytics engine.<br>
     &nbsp;&nbsp;↳ <a href="https://github.com/ashishrout457/StockRadar" target="_blank" style="color: var(--accent-cyan); text-decoration: underline;">github.com/ashishrout457/StockRadar</a><br>
  3. <strong>Agro Cycle</strong> [AI/ML] — Crop yield & soil health predictions using environmental ML models.<br>
  4. <strong>GM League S2 Score App</strong> [Python/JS] — Real-time live match scoring deployed with VM port forwarding.<br>
  5. <strong>Zero-Dependency E-Commerce</strong> [Web APIs] — Cross-tab state sync using BroadcastChannel API.<br>
     &nbsp;&nbsp;↳ <a href="https://github.com/ashishrout457/E-Commerse-website" target="_blank" style="color: var(--accent-cyan); text-decoration: underline;">github.com/ashishrout457/E-Commerse-website</a><br>
  6. <strong>One Promise Group</strong> [Real Estate] — Modular commercial web app with theme toggle & lead-gen modals.<br>
     &nbsp;&nbsp;↳ <a href="https://github.com/ashishrout457/ONEPROMISE-GROUP" target="_blank" style="color: var(--accent-cyan); text-decoration: underline;">github.com/ashishrout457/ONEPROMISE-GROUP</a><br>
  7. <strong>Murthy Driving School</strong> [Commercial] — Responsive 3-tier course landing page with map & WhatsApp.<br>
     &nbsp;&nbsp;↳ <a href="https://github.com/ashishrout457/Driving-School" target="_blank" style="color: var(--accent-cyan); text-decoration: underline;">github.com/ashishrout457/Driving-School</a>
</div>`,

    experience: () => `
<div>
  <div style="color: var(--accent-cyan); font-weight: 600;">💼 Commercial Freelance Experience:</div>
  • <strong>Freelance Web Developer @ One Promise Group</strong> (Jan 2026 – Feb 2026)<br>
    - Modular HTML/CSS/JS real estate architecture, dark theme toggle, lead-gen floaters & RERA branding.<br>
  • <strong>Freelance Web Developer @ Murthy Driving School</strong> (Mar 2026)<br>
    - Responsive landing page, 3-tier course IA (Beginner/Inter/Adv), interactive map, WhatsApp integration.
</div>`,

    education: () => `
<div>
  <div style="color: var(--accent-cyan); font-weight: 600;">🎓 Education Milestones:</div>
  • <strong>UG CSE-AIML:</strong> FET (Sep 2023 – Present) — <span style="color: var(--accent-emerald);">CGPA: 8.0</span><br>
  • <strong>PUC / 12th Grade:</strong> Narayana E-Techno (2022 – 2023) — <span style="color: var(--accent-emerald);">Score: 70%</span><br>
  • <strong>SSLC / 10th Grade:</strong> Sharada Vidya Mandira (2020 – 2021) — <span style="color: var(--accent-emerald);">Score: 90.00%</span>
</div>`,

    certs: () => `
<div>
  <div style="color: var(--accent-cyan); font-weight: 600;">📜 Infosys Springboard Certifications:</div>
  1. <strong>Artificial Intelligence</strong> (Jan 2025) — ML principles, algorithms & predictive neural systems<br>
  2. <strong>SQL Case Study Workshop</strong> (Jan 2026) — Practical database querying & dataset analysis<br>
  3. <strong>SQL Transactions</strong> (Jul 2025) — ACID properties, COMMIT, ROLLBACK & state integrity<br>
  4. <strong>SQL Views</strong> (Jul 2025) — Virtual table management & database security abstraction
</div>`,

    nss: () => `
<div>
  <div style="color: var(--accent-violet); font-weight: 600;">🇮🇳 NSS National Integration Camp (NIC 2025):</div>
  • Location: Kuvempu University, Shivamogga, Karnataka (May 2025)<br>
  • Theme: <em>"Youth for Viksit Bharat"</em><br>
  • Represented as one of 200 state delegates across southern & western India for cultural harmony, leadership workshops, and community service.
</div>`,

    contact: () => `
<div>
  <div style="color: var(--accent-cyan); font-weight: 600;">📬 Direct Contact Details:</div>
  • <strong>GitHub:</strong> <a href="https://github.com/ashishrout457" target="_blank" style="color: var(--accent-cyan); text-decoration: underline;">github.com/ashishrout457</a><br>
  • <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ashish-rout-31b6b3298" target="_blank" style="color: #38bdf8; text-decoration: underline;">linkedin.com/in/ashish-rout-31b6b3298</a><br>
  • <strong>Email:</strong> <a href="mailto:ashish.rout457@gmail.com" style="color: var(--accent-cyan); text-decoration: underline;">ashish.rout457@gmail.com</a><br>
  • <strong>Phone / WhatsApp:</strong> <a href="https://wa.me/918088982434" target="_blank" style="color: var(--accent-emerald); text-decoration: underline;">+91 80889 82434</a><br>
  • <strong>Location:</strong> Bangalore, Karnataka, India
</div>`,

    theme: () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme_preference', next);
      return `Switched interface theme to: <strong style="color: var(--accent-cyan);">${next.toUpperCase()} MODE</strong>`;
    },

    clear: () => {
      terminalOutput.innerHTML = '';
      return '';
    },

    sudo: () => `<span style="color: var(--accent-rose);">Permission denied: Ashish holds root access to this portfolio! 😉</span>`
  };

  // Aliases
  commands.about = commands.bio;
  commands.exp = commands.experience;
  commands.edu = commands.education;
  commands.certifications = commands.certs;
  commands.camp = commands.nss;

  function executeCommand(rawInput) {
    const cmd = rawInput.trim().toLowerCase();
    if (!cmd) return;

    printLine('', true, rawInput);

    if (commands[cmd]) {
      const result = commands[cmd]();
      if (result) printLine(result);
    } else {
      printLine(`<span style="color: var(--accent-rose);">Command not recognized: "${rawInput}". Type <span style="color: var(--accent-cyan);">help</span> for available commands.</span>`);
    }
  }

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = terminalInput.value;
      terminalInput.value = '';
      executeCommand(val);
    }
  });

  // Quick Command Chips
  const chipButtons = document.querySelectorAll('.term-chip');
  chipButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      if (cmd) {
        executeCommand(cmd);
        terminalInput.focus();
      }
    });
  });
})();


// --- Sourced from js/main.js ---
/**
 * Main Application Orchestrator
 * Theme switcher, typing animations, scroll observers, filtering & navigation
 * Ashish Rout - Interactive Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // Theme Management (Dark & Light Mode)
  // --------------------------------------------------------------------------
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const savedTheme = localStorage.getItem('theme_preference') || 'dark';

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme_preference', theme);

    themeToggleBtns.forEach(btn => {
      const icon = btn.querySelector('.theme-icon');
      if (icon) {
        icon.textContent = theme === 'dark' ? '☀️' : '🌙';
      }
    });
  }

  setTheme(savedTheme);

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      if (window.showToast) {
        window.showToast(`Switched to ${newTheme === 'dark' ? 'Cyber Dark' : 'Clean Light'} Theme`, 'info');
      }
    });
  });

  // --------------------------------------------------------------------------
  // Dynamic Hero Role Typewriter Animation
  // --------------------------------------------------------------------------
  const typingElement = document.getElementById('hero-typing-text');
  const roles = window.portfolioData?.personal?.roles || [
    "AI & Machine Learning Engineer",
    "Full-Stack Web Developer",
    "Relational Database & SQL Analyst",
    "Python & Systems Specialist"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingDelay = 90;
  const erasingDelay = 45;
  const pauseDelay = 1800;

  function typeRole() {
    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeRole, pauseDelay);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRole, 400);
    } else {
      setTimeout(typeRole, isDeleting ? erasingDelay : typingDelay);
    }
  }

  setTimeout(typeRole, 600);

  // --------------------------------------------------------------------------
  // Navbar Glass Blur on Scroll & Active Link Spy
  // --------------------------------------------------------------------------
  const navbar = document.getElementById('main-navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    // Scroll Spy for Nav Links
    let current = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // --------------------------------------------------------------------------
  // Mobile Navigation Drawer Toggle
  // --------------------------------------------------------------------------
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu-list');

  function closeMobileMenu() {
    if (navMenu && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      if (mobileToggle) mobileToggle.textContent = '☰';
      document.body.style.overflow = '';
    }
  }

  function toggleMobileMenu() {
    if (navMenu && mobileToggle) {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.textContent = isOpen ? '✕' : '☰';
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }
  }

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });

    // Close on link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    // Close if clicked outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        closeMobileMenu();
      }
    });
  }

  // --------------------------------------------------------------------------
  // Reveal On Scroll IntersectionObserver
  // --------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.12
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // --------------------------------------------------------------------------
  // Projects Category Filtering
  // --------------------------------------------------------------------------
  const projectFilterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card-wrapper');

  projectFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      projectFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // Animated Hero Stats Counter on Scroll
  // --------------------------------------------------------------------------
  const statsContainer = document.getElementById('hero-stats-container');
  const statNumbers = document.querySelectorAll('.stat-number[data-count]');
  let statsAnimated = false;

  function animateCount(element) {
    const target = parseFloat(element.getAttribute('data-count'));
    const isDecimal = element.getAttribute('data-decimal') === '1';
    const suffix = element.getAttribute('data-suffix') || '';
    const duration = 1600; // ms
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = target * easeProgress;

      if (isDecimal) {
        element.textContent = currentVal.toFixed(1) + suffix;
      } else {
        element.textContent = Math.floor(currentVal) + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        if (isDecimal) {
          element.textContent = target.toFixed(1) + suffix;
        } else {
          element.textContent = target + suffix;
        }
      }
    }

    requestAnimationFrame(updateCounter);
  }

  if (statsContainer) {
    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
          statsAnimated = true;
          statNumbers.forEach(num => animateCount(num));
          observer.unobserve(statsContainer);
        }
      });
    }, {
      threshold: 0.15
    });

    statsObserver.observe(statsContainer);
  }
});


