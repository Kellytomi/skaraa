from fastapi import APIRouter

router = APIRouter()


@router.post("/")
async def upload_track():
    """Upload a new audio track for processing."""
    # TODO: implement file upload, validation, storage, and job creation
    return {"status": "not_implemented", "message": "TODO"}


@router.get("/")
async def list_tracks():
    """List all tracks for the authenticated user."""
    # TODO: implement paginated track listing
    return {"status": "not_implemented", "message": "TODO"}


@router.get("/{track_id}")
async def get_track(track_id: str):
    """Get track details by ID."""
    # TODO: implement track retrieval with stems
    return {"status": "not_implemented", "message": "TODO"}
