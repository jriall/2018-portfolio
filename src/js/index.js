//cover video pauses after 20 seconds to save using CPU excessively
const video = document.getElementById("fullscreen-background-video");

setTimeout(function() {
  video.pause();
}, 20000);
