document.addEventListener("DOMContentLoaded", function () {
  const dataText = ["UI/UX Developer", "Web Developer", "Freelancer"];

  function typeWriter(text, i, fnCallback) {
    const targetElement = document.querySelector("#typewriter");
    if (i < text.length) {
      targetElement.innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
      setTimeout(() => typeWriter(text, i + 1, fnCallback), 200); // Increase the delay to 200 milliseconds
    } else if (typeof fnCallback == "function") {
      setTimeout(fnCallback, 700);
    }
  }

  function startTextAnimation(i) {
    if (i >= dataText.length) i = 0;
    typeWriter(dataText[i], 0, () => startTextAnimation(i + 1));
  }

  startTextAnimation(0);
});
