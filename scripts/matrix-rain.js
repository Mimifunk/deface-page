const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");

let columns;
let charSize;
let matrix = [];

const characters = "ｷﾆﾜﾒｼｻﾘｳｳﾗｵｻｴｱｵｾﾊｹｰﾃｷｼﾋﾍﾑﾕﾑｹｽﾏﾗﾓﾋﾂﾃﾎﾐﾐｾﾀﾈﾓｴﾏﾈﾒﾊﾜﾂｰｶﾘｱﾆﾅﾇﾅﾎｶﾕ";

const speed = 0.5;
const backgroundColorHex = "#000000";
const backgroundOpacity = 0.09;
const characterSize = 16;

function initializeMatrix() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    columns = Math.floor(canvas.width / characterSize);
    charSize = characterSize;

    matrix = [];
    for (let i = 0; i < columns; i++) {
        matrix[i] = Math.floor(Math.random() * canvas.height / charSize) + 1;
    }
}

function drawMatrix() {
    const red = parseInt(backgroundColorHex.slice(1, 3), 16);
    const green = parseInt(backgroundColorHex.slice(3, 5), 16);
    const blue = parseInt(backgroundColorHex.slice(5, 7), 16);

    ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${backgroundOpacity})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = charSize + "px monospace";

    for (let i = 0; i < columns; i++) {
        const char = characters[Math.floor(Math.random() * characters.length)];

        const x = i * charSize;
        let y = matrix[i] * charSize;

        if (y >= canvas.height && Math.random() > 0.975) {
            y = 0;
            matrix[i] = 0;
        }

        const opacity = 1 - (matrix[i] / canvas.height);

        let color;

        if (Math.random() > 0.5) {
            color = "#ffffff";
        } else {
            color = "#ff0000";
        }

        ctx.fillStyle = `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, ${opacity.toFixed(2)})`;

        ctx.fillText(char, x, y);

        matrix[i] += speed;
    }
}

function adjustCanvasSize() {
    initializeMatrix();
    drawMatrix();
}

function animate() {
    requestAnimationFrame(animate);
    drawMatrix();
}

initializeMatrix();
window.addEventListener("resize", adjustCanvasSize);
animate();
