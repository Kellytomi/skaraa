import pytest
from httpx import AsyncClient


@pytest.mark.anyio
async def test_list_tracks_placeholder(client: AsyncClient):
    """Test that the tracks list endpoint returns not_implemented."""
    response = await client.get("/api/v1/tracks/")
    assert response.status_code == 200
    assert response.json()["status"] == "not_implemented"


@pytest.mark.anyio
async def test_upload_track_placeholder(client: AsyncClient):
    """Test that the upload endpoint returns not_implemented."""
    response = await client.post("/api/v1/tracks/")
    assert response.status_code == 200
    assert response.json()["status"] == "not_implemented"
