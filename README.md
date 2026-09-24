# Open Banking Financial Insights (OpenFi)

![Project Screenshot](screenshots/dashboard.png)

## 📖 Product Overview

**OpenFi** is a modern, responsive financial dashboard prototype designed to demonstrate the power of Open Banking. By simulating connected accounts, the platform provides users with holistic financial insights, aggregating data across multiple institutions to offer a single source of truth for their finances. The application includes transaction categorization, income detection, cash-flow analysis, and a simulated consent flow reflecting real-world Open Banking privacy standards (like PSD2 and Open Banking UK).

### What is Open Banking?
Open Banking is a secure way to give providers access to your financial information. It allows consumers and small businesses to share their bank and credit card transaction data securely with trusted third parties who can then provide applications and services, leading to better financial management and new financial products.

---

## 🎯 Why I Built This

I built this prototype to demonstrate my product management and technical skills in the FinTech domain. Financial fragmentation is a universal problem: users often have checking accounts, savings accounts, credit cards, and investments scattered across different banks. Without a unified view, understanding one's true financial health is difficult. This project allowed me to map out a complete Open Banking user journey, from secure consent acquisition to actionable data insights.

---

## 🛑 Problem Statement

**The Problem:** Consumers struggle to get a comprehensive view of their financial health because their data is siloed across multiple financial institutions. 

**The Impact:** 
- Users overdraw accounts because they don't see upcoming recurring payments.
- Users miss savings opportunities due to a lack of holistic cash-flow visibility.
- Budgeting is a manual, error-prone process requiring spreadsheets or juggling multiple banking apps.

---

## 👥 Target Users & Personas

### Persona 1: "Optimizing Olivia" (Young Professional)
- **Demographics:** 28 years old, Tech worker, high income but high expenses (rent, student loans).
- **Goal:** Wants to maximize savings and investments without manually tracking every dollar.
- **Pain Point:** Has 4 different credit cards and 2 bank accounts. Needs a single dashboard to see her true net worth and monthly spending trends.

### Persona 2: "Budgeting Ben" (Freelancer)
- **Demographics:** 34 years old, fluctuating monthly income.
- **Goal:** Needs to ensure he has enough cash flow to cover basic living expenses and taxes.
- **Pain Point:** Income inconsistency makes traditional budgeting hard; needs intelligent income detection and cash-flow forecasting.

---

## 🗺️ User Journey & Workflow

1. **Onboarding & Education:** User is educated on what Open Banking is and why sharing data provides value.
2. **The Consent Flow (Critical Step):** User is presented with a clear, jargon-free consent screen detailing *what* data is requested, *why*, and *for how long*. 
3. **Institution Selection:** User selects their bank (simulated).
4. **Authentication (OAuth):** User is securely redirected to their bank to log in (simulated).
5. **Data Aggregation:** The app fetches account balances and up to 24 months of transaction data.
6. **Insight Generation:** Transactions are categorized; recurring subscriptions and income are identified.
7. **The Dashboard:** User views their Net Worth, Income vs. Spending, and Account breakdown in a unified UI.

---

## 🔒 Privacy, Security & Data Architecture

### API Concept & Data Architecture
In a real-world scenario, OpenFi would connect to an aggregator (like Plaid, Tink, or TrueLayer). 
- **Read-Only Access:** The app only requests read access to transactions and balances. It cannot move money.
- **Tokenization:** Login credentials are never stored. The app receives an OAuth access token.
- **Data Normalization:** The backend normalizes disparate bank data (e.g., standardizing merchant names from "WHLFOODS #1234" to "Whole Foods").

### Security Principles
- **Explicit Consent:** Data is only pulled after explicit user opt-in.
- **Right to Revoke:** Users can revoke access from the settings panel at any time.
- **Data Minimization:** We only pull the data necessary for the insights provided.

---

## 📋 Requirements (User Stories & Acceptance Criteria)

### Epic: Account Aggregation
**User Story:** As a user, I want to connect multiple bank accounts so I can see my total net worth in one place.
- **AC1:** User must explicitly agree to the data sharing consent modal before connecting.
- **AC2:** Dashboard displays total assets, total liabilities, and net worth.
- **AC3:** Individual connected accounts are listed with their institution name, account type, and balance.

### Epic: Financial Insights
**User Story:** As a user, I want to see my spending broken down by category so I can understand where my money is going.
- **AC1:** Transactions view shows a tabular list of recent transactions.
- **AC2:** Dashboard includes a visualization (Bar chart) of spending by category (e.g., Housing, Food, Transport).
- **AC3:** Dashboard includes an Area chart showing income trends over the last 6 months.

---

## ⚖️ Tradeoffs & UX Decisions

1. **Synthetic Data vs. Live API Integration:** 
   - *Tradeoff:* Connecting to a real sandbox API (like Plaid) requires API keys and complex backend handling. 
   - *Decision:* Used high-fidelity synthetic data in the frontend to demonstrate the UX and business logic instantly without environment setup hurdles for evaluators.
2. **Simplified Consent Flow:** 
   - *Tradeoff:* Real Open Banking consent involves redirecting to the bank's domain.
   - *Decision:* Built an in-app modal to simulate the consent agreement step, prioritizing a smooth prototype demonstration over a disjointed redirect experience.

---

## 🤖 AI & Automation Approach

If expanding this into a production app, AI would be leveraged for:
1. **Transaction Categorization Engine:** Using NLP to parse cryptic merchant strings and accurately categorize them (e.g., "UBER *EATS" -> "Food & Dining").
2. **Predictive Cash Flow:** Machine learning models analyzing past recurring payments to predict future account balances and warn users of potential overdrafts.

---

## 📊 KPI Framework (How to measure success)

1. **Account Link Success Rate:** % of users who complete the consent and connection flow.
2. **Average Accounts per User:** A higher number indicates deeper trust and reliance on the platform.
3. **Session Frequency (DAU/MAU):** How often users log in to check their financial health.
4. **Consent Revocation Rate:** % of users who disconnect their accounts (lower is better, indicates sustained value).

---

## 🚀 Roadmap & Future Opportunities

- **Phase 1 (Current):** Read-only data aggregation, basic categorization, net worth calculation.
- **Phase 2:** Subscription management (identifying and canceling unused subscriptions).
- **Phase 3:** Predictive alerts (e.g., "You have a $120 utility bill due tomorrow, and your balance is $100").
- **Phase 4:** Action initiation (Payment initiation via Open Banking to move money between accounts to avoid overdrafts).

---

## 🛠️ Tech Stack & Architecture

- **Frontend:** React (Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Charting:** Recharts
- **Architecture (Simulated):** Client-side rendering with mock static data representing JSON payloads typically received from a FinTech aggregation API.

---

## 💻 Getting Started & Running Locally

### Prerequisites
- Node.js (v18+)
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/adishuklaa/open-banking-financial-insights.git
   ```
2. Navigate to the directory:
   ```bash
   cd open-banking-financial-insights
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

*(Note: There are no environment variables required for this prototype as all data is synthetic).*

---
