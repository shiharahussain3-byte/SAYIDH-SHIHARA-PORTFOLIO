const roles = [
    "Python Developer",
    "Web Developer",
    "Data Analyst",
    "Machine Learning Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const typing = document.getElementById("typing");

    if (!typing) return;

    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        typing.textContent = currentRole.substring(0, charIndex);
        charIndex++;

        if (charIndex > currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {
        charIndex--;
        typing.textContent = currentRole.substring(0, charIndex);

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}


// Dark Mode
const darkBtn = document.getElementById("darkModeBtn");

if (darkBtn) {

    darkBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            darkBtn.textContent = "☀️ Light Mode";
        } else {
            darkBtn.textContent = "🌙 Dark Mode";
        }

    });

}


// AOS Animation
AOS.init({
    duration: 1200,
    once: false,
    offset: 120
});


// Start Typing Effect
typeEffect();