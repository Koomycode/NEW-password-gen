/*
import characters from "./data.js"

const icon = document.getElementById("icon")
const container = document.querySelector(".container")
const title = document.querySelector(".title")
const subTitle = document.querySelector(".sub-title")
const line = document.querySelector(".line")
const generateBtn = document.getElementById("generate")

icon.addEventListener("click", function () {
    if (icon.classList.contains("fa-sun")) {
        container.classList.add("dark")
        title.classList.add("dark")
        subTitle.classList.add("dark")
        line.classList.add("dark")
        generateBtn.classList.add("dark")
        icon.classList.add("fa-moon")
        icon.classList.remove("fa-sun")
        firstCopy.classList.add("dark")
        secCopy.classList.add("dark")
    } else {
        container.classList.remove("dark")
        title.classList.remove("dark")
        subTitle.classList.remove("dark")
        line.classList.remove("dark")
        generateBtn.classList.remove("dark")
        icon.classList.remove("fa-moon")
        icon.classList.add("fa-sun")
        firstCopy.classList.remove("dark")
        secCopy.classList.remove("dark")
    }

})

const firstPass = document.getElementById("first-pass")
const secPass = document.getElementById("sec-pass")
const firstClip = document.querySelector(".first-clip")
const firstCopy = document.querySelector(".first-copy")
const secClip = document.querySelector(".sec-clip")
const secCopy = document.querySelector(".sec-copy")

let char = characters()
let firstText = ""
let secText = ""

generateBtn.addEventListener("click", function () {
    for (let i = 0; i < 15; i++) {
        firstText += char[Math.floor(Math.random() * char.length)]
    }
    for (let i = 0; i < 10; i++) {
        secText += char[Math.floor(Math.random() * char.length)]
    }

    firstPass.textContent = firstText
    secPass.textContent = secText

    firstText = ""
    secText = ""
})

firstClip.addEventListener("click", function () {
    if (firstPass.textContent) {
        let myFirstCopy = firstPass.textContent
        navigator.clipboard.writeText(myFirstCopy)
            .then(function () {
                toggleVisibility(firstCopy)
            })
            .catch(function (err) {
                console.error("Failed to copy", err)
            })
    }
})

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

secClip.addEventListener("click", function () {
    if (secPass.textContent) {
        let mySecCopy = secPass.textContent
        navigator.clipboard.writeText(mySecCopy)
            .then(function () {
                toggleVisibility(secCopy)
            })
    }
})
*/




// Code improvments ---

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
    const elementsToToggle = [container, title, subTitle, line, generateBtn, icon];
    elementsToToggle.forEach(element => element.classList.toggle("dark"));

    const copyElements = [firstCopy, secCopy]; // Assuming these elements are defined elsewhere
    copyElements.forEach(element => element.classList.toggle("dark"));

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