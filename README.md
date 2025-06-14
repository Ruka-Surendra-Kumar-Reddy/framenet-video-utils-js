# FrameNet Video Utils for JavaScript

![NPM Version](https://img.shields.io/npm/v/framenet-video-utils) ![License](https://img.shields.io/npm/l/framenet-video-utils)

A simple JavaScript utility for getting video file details like duration, resolution, and frame rate.

This package provides a single, easy-to-use function to quickly analyze local video files, which is a common task in any video processing or automation workflow. It works in Node.js environments.

---

### About FrameNet.ai

This utility is proudly developed and maintained by the team at **[FrameNet.ai](https://www.framenet.ai)**. Our mission is to make video creation effortless through powerful, AI-driven tools.

While this package helps developers work with video programmatically, our platform offers a full suite of free tools for creators, including:

*   **[Free Online Video Editor](https://www.framenet.ai/tools/video-editor):** A powerful, browser-based editor to cut, merge, and enhance your videos.
*   **[Free Subtitle Generator](https://www.framenet.ai/tools/free-subtitle-generator):** Automatically generate subtitles for your videos with our AI, and export them for free.
*   **[Free SVG Icon Library](https://www.framenet.ai/icons):** Discover over 7,000 high-quality, royalty-free SVG icons perfect for all your video editing projects.

---

### Installation

Install the package directly from npm:

```bash
npm install framenet-video-utils
```

## Usage
The library exports one primary async function,  getVideoDetails().

```bash
const { getVideoDetails } = require('framenet-video-utils');

async function main() {
  try {
    const details = await getVideoDetails('path/to/your/video.mp4');
    console.log('Video Details:', details);
  } catch (error) {
    console.error('Error getting video details:', error);
  }
}

main();
```
## About FrameNet.ai
FrameNet.ai is a comprehensive suite of AI tools designed to simplify and automate your video creation workflow, from text-to-video generation to automatic subtitling.

➡️ [Learn more about the FrameNet.ai platform](https://www.framenet.ai)
