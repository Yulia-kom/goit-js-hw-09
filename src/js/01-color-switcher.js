const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
const body = document.querySelector("body");

let timerId = null;


startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
        const color = getRandomHexColor();
        body.style.backgroundColor = color;
    }, 1000);
    startBtn.disabled = true;

});

stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    startBtn.disabled = false;
});


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
