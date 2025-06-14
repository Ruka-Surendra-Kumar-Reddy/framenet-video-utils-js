// index.js
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const ffprobe = require('ffprobe-static').path;

async function getVideoDetails(videoPath) {
  const command = `"${ffprobe}" -v error -select_streams v:0 -show_entries stream=width,height,r_frame_rate,duration -of json "${videoPath}"`;

  try {
    const { stdout } = await exec(command);
    const data = JSON.parse(stdout).streams[0];
    
    // r_frame_rate is often a fraction like "30/1", so we evaluate it.
    const fps = eval(data.r_frame_rate);

    return {
      duration_seconds: parseFloat(data.duration),
      resolution: {
        width: data.width,
        height: data.height,
      },
      fps: fps,
    };
  } catch (error) {
    console.error("Error executing ffprobe:", error);
    throw new Error("Could not process the video file. Ensure it is a valid video file.");
  }
}

module.exports = { getVideoDetails };