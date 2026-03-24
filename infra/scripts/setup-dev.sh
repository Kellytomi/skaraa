#!/bin/bash
set -e

echo "🎵 Setting up Skaraa development environment..."

# Frontend setup
echo "📦 Installing frontend dependencies..."
cd frontend
if [ ! -f .env.local ]; then
    cp .env.local.example .env.local
    echo "   Created frontend/.env.local from example"
fi
bun install
cd ..

# Backend setup
echo "🐍 Installing backend dependencies..."
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
pip install -r requirements-dev.txt
if [ ! -f .env ]; then
    cp .env.example .env
    echo "   Created backend/.env from example"
fi
cd ..

# Root env
if [ ! -f .env ]; then
    cp .env.example .env
    echo "   Created root .env from example"
fi

echo "✅ Setup complete! Run 'make dev' to start the development environment."
