function generateRandomIntInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const clrInput = document.getElementById('clr-input');
const clrBtn = document.getElementById('clr-btn');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
let centerX, centerY, newClr, currentClr = clrInput.value;
const radius = 20;

clrInput.addEventListener('change', function () {
    newClr = clrInput.value;
})
clrBtn.addEventListener('click', function () {
    if (newClr !== currentClr) {
        currentClr = newClr;
        context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    }
    let n = generateRandomIntInterval(1, 100);
    for(let i = 0; i < n; i++) {
        context.beginPath();
        centerX = generateRandomIntInterval(0, canvas.clientWidth);
        centerY = generateRandomIntInterval(0, canvas.clientHeight);
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        context.lineWidth = 1;
        context.strokeStyle = currentClr;
        context.stroke();
    }
})