
let pixelCanvas = document.getElementById("pixelCanvas");

let colorPicker = document.getElementById("colorPicker");

let clearBtn = document.getElementById("clearBtn");

let saveBtn = document.getElementById("saveBtn");

let gridSize = 16;

function createGrid(size) {
    pixelCanvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    pixelCanvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    pixelCanvas.innerHTML = "";

    for (let i = 0; i < size * size; i++) {
        let pixel = document.createElement("div");
        pixel.classList.add("pixel");

        pixel.addEventListener("click", () => {
            pixel.style.backgroundColor = colorPicker.value;
        });

        pixelCanvas.appendChild(pixel);
    }
}



clearBtn.addEventListener("click", () => {
    document.querySelectorAll(".pixel").forEach(pixel => {
        pixel.style.backgroundColor = "white";
    });
});



saveBtn.addEventListener("click", () => {
    html2canvas(pixelCanvas).then(canvas => {
        let link = document.createElement("a");
        link.download = "pixel-art.png";
        link.href = canvas.toDataURL();
        link.click();
    });
});


createGrid(gridSize);


