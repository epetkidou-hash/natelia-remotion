# Natelia Naturals video-editing agent

This repository is a Remotion starter for vertical Instagram reels. Keep the source video and voice authentic. Follow the user's original-language instructions. Use the official Remotion agent skills where available.

## Editing workflow
1. Inspect input video metadata and confirm original language. Do not claim transcription/captions are complete without actually processing audio.
2. Transcribe spoken words with timestamps using an available speech-to-text tool. Ask for access/credentials if unavailable; do not fabricate captions.
3. Identify pauses and propose conservative trims. Avoid removing meaningful breaths or cutting mid-word. Implement actual cuts using appropriate video tooling; Remotion alone does not automatically remove pauses.
4. Build captions synced to the transcript and animate key phrases with understated, premium styling. Respect safe zones for Instagram overlays.
5. Preserve original audio, avoid unsupported health claims, and provide a review preview before final render.
6. Export H.264 MP4, 1080x1920, 30fps, and report actual output path.

## Brand direction
Premium Greek Mediterranean natural products. Understated editorial typography, dark olive green, ivory, tasteful warm accents. Sensory, founder-led storytelling. Sales-aware but not pushy. CTA to natelianaturals.ch. Do not invent logo files or product claims. Replace placeholder brand assets only with supplied originals.

## Project commands
npm install
npm run dev
npm run render

Video files should be placed under public/media/ for local preview or in an accessible project workspace. Do not commit customer videos or secrets to a public repository.
