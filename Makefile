.PHONY: setup dev dev-frontend dev-backend lint test db-migrate clean

setup:
	@bash infra/scripts/setup-dev.sh

dev:
	docker-compose up

dev-frontend:
	cd frontend && bun run dev

dev-backend:
	cd backend && uvicorn app.main:app --reload

lint:
	cd backend && ruff check .
	cd frontend && bun run lint

test:
	cd backend && pytest tests/ -v
	cd frontend && bunx tsc --noEmit

db-migrate:
	cd backend && alembic upgrade head

clean:
	docker-compose down -v
	find . -type d -name __pycache__ -exec rm -rf {} + 2>/dev/null || true
	rm -rf frontend/.next
	rm -rf backend/.mypy_cache backend/.pytest_cache
