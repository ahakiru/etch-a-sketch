const container = document.querySelector(".container");

let btn = document.querySelector("button");

function clearGrid() {
    container.innerHTML = '';
};
let div = container.querySelectorAll("div");
btn.addEventListener("click", function() {
    clearGrid();
    let promptString = prompt("How many squares should be in each row of the grid?", "");
    let userEntry = parseInt(promptString);
    if(userEntry > 100) {
        userEntry = 100;
    };
    for (i=0; i<userEntry; i++) {
        for (j=0; j<userEntry; j++) {
            const currentSquare = document.createElement("div");
            currentSquare.id = `${i}${j}`;
            container.appendChild(currentSquare);
            };
        };
    div = container.querySelectorAll("div");
    let squareSize = 400/userEntry;
    squareSize = squareSize+'px';
    div.forEach(function (element){
        element.style.height = squareSize;
        element.style.width = squareSize;
     });
    div.forEach(function (square) {
       square.addEventListener("mouseenter", (event) => {
           square.id = "hovered";
        });
    });
});

container.addEventListener("click", (event) => {
    console.log("click");
});