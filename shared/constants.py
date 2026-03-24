"""Shared constants used across the Skaraa platform."""

# Stem types
STEM_TYPES_4 = ["vocals", "drums", "bass", "other"]
STEM_TYPES_6 = ["vocals", "drums", "bass", "guitar", "piano", "other"]

# Job statuses
JOB_STATUS_PENDING = "pending"
JOB_STATUS_PROCESSING = "processing"
JOB_STATUS_COMPLETED = "completed"
JOB_STATUS_FAILED = "failed"

JOB_STATUSES = [JOB_STATUS_PENDING, JOB_STATUS_PROCESSING, JOB_STATUS_COMPLETED, JOB_STATUS_FAILED]

# Credit costs per operation
CREDIT_COST_SPLIT_4_STEM = 1
CREDIT_COST_SPLIT_6_STEM = 2
CREDIT_COST_PITCH_SHIFT = 1

# Supported audio formats
SUPPORTED_FORMATS = ["mp3", "wav", "flac", "ogg", "m4a", "aac", "wma"]

# Max file size (100MB)
MAX_FILE_SIZE_BYTES = 100 * 1024 * 1024

# Demucs models
DEMUCS_MODELS = {
    "htdemucs": {"stems": 4, "description": "Hybrid Transformer Demucs (default)"},
    "htdemucs_ft": {"stems": 4, "description": "Fine-tuned (better quality, slower)"},
    "htdemucs_6s": {"stems": 6, "description": "6-stem separation (adds piano + guitar)"},
}
