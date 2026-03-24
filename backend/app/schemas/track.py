from pydantic import BaseModel
from typing import Optional


class TrackBase(BaseModel):
    filename: str


class TrackCreate(TrackBase):
    pass


class TrackResponse(TrackBase):
    id: str
    user_id: str
    original_url: str
    duration: Optional[float] = None
    bpm: Optional[float] = None
    key: Optional[str] = None
    status: str

    class Config:
        from_attributes = True
