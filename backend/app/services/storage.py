"""Supabase storage helpers for file upload/download."""


async def upload_file(bucket: str, path: str, file_data: bytes) -> str:
    """Upload a file to Supabase storage and return the public URL."""
    # TODO: implement Supabase storage upload
    raise NotImplementedError


async def get_signed_url(bucket: str, path: str, expires_in: int = 3600) -> str:
    """Generate a signed download URL for a file."""
    # TODO: implement signed URL generation
    raise NotImplementedError


async def delete_file(bucket: str, path: str) -> None:
    """Delete a file from Supabase storage."""
    # TODO: implement file deletion
    raise NotImplementedError
