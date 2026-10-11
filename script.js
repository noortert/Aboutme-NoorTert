// UX Engineer typing animation //

const words = ["UX Engineer", "Web Developer", "Designer"];
const eyebrowEl = document.querySelector("#eyebrow-text");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        charIndex++;
        eyebrowEl.textContent = currentWord.slice(0, charIndex);

        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }
    } else {
        charIndex--;
        eyebrowEl.textContent = currentWord.slice(0, charIndex);

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, 150);
}

typeEffect();

// Header scroll effect //

const headerEl = document.querySelector("header");

window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
        headerEl.classList.add("scrolled");
    } else {
        headerEl.classList.remove("scrolled");
    }
});

// "Learn more" expandable bio text //

const learnMoreBtn = document.querySelector("#learn-more");
const moreInfo = document.querySelector("#more-info");

learnMoreBtn.addEventListener("click", function () {
    moreInfo.classList.toggle("open");
});

