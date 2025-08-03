document.addEventListener("DOMContentLoaded", () => {
  const typewriterEl = document.getElementById("typewriter");
  if (!typewriterEl) return;

  const story = typewriterEl.getAttribute("data-story");
  if (!story) return;

  let index = 0;

  function typeNextChar() {
    if (index < story.length) {
      const char = story[index];
      typewriterEl.innerHTML += char === '\n' ? '<br />' : char;
      index++;

      // Optional: play click sound
      const clickSound = document.getElementById("click-sound");
      if (clickSound && !clickSound.muted) {
        clickSound.currentTime = 0;
        clickSound.play();
      }

      setTimeout(typeNextChar, 100); // Adjust speed here
    }
  }

  typewriterEl.innerHTML = ''; // Clear before typing
  typeNextChar();
});