# antonioruocco-web
My personal web-site CV
# 🛡️ Personal Cyber-Suite Portfolio v3.2

**Project Codename:** CYBER-SHELL-UI  
**Developer:** Antonio Ruocco  
**Security Clearance:** LEVEL 4 (Cloud Integrated)  
**Status:** [ DEPLOYED / SECURE ]

---

## 🖥️ Overview
This repository hosts the source code for my professional portfolio. The interface has been engineered to reflect my identity as a **Cybersecurity Analyst & Ethical Hacker**, utilizing custom UI modules that simulate security terminals, encrypted vaults, and SOC monitoring dashboards. Version 3.2 introduces a **Full-Stack architecture** with real-time cloud database integration.

---

## 🎨 Visual Identity & System Architecture

The portfolio is organized into chromatic and functional "modules" to provide immediate categorization of technical skills and real-time intelligence:

| Module | Color | Visual Theme | Path |
| :--- | :--- | :--- | :--- |
| **Experience** | Green | Terminal Log / System Journal | `/experience.html` |
| **Certifications** | Cyan | Expandable Encrypted Vault | `/certifications.html` |
| **Projects** | Green | Git Clone / OSINT Repository | `/projects.html` |
| **Cyber News** | Red | Global Intel / SOC Dashboard | `/news.html` |
| **Interactive Lab** | Purple | **Full-Stack Command Line** | `/index.html` |
| **Library** | Amber | Digital Forensics / Archive | `/books.html` |
| **Contact** | Cyan/Red | Secure Transmission Protocol | `/contact.html` |

---

## 🚀 Technical Features

### 🛡️ Interactive Cyber Range (v3.2 Full-Stack Edition)
A high-fidelity, split-view simulation environment. **Newly upgraded to a Dynamic Cloud Architecture:**

* **Logic Engine:** Integrated with a **Node.js/Express** backend to process terminal commands.
* **Live Database:** Connected to **MongoDB Atlas** for real-time data retrieval (SQL dumps, user enumeration, and vulnerability status).
* **Dynamic Scenarios:**
    * **SQL Injection:** Real-time extraction of hashed credentials from the cloud.
    * **SSH Brute Force:** Dynamic target scanning and credential cracking.
    * **Patching & Forensics:** Simulation of system hardening and log analysis using real database records.

### 🌐 Global Intel Stream
A real-time threat intelligence dashboard that merges international feeds (The Hacker News) and national reports (Cybersecurity360.it) using asynchronous JS and RSS-to-JSON decryption.

### 📟 Active HUD Interface
Implementation of "Heads-Up Display" elements, including **Laser Input Scanning**, a real-time **Data Integrity Bar**, and a soft **Scanline Overlay** simulating vintage CRT monitors.

### 🔐 Secure Backend Architecture
* **RESTful API:** Clean communication between the frontend terminal and the cloud logic.
* **Security First:** Database credentials are never exposed in the code; loro sono gestiti via **Environment Variables** (ENV) su Render.
* **Command Logging:** Ogni passo della simulazione è registrato in un database per scopi di audit.

---

## 🛠️ Featured Credentials & Stack

* **Certifications:** Blue Team Level 1 (BTL1), Microsoft SC-200, Cisco CyberOps Associate, L-PIC 1 (Linux Professional).
* **Tech Stack:**
    * **Frontend:** HTML5, CSS3 (Advanced Grid/Flexbox), JavaScript (ES6+).
    * **Backend:** Node.js, Express.js.
    * **Database:** MongoDB Atlas (NoSQL).
    * **Cloud:** Render (Deployment), GitHub Pages.

---

## 📂 Installation & Deployment

To run the full-stack system locally:

```bash
# 1. Clone the repository
git clone [https://github.com/isilderrr1/antonioruocco-web.git](https://github.com/isilderrr1/antonioruocco-web.git)

# 2. Setup Backend
cd backend
npm install
# Configure MONGO_URI in your environment variables
node app.js

# 3. Launch Frontend
# Open index.html in any modern web browser
