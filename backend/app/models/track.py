from sqlalchemy import Column, DateTime, Float, ForeignKey, String, func
from app.core.database import Base


class Track(Base):
    __tablename__ = "tracks"

    id = Column(String, primary_key=True)
    user_id = Column(String, ForeignKey("users.id"), nullable=False, index=True)
    filename = Column(String, nullable=False)
    original_url = Column(String, nullable=False)
    duration = Column(Float)
    bpm = Column(Float)
    key = Column(String)
    status = Column(String, default="uploaded")
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    # TODO: add relationships to stems, jobs
