# Skaraa

Web-based audio stem splitting and manipulation tool. Upload any song and isolate vocals, drums, bass, and more using AI-powered stem separation.

## Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Frontend   | Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn/ui, Bun |
| Backend    | FastAPI, Python 3.11+, SQLAlchemy   |
| Database   | PostgreSQL (Supabase)               |
| Cache      | Redis                               |
| Storage    | Supabase Storage                    |
| GPU Workers| Modal (Demucs)                      |
| Payments   | Stripe                              |
| Auth       | Supabase Auth                       |
| CI/CD      | GitHub Actions                      |

## Prerequisites

- Bun 1.0+
- Python 3.11+
- Docker & Docker Compose
- Redis (included in docker-compose)

## Quick Start

```bash
git clone https://github.com/your-org/skaraa.git
cd skaraa
make setup
make dev
```

Frontend: http://localhost:3000
Backend: http://localhost:8000
API docs: http://localhost:8000/docs

## Project Structure

```
skaraa/
├── frontend/       # Next.js 14+ (App Router)
├── backend/        # FastAPI (Python)
├── workers/        # GPU processing workers (Modal/Demucs)
├── shared/         # Shared types and constants
├── infra/          # Docker, nginx, deployment configs
├── scripts/        # Dev scripts
├── .github/        # CI/CD workflows
├── docker-compose.yml
├── Makefile
└── README.md
```

## Environment Variables

Copy `.env.example` to `.env` and fill in the values. See each subdirectory for service-specific env files:
- `frontend/.env.local.example`
- `backend/.env.example`

## Git Workflow

| Branch    | Purpose                              |
|-----------|--------------------------------------|
| `main`    | Production — deploys to prod         |
| `develop` | Staging — deploys to staging         |
| Feature   | `feature/*` → PR to `develop`        |
| Hotfix    | `hotfix/*` → PR to `main`            |

<!-- Branch protection rules:
- main: Require PR review, require CI pass, no force push
- develop: Require CI pass, no force push
-->

## Development Commands

```bash
make setup          # Install all dependencies
make dev            # Start all services via Docker
make dev-frontend   # Start frontend only
make dev-backend    # Start backend only
make lint           # Run linters
make test           # Run tests
make db-migrate     # Run database migrations
make clean          # Stop containers, clean caches
```

## Links

- [PRD](TODO) — Product Requirements Document
- [Figma](TODO) — Design files
- [API Docs](http://localhost:8000/docs) — Swagger/OpenAPI (local)
