from fastapi import APIRouter

router = APIRouter()


@router.get("/{job_id}")
async def get_job_status(job_id: str):
    """Get the status of a processing job."""
    # TODO: implement job status retrieval
    return {"status": "not_implemented", "message": "TODO"}


@router.post("/webhook")
async def job_webhook():
    """Webhook endpoint for Modal worker callbacks."""
    # TODO: implement job completion webhook handler
    return {"status": "not_implemented", "message": "TODO"}
