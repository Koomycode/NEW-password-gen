import characters from "./data.js";

const icon = document.getElementById("icon");
const container = document.querySelector(".container");
const title = document.querySelector(".title");
const subTitle = document.querySelector(".sub-title");
const line = document.querySelector(".line");
const generateBtn = document.getElementById("generate");
const firstPass = document.getElementById("first-pass");
const secPass = document.getElementById("sec-pass");
const firstClip = document.querySelector(".first-clip");
const secClip = document.querySelector(".sec-clip");
const firstCopy = document.querySelector(".first-copy")
const secCopy = document.querySelector(".sec-copy")

icon.addEventListener("click", toggleDarkMode);

generateBtn.addEventListener("click", generatePasswords);

firstClip.addEventListener("click", () => copyToClipboard(firstPass, firstCopy));
secClip.addEventListener("click", () => copyToClipboard(secPass, secCopy));

function toggleDarkMode() {
    const elementsToToggle = [container, title, subTitle, line, firstCopy, secCopy, generateBtn];
    elementsToToggle.forEach(element => element.classList.toggle("dark"));
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");
}

function generatePasswords() {
    firstPass.textContent = generateRandomPassword(15);
    secPass.textContent = generateRandomPassword(10);
}

function generateRandomPassword(length) {
    let char = characters();
    let password = "";
    for (let i = 0; i < length; i++) {
        password += char[Math.floor(Math.random() * char.length)];
    }
    return password;
}

function copyToClipboard(element, item) {
    const textToCopy = element.textContent;
    if (textToCopy) {
        navigator.clipboard.writeText(textToCopy)
            .then(() => toggleVisibility(item))
            .catch(err => console.error("Failed to copy", err));
    }
}

function toggleVisibility(item) {
    item.style.display = 'block';
    setTimeout(() => {
        item.style.opacity = '1';
    }, 100);
    setTimeout(() => {
        item.style.opacity = '0';
    }, 1000);
    setTimeout(() => {
        item.style.display = 'none';
    }, 1200);
}
