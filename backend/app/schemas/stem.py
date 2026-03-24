from pydantic import BaseModel


class StemResponse(BaseModel):
    id: str
    track_id: str
    type: str
    url: str
    duration: float | None = None

    class Config:
        from_attributes = True
