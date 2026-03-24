from typing import AsyncGenerator

from fastapi import Depends, HTTPException, status

from app.core.database import async_session


async def get_db() -> AsyncGenerator:
    """Get database session."""
    async with async_session() as session:
        yield session


async def get_current_user():
    """Get current authenticated user from JWT token."""
    # TODO: implement JWT token validation and user lookup
    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Not authenticated",
    )
