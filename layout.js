window.addEventListener("DOMContentLoaded", () => {
  // 🎵 Sound elements
  const coinSound = document.getElementById("coin-sound");
  const clickSound = document.getElementById("click-sound");
  const themeSound = document.getElementById("theme-sound");
  const muteToggle = document.getElementById("muteToggle");

  // 🔊 Autoplay theme music
  if (themeSound) {
    themeSound.play().catch(err => {
      console.warn("Autoplay blocked:", err);
    });
  }

  // 🔇 Mute toggle logic
  if (muteToggle) {
    muteToggle.addEventListener("click", () => {
      const muted = !themeSound.muted;
      [themeSound, coinSound, clickSound].forEach(audio => {
        if (audio) audio.muted = muted;
      });
      muteToggle.textContent = muted ? "🔈 Unmute" : "🔊 Mute";
    });
  }

  // 🖱️ Button click sound
  document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      if (clickSound && !clickSound.muted) {
        clickSound.currentTime = 0;
        clickSound.play();
      }
    });
  });

  // 🖼️ Reveal ASCII art
  const asciiArt = document.getElementById("ascii-art");
  if (asciiArt) {
    asciiArt.classList.remove("hidden");
  }
});