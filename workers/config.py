"""Modal app configuration for GPU workers."""

import modal

# Define the Modal app
app = modal.App("skaraa-workers")

# Container image with Python 3.11, PyTorch, and Demucs
demucs_image = (
    modal.Image.debian_slim(python_version="3.11")
    .pip_install(
        "torch",
        "torchaudio",
        "demucs",
    )
    .apt_install("ffmpeg")
)

# GPU configuration — A10G for stem separation
GPU_CONFIG = modal.gpu.A10G()

# Timeout for stem separation jobs (15 minutes max)
SEPARATION_TIMEOUT = 900
