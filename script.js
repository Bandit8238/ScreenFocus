let focusMode = false;

// Boss key (Press ESC)
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    toggleFocus();
  }
});

function toggleFocus() {
  focusMode = !focusMode;

  const iframe = document.getElementById("content");
  const overlay = document.getElementById("overlay");

  if (focusMode) {
    iframe.classList.add("blur");
    overlay.classList.remove("hidden");

    pauseMedia();
  } else {
    iframe.classList.remove("blur");
    overlay.classList.add("hidden");
  }
}

function pauseMedia() {
  // Try pausing all media on page
  document.querySelectorAll("video, audio").forEach(el => {
    el.pause();
  });

  // Mute system audio elements
  document.querySelectorAll("audio, video").forEach(el => {
    el.muted = true;
  });
}
