import pytest
from httpx import AsyncClient


@pytest.mark.anyio
async def test_login_placeholder(client: AsyncClient):
    """Test that the login endpoint returns not_implemented."""
    response = await client.post("/api/v1/auth/login")
    assert response.status_code == 200
    assert response.json()["status"] == "not_implemented"


@pytest.mark.anyio
async def test_register_placeholder(client: AsyncClient):
    """Test that the register endpoint returns not_implemented."""
    response = await client.post("/api/v1/auth/register")
    assert response.status_code == 200
    assert response.json()["status"] == "not_implemented"
