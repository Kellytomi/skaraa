from sqlalchemy import Column, DateTime, Float, ForeignKey, String, func
from app.core.database import Base


class Stem(Base):
    __tablename__ = "stems"

    id = Column(String, primary_key=True)
    track_id = Column(String, ForeignKey("tracks.id"), nullable=False, index=True)
    type = Column(String, nullable=False)  # vocals, drums, bass, other, piano, guitar
    url = Column(String, nullable=False)
    duration = Column(Float)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
