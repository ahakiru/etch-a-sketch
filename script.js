const container = document.querySelector(".container");

let create = document.querySelector("#create");
let black = document.querySelector("#black");
let random = document.querySelector("#random");

function clearGrid() {
    container.innerHTML = '';
};
function createGrid() {
    let promptString = prompt("How many squares should be in each row of the grid?", "");
    let userEntry = parseInt(promptString);
    if(userEntry > 100) {
        userEntry = 100;
        alert("The grid is generated to a maximum of 100 squares per row.")
    };
    for (i=0; i<userEntry; i++) {
        for (j=0; j<userEntry; j++) {
            const currentSquare = document.createElement("div");
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
};
function randomColor() {
    let value = Math.floor(Math.random() * 255);
    return value;
};

let div = container.querySelectorAll("div");

create.addEventListener("click", function () {
    clearGrid(); /* removes grid, doesn't create a new one yet*/
});

black.addEventListener("click", function() {
    clearGrid();
    createGrid();
    div.forEach(function (square) {
       square.addEventListener("mouseenter", (event) => {
           square.id = "blackened";
        });
    });
});
random.addEventListener("click", function() {
    clearGrid();
    createGrid();
    div.forEach(function (square) {
        square.addEventListener("mouseenter", (event) => {
            let value1 = randomColor();
            let value2 = randomColor();
            let value3 = randomColor();
            square.style.backgroundColor = `rgb(${value1}, ${value2}, ${value3})`;
         });
     });
})

container.addEventListener("click", (event) => {
    console.log("click");
});