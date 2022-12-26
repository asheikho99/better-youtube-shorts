document.addEventListener("keydown", (data) => {
  const short = document.querySelector("#shorts-player > div.html5-video-container > video")
  const key = data.key.toLowerCase();
  switch (key) {
    case "j":
      short.currentTime -= 5;
      break;

    case "l":
      short.currentTime += 5;
      break;

    case "u":
      if (short.playbackRate > 0.25) short.playbackRate -= 0.25;
      break;

    case "i":
      short.playbackRate = 1;
      break
    default:
      return
  }
})