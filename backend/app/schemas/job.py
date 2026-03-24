from pydantic import BaseModel


class JobResponse(BaseModel):
    id: str
    track_id: str
    status: str
    progress: float
    model: str
    error: str | None = None

    class Config:
        from_attributes = True
