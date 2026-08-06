const text = [
    "Python Developer",
    "Web Developer",
    "Data Analyst",
    "Machine Learning Enthusiast"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const typing = document.getElementById("typing");

    if (!typing) return;

    const currentText = text[textIndex];

    if (!isDeleting) {
        typing.textContent = currentText.substring(0, charIndex++);
    } else {
        typing.textContent = currentText.substring(0, charIndex--);
    }

    let speed = 100;

    if (!isDeleting && charIndex === currentText.length + 1) {
        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % text.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        darkBtn.textContent = "☀️ Light Mode";
    }
    else{
        darkBtn.textContent = "🌙 Dark Mode";
    }

});

AOS.init({
    duration:1200,
    once:false,
    offset:120
});

const roles = [
    "Machine Learning Enthusiast",
    "Data Analyst",
    "Web Developer",
    "Python Programmer"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
    current = roles[i];

    if (!isDeleting) {
        document.getElementById("typing").textContent = current.substring(0, j++);
    } else {
        document.getElementById("typing").textContent = current.substring(0, j--);
    }

    if (!isDeleting && j === current.length + 1) {
        isDeleting = true;
        setTimeout(type, 1200);
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % roles.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();