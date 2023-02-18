
const block = document.querySelector('.block');
const circle = document.querySelector('.circle');
const centerX = circle.offsetLeft + circle.offsetWidth / 2;
const centerY = circle.offsetTop + circle.offsetHeight / 2;
const radius = circle.offsetWidth / 2;
let corner = 0;

function moveBlock() {
    const x = centerX + radius * Math.cos(corner);
    const y = centerY + radius * Math.sin(corner);
    block.style.left = x + 'px';
    block.style.top = y + 'px';
    corner += 0.01;
    setTimeout(moveBlock, 10);
}

moveBlock();

// *************************************

let seconds = 0;

const interval = setInterval(() => {
    console.log(seconds);
    seconds++;
    if (seconds > 60) {
        clearInterval(interval);
    }
}, 1000);