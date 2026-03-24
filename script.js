

// HOME

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }


  const text = 'GABRIEL GALICIA';
let i = 0;

function typeWriterTitle() {
  if (i < text.length) {
    document.getElementById("typewriter-h1").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriterTitle, 90);
  }
}

typeWriterTitle();

const textElement = document.getElementById("typewriter-text");
const textToType = "WEB DESIGN PORTFOLIO";
const speed = 99;

let j = 0;

function typeWriterParagraph() {
  if (j < textToType.length) {
    textElement.innerHTML += textToType.charAt(j);
    j++;
    setTimeout(typeWriterParagraph, speed);
  }
}

// Delay paragraph until title finishes
const titleDuration = text.length * 90;
setTimeout(typeWriterParagraph, titleDuration + 300);
