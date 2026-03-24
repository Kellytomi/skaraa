from sqlalchemy import Column, DateTime, ForeignKey, Integer, String, func
from app.core.database import Base


class Credit(Base):
    __tablename__ = "credits"

    id = Column(String, primary_key=True)
    user_id = Column(String, ForeignKey("users.id"), nullable=False, index=True)
    amount = Column(Integer, nullable=False)
    type = Column(String, nullable=False)  # purchase, usage, bonus
    description = Column(String)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
