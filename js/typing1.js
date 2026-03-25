  const textLines = [
   "Lo imposible solo tarda un poco más"
];

let lineIndex = 0;
let charIndex = 0;
const typingSpeed = 50;       // velocidad de cada letra
const pauseBetweenLines = 2000; // pausa al final de cada frase

function typeLine() {
    const typedElement = document.getElementById('typing1');
    const currentLine = textLines[lineIndex];

    if (charIndex < currentLine.length) {
        typedElement.textContent += currentLine.charAt(charIndex);
        charIndex++;
        setTimeout(typeLine, typingSpeed);
    } else {
        // Mantener la frase completa unos segundos
        setTimeout(() => {
            // borrar todo de golpe
            typedElement.textContent = "";
            charIndex = 0;
            lineIndex = (lineIndex + 1) % textLines.length;
            setTimeout(typeLine, 500); // pequeña pausa antes de la siguiente frase
        }, pauseBetweenLines);
    }
}

document.addEventListener("DOMContentLoaded", typeLine);