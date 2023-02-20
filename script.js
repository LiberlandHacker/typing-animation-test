const text = "Hello, World!"; // Text to be typed
const delay = 100; // Delay between each character (in milliseconds)
const typingText = document.querySelector('.typing-text'); // Element to hold the text

let index = 0;
function type() {
  typingText.textContent += text.charAt(index);
  index++;
  if (index >= text.length) {
    return;
  }
  setTimeout(type, delay);
}

type();
