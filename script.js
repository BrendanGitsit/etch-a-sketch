//Script to generate boxes within html container

//initialize variables and values for slider and button
let sliderVal = document.getElementById("myRange");
let num = sliderVal.value
let sliderDiv = document.getElementById("sliderDiv");
sliderDiv.innerHTML = `${sliderVal.value} x ${sliderVal.value}`;
let refresh = document.getElementById("refresh");

//initialize Container and piece variables
const myContainer = document.getElementById("container");
let cWidth = myContainer.clientWidth - 10;//ten subtracted for padding
let cHeight = myContainer.clientHeight - 10; //ten subtracted for pading
let pWidth = (cWidth)/num;
let pHeight = (cHeight)/num;

//function for mousedown
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

//function to change color
function changeColor(e){
    if (e.type === 'mouseover' && !mouseDown) return;
    e.target.style.backgroundColor = 'black';
};

//function to clear grid
function clearGrid(){
    while (myContainer.firstChild){
        myContainer.removeChild(myContainer.firstChild);
    };
};

//Function to create a grid of pieces within the container
function createGrid(){
    const myContainer = document.getElementById("container");
    let cWidth = myContainer.clientWidth - 10;//ten subtracted for padding
    let cHeight = myContainer.clientHeight - 10; //ten subtracted for pading
    num = sliderVal.value;
    let pWidth = (cWidth)/num;
    let pHeight = (cHeight)/num;
    for( let i = 0; i < Math.pow(num,2); i++){
        let piece = document.createElement('div');
        piece.style.width = `${pWidth}px`;
        piece.style.height = `${pHeight}px`;
        piece.classList.add("piece");
        piece.addEventListener("mouseover",changeColor);
        myContainer.appendChild(piece);
    };
};


//function to refresh grid when size slider is moved
sliderVal.oninput = function(){
    sliderDiv.innerHTML = `${sliderVal.value} x ${sliderVal.value}`;
    clearGrid();
    createGrid();
};

//function to refresh grid on button click
refresh.onclick = function(){
    clearGrid();
    createGrid();
};


createGrid();

