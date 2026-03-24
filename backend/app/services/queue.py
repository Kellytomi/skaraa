"""Job queue service for dispatching stem separation tasks."""

from app.core.redis import get_redis


async def enqueue_separation_job(track_id: str, user_id: str, model: str = "htdemucs") -> str:
    """Enqueue a stem separation job for processing by Modal workers."""
    # TODO: implement job dispatch to Redis queue / Modal
    raise NotImplementedError


async def get_job_progress(job_id: str) -> dict:
    """Get the current progress of a job from Redis."""
    # TODO: implement progress retrieval from Redis
    raise NotImplementedError
