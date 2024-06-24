let body = document.querySelector("body");

for (i=0; i<16; i++) {
    for (j=0; j<16; j++) {
        const currentSquare = document.createElement("div");
        currentSquare.id = `${i}${j}`;
        body.appendChild(currentSquare);
        };
    };
let div = document.querySelectorAll("div");
div.forEach(function (element){
    element.addEventListener("mouseenter", (event) => {
        element.id = "hovered";
    })
}) 
