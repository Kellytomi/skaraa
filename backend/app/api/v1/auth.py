from fastapi import APIRouter

router = APIRouter()


@router.post("/login")
async def login():
    """Authenticate user and return tokens."""
    # TODO: implement login with Supabase auth
    return {"status": "not_implemented", "message": "TODO"}


@router.post("/register")
async def register():
    """Register a new user."""
    # TODO: implement user registration
    return {"status": "not_implemented", "message": "TODO"}


@router.post("/logout")
async def logout():
    """Invalidate user session."""
    # TODO: implement logout
    return {"status": "not_implemented", "message": "TODO"}
