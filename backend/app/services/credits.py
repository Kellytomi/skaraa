"""Credit management service."""


async def get_balance(user_id: str) -> int:
    """Get the current credit balance for a user."""
    # TODO: implement credit balance query
    raise NotImplementedError


async def deduct_credits(user_id: str, amount: int, description: str) -> bool:
    """Deduct credits from a user's balance. Returns False if insufficient."""
    # TODO: implement atomic credit deduction
    raise NotImplementedError


async def add_credits(user_id: str, amount: int, description: str) -> None:
    """Add credits to a user's balance (purchase or bonus)."""
    # TODO: implement credit addition
    raise NotImplementedError
