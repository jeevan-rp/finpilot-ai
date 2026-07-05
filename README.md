# FinPilot AI

A modern, AI-powered digital banking assistant built for the SBI Hackathon.

## Features
- AI Coach (ChatGPT-like interface for financial advice)
- Recommendation Engine for banking products
- Financial Dashboard with Recharts
- Modern Glassmorphism UI (TailwindCSS + Framer Motion)
- JWT Authentication

## Tech Stack
**Frontend:** React, Vite, TailwindCSS, React Router, Recharts, Framer Motion
**Backend:** Node.js, Express, MongoDB, Mongoose, @google/generative-ai, JWT

## Installation

### Prerequisites
- Node.js (v18+)
- MongoDB (Running locally or Atlas URI)

### Setup

1. **Clone the repository** (if not already done)
2. **Setup Backend:**
   \`\`\`bash
   cd server
   npm install
   \`\`\`
   Create a \`.env\` file in the \`server\` directory:
   \`\`\`
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/finpilot
   JWT_SECRET=your_secret_key
   GEMINI_API_KEY=your_gemini_key_here
   \`\`\`
   Seed the database (Optional but recommended):
   \`\`\`bash
   npm run seed
   \`\`\`
   Start the server:
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Setup Frontend:**
   \`\`\`bash
   cd client
   npm install
   \`\`\`
   Start the client:
   \`\`\`bash
   npm run dev
   \`\`\`

## Architecture
- \`server/\`: Contains models, controllers, routes, and agents for the AI logic.
- \`client/\`: Contains the Vite+React application with components and pages.

## AI Agents
The application uses various AI agent modules located in \`server/agents/\` to process user data and provide tailored financial recommendations using the Gemini API.
