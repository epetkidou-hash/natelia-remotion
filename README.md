# Natelia Remotion – Codex Cloud starter

This is a functioning **starter composition**, not yet an automatic video editor. The sample renders a 10-second branded title reel. Your uploaded source video, transcription, silence trimming and timed captions are separate follow-up steps.

## Connect to Codex Cloud
1. Create a new private GitHub repository, e.g. `natelia-remotion`.
2. Upload the contents of this folder to the repository (not the ZIP as a single file).
3. In Codex Cloud, connect GitHub if prompted and select the repository.
4. Select its environment, ensure Node.js is available, and use `npm install` as the setup command if asked.
5. In Codex ask: `Run npm install, npm run compositions and npm run render. Fix setup issues, then show me the output and confirm the exact rendered file.`
6. For your real video, upload or otherwise make the MOV accessible in the workspace. Ask Codex to inspect the file, install official Remotion skills, transcribe in original language, remove gaps, add timed captions and animated key phrases, preview and render.

## Commands
`npm install`
`npm run dev`
`npm run render`

## Notes
- Source MOV is not included.
- Caption generation requires actual speech transcription capability.
- Cloud environments may need system dependencies for browser rendering.
- Don't put private source footage in a public repository.
