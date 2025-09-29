# 🚀 Vibe - AI-Powered App Builder

**Tagline:** Generate, preview, and deploy full‑stack applications from simple prompts using programmable AI agents.

---

## Overview

Vibe is an AI-first app builder that automates the creation of full-stack applications from plain-English prompts. Using programmable agents and background job orchestration (Inngest), Vibe generates type-safe APIs, UI components, and deployable projects using multi-model code generation (We used Gemini-2.0-Flash). Generated apps are validated in isolated Docker/E2B sandboxes, come with live preview URLs, and integrate with Clerk for authentication and billing, Prisma+Neon for persistence, and CodeRabbit for AI-assisted PR reviews.

Key capabilities:
- Generate UI components and full app scaffolds from prompts
- Run code in isolated Docker + E2B sandboxes for safe execution
- Background orchestration with Inngest and agent toolkit
- Type-safe full-stack APIs with tRPC and Prisma
- Authentication & billing with Clerk
- Live preview URLs and code explorer for each generated project

---

## Features

- **Frontend:** Next.js 15, React 19, Tailwind v4, Shadcn/ui
- **Backend & Orchestration:** tRPC, Inngest, Inngest Agent Toolkit, Prisma
- **Sandboxing & Runtime:** E2B cloud sandboxes, Docker templates
- **Database:** Prisma + Neon
- **Auth & Billing:** Clerk (authentication + payments)
- **AI Models:** Gemini-2.0-Flash
- **Dev Tools:** Git workflow automation
- **UX:** Live project preview with shareable URLs, preview + code explorer toggle
- **Monetization:** Built-in credit system and usage tracking

---

## Quickstart (Developer)

> Prerequisites: Node.js (>=20), pnpm or npm, Docker (for local sandboxes), and you should have accounts/API keys for the services you plan to use (Clerk, Neon, Inngest, E2B, OpenAI/Anthropic/Grok).

1. **Clone the repo**  
```bash
git clone https://github.com/your-username/vibe.git
cd vibe
```

2. **Install dependencies**  
```bash
pnpm install
# or
npm install
```

3. **Create environment file**  
Create a `.env` at the project root from `.env.example` and add your API keys:
```
# Example entries
DATABASE_URL = 
NEXT_PUBLIC_APP_URL =
GEMINI_API_KEY =
E2B_API_KEY =
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=

```

4. **Run locally**  
```bash
pnpm dev
# or
npm run dev
```

5. Open `http://localhost:3000` and start generating apps from prompts.

---

## Recommended Local Development Tips

- Use Docker Desktop to run local sandbox templates when testing runtime execution.
- Use `pnpm` for faster installs and a deterministic lockfile.
- Limit API keys and sandbox usage while developing to avoid unexpected costs.
- Use the Preview + Code Explorer toggle to inspect generated code before publishing.

---

## Architecture (high level)

1. **Prompt → Agent:** User prompt kicks off an Inngest job. An agent parses the prompt and creates a project plan.
2. **Codegen:** The agent uses one or more AI models (OpenAI / Anthropic / Grok) to generate app code and components.
3. **Sandbox & Test:** Generated code is built and executed inside an isolated Docker/E2B sandbox for runtime validation and preview URL creation.
4. **Persist & Review:** Code artifacts are stored (Prisma + Neon), a git repo is created, and CodeRabbit runs AI-assisted PR checks.
5. **Deploy / Share:** User can publish, create a shareable preview URL, or export the project.

---

## Contributing

Contributions welcome! Please open issues for bugs or feature requests and submit PRs to the `main` branch. Include tests and a short description of your changes.

---

## Contact

LinkedIn : [Viplav Khode](https://www.linkedin.com/in/viplavkhode/)
