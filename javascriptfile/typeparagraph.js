document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector("#typing-text");
  const texts = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequatur voluptatibus eum quo veniam exercitationem recusandae, iure sint doloremque voluptate fuga dicta alias. Asperiores, sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequatur voluptatibus eum quo veniam exercitationem recusandae, iure sint doloremque voluptate fuga dicta alias. Asperiores, sequi.",
  ];
  let textIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < texts[textIndex].length) {
      textElement.textContent += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100); // Adjust typing speed (milliseconds)
    } else {
      setTimeout(erase, 1000); // Wait before erasing
    }
  }

  function erase() {
    if (charIndex > 0) {
      textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 100); // Adjust erasing speed (milliseconds)
    } else {
      textIndex++;
      if (textIndex >= texts.length) {
        textIndex = 0;
      }
      setTimeout(type, 50); // Wait before typing new text
    }
  }

  type(); // Start typing
});
