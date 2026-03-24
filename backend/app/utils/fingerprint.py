"""IP and browser fingerprint helpers for rate limiting and abuse prevention."""

from fastapi import Request


def get_client_ip(request: Request) -> str:
    """Extract client IP from request, handling proxies."""
    # TODO: implement proper IP extraction with X-Forwarded-For
    forwarded = request.headers.get("X-Forwarded-For")
    if forwarded:
        return forwarded.split(",")[0].strip()
    return request.client.host if request.client else "unknown"


def generate_fingerprint(request: Request) -> str:
    """Generate a browser fingerprint hash from request headers."""
    # TODO: implement fingerprint generation from User-Agent, Accept-Language, etc.
    raise NotImplementedError
