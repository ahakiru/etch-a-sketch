const container = document.querySelector(".container");

let clearColor = document.querySelector("#clearColor");
let black = document.querySelector("#black");
let random = document.querySelector("#random");
let grey = document.querySelector("#grey");

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

clearColor.addEventListener("click", function () {
    div.forEach(function (square) {
        square.id = "";
        if (square.style.opacity !== "") {
            square.style.opacity = 0;
        } else {
            square.style.backgroundColor = "";
        };
    });
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
grey.addEventListener("click", function () {
    clearGrid();
    createGrid();
    div.forEach(function (square) {
        square.style.backgroundColor = "black";
        square.style.opacity = 0;
        square.addEventListener("mouseenter", (event) => {
            if (parseFloat(square.style.opacity) < 1) {
                square.style.opacity = parseFloat(square.style.opacity) + 0.1;
            } ;
         });
     });

})
