let body = document.querySelector("body");
let squares = [];
for (i=0; i<16; i++) {
    for (j=0; j<16; j++) {
        const currentSquare = document.createElement("div");
        /*currentSquare.innerHTML = `square${i}+${j}`;*/
        body.appendChild(currentSquare);
        };
    };

