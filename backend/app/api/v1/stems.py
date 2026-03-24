from fastapi import APIRouter

router = APIRouter()


@router.get("/{track_id}")
async def get_stems(track_id: str):
    """Get all stems for a track."""
    # TODO: implement stem retrieval
    return {"status": "not_implemented", "message": "TODO"}


@router.get("/{stem_id}/download")
async def download_stem(stem_id: str):
    """Download a specific stem file."""
    # TODO: implement stem download with signed URL
    return {"status": "not_implemented", "message": "TODO"}
