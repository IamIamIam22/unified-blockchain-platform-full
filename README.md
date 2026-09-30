# Unified Blockchain Platform

A comprehensive, multi-module blockchain ecosystem for DeFi, smart contract development, and MEV strategies.

## 🚀 Hyper-Expanded Features
- **System Monitor (Debug):** Real-time heartbeat, latency tracking, and connection mesh visualizer.
- **Alchemy Infrastructure:** Dedicated hub for custom RPCs and **Gas Policy** management.
- **Bitcoin Gateway:** Step-by-step BTC network integration and cross-chain bridge visualization.
- **Smart Wallet Hub:** ERC-4337 Account Abstraction for session keys and gasless transactions.
- **MEV Execution Suite:** Operational bots with **Zero-Cost Logic** (flash loan fees covered by arbitrage margin).
- **Contract Wizard Walkthrough:** Visual 5-step lifecycle tracker (Architecture → Requirements → AI Drafting → Sandbox Audit → Final Review).
- **Nexus Dashboard:** High-level ecosystem health and wallet monitoring.
- **AI Assistant:** Context-aware intelligent guide synchronized with the active module.
- **Cyber-Industrial Aesthetic:** High-density, modern command center UI.

---

## 🛠 Advanced Connectivity

### Alchemy Setup
1. Open the **Alchemy Center** module.
2. Input your Alchemy API Key and optional **Gas Policy ID**.
3. Save the configuration to enable high-throughput RPCs and gasless execution.

### Bitcoin Integration
1. Navigate to the **Bitcoin Gateway**.
2. Select your connection method (Electrum, Bitcoin Core, or Dedicated Node).
3. Follow the integrated Help Guide to bridge your BTC assets to the platform.

---

## 💻 Desktop Deployment

### Prerequisites
- [Node.js](https://nodejs.org/) (Version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Setup & Run
1. **Extract the ZIP file** to your desired directory.
2. **Open a terminal/command prompt** in that directory.
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start Development Server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

5. **Production Build:**
   To create a production-ready version:
   ```bash
   npm run build
   ```
   The compiled files will be in the `dist/` folder. You can serve them using:
   ```bash
   npx serve -s dist
   ```

---

## 📱 Mobile Deployment

### Option A: Termux (Android)
1. **Install Termux** from F-Droid or the Google Play Store.
2. **Update environment:**
   ```bash
   pkg update && pkg upgrade
   ```
3. **Install Node.js & Git:**
   ```bash
   pkg install nodejs git
   ```
4. **Move the project** into Termux (using `termux-setup-storage` if needed) or clone it.
5. **Navigate to the directory:**
   ```bash
   cd unified-blockchain-platform
   ```
6. **Install and Build:**
   ```bash
   npm install
   ```
7. **Run local server:**
   ```bash
   npm run dev -- --host
   ```
   Access the app on your mobile browser via the local IP shown in the terminal.

### Option B: Web Hosting (Recommended for Mobile)
For the best mobile experience, deploy the `dist/` folder to a hosting provider:
- **Vercel:** Just connect your GitHub repo or use `npx vercel`.
- **Netlify:** Drag and drop the `dist/` folder into the Netlify dashboard.
- **GitHub Pages:** Use the `gh-pages` npm package to deploy directly.

---

## 🛠 Tech Stack
- **Frontend:** React 19 (TypeScript)
- **Bundler:** Vite
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React

---

## 🛡 Security Note
This platform is designed for professional blockchain interaction. Always verify contract logic in the **Testing Laboratory** before deploying to Mainnet.
