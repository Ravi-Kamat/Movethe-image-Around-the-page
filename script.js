const image = document.getElementById("image");
let positionX = 0;
let positionY = 0;
const moveDistance = 10;

function moveImage(direction) {
    switch (direction) {
        case "ArrowUp":
            positionY -= moveDistance;
            break;
        case "ArrowDown":
            positionY += moveDistance;
            break;
        case "ArrowLeft":
            positionX -= moveDistance;
            break;
        case "ArrowRight":
            positionX += moveDistance;
            break;
    }

    image.style.top = `${positionY}px`;
    image.style.left = `${positionX}px`;
}

document.addEventListener("keydown", function (event) {
    moveImage(event.key);
});