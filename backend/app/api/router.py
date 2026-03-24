from fastapi import APIRouter

from app.api.v1 import auth, billing, jobs, stems, tracks

api_router = APIRouter()

api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(tracks.router, prefix="/tracks", tags=["tracks"])
api_router.include_router(stems.router, prefix="/stems", tags=["stems"])
api_router.include_router(jobs.router, prefix="/jobs", tags=["jobs"])
api_router.include_router(billing.router, prefix="/billing", tags=["billing"])
