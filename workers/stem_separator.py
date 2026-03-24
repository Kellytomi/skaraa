"""
Modal function for audio stem separation using Demucs.

Pipeline:
1. Download the audio file from Supabase storage
2. Run Demucs (htdemucs model) to separate into stems:
   - vocals, drums, bass, other (4-stem default)
   - optionally: vocals, drums, bass, guitar, piano, other (6-stem with htdemucs_6s)
3. Upload each separated stem back to Supabase storage
4. Callback to the API with job completion status and stem URLs

Demucs models available:
- htdemucs: Hybrid Transformer Demucs (default, 4 stems)
- htdemucs_ft: Fine-tuned version (better quality, slower)
- htdemucs_6s: 6-stem separation (adds piano + guitar)
"""

import modal
from workers.config import app, demucs_image, GPU_CONFIG, SEPARATION_TIMEOUT


@app.function(
    image=demucs_image,
    gpu=GPU_CONFIG,
    timeout=SEPARATION_TIMEOUT,
)
async def separate_stems(
    track_id: str,
    audio_url: str,
    model: str = "htdemucs",
    callback_url: str | None = None,
) -> dict:
    """
    Separate an audio file into individual stems using Demucs.

    Args:
        track_id: Unique identifier for the track
        audio_url: URL to download the audio file
        model: Demucs model to use (htdemucs, htdemucs_ft, htdemucs_6s)
        callback_url: URL to POST results to on completion

    Returns:
        Dict with stem URLs and metadata
    """
    # TODO: Step 1 — Download audio from URL to temp file
    # import httpx
    # async with httpx.AsyncClient() as client:
    #     response = await client.get(audio_url)
    #     audio_data = response.content

    # TODO: Step 2 — Run Demucs separation
    # import demucs.separate
    # demucs.separate.main(["--two-stems", "vocals", "-n", model, input_path])

    # TODO: Step 3 — Upload separated stems to Supabase storage
    # for stem_name in ["vocals", "drums", "bass", "other"]:
    #     stem_path = output_dir / model / track_name / f"{stem_name}.wav"
    #     upload to storage...

    # TODO: Step 4 — Callback to API with results
    # if callback_url:
    #     async with httpx.AsyncClient() as client:
    #         await client.post(callback_url, json=results)

    raise NotImplementedError("Stem separation not yet implemented")
