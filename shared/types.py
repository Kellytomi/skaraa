"""Shared type definitions."""

from typing import Literal

StemType = Literal["vocals", "drums", "bass", "other", "piano", "guitar"]
JobStatus = Literal["pending", "processing", "completed", "failed"]
TrackStatus = Literal["uploaded", "processing", "completed", "failed"]
CreditType = Literal["purchase", "usage", "bonus"]
Environment = Literal["dev", "staging", "prod"]
DemucsModel = Literal["htdemucs", "htdemucs_ft", "htdemucs_6s"]
