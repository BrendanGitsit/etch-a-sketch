//Script to generate boxes within html container
let num = 16;
const myContainer = document.getElementById("container");
let cWidth = myContainer.clientWidth - 10;//ten subtracted for padding
let cHeight = myContainer.clientHeight - 10; //ten subtracted for pading
let pWidth = (cWidth-num)/num;
let pHeight = (cHeight-num)/num;
console.log(pWidth);
console.log(pHeight);


//function for mousedown
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

//function to change color
function changeColor(e){
    if (e.type === 'mouseover' && !mouseDown) return;
    e.target.style.backgroundColor = 'black';
};

//Function to create a grid of pieces within the container
function createGrid(){
    for( let i = 0; i < Math.pow(num,2); i++){
        let piece = document.createElement('div');
        piece.style.width = `${pWidth}px`;
        piece.style.height = `${pHeight}px`;
        piece.classList.add("piece");
        piece.addEventListener("mouseover",changeColor);
        myContainer.appendChild(piece);
    };
};

/*
function updateWidthHeight(){
    const myContainer = document.getElementById("container");
    let cWidth = myContainer.clientWidth - 10;//ten subtracted for padding
    let cHeight = myContainer.clientHeight - 10; //ten subtracted for pading
    let num = 16;
    let pWidth = (cWidth-num)/num;
    let pHeight = (cHeight-num)/num;
}
*/


createGrid();