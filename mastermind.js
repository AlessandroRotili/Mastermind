var colorSelected;
var misterySequence;
var isDuplicate = false;
var turn = 1;
var defaultColor;

const optionsButtons = document.getElementById('options').getElementsByTagName('button');
const tryButtons = document.getElementById('try' + turn).getElementsByTagName('button');
const buttonCheck = document.getElementById('btn-check');

const Colors = {
	Red: "rgb(255, 0, 0)",
	Green: "rgb(0, 128, 0)",
	Blue: "rgb(0, 0, 255)",
	Yellow: "rgb(255, 255, 0)",
    Purple: "rgb(128, 0, 128)",
    Orange: "rgb(255, 165, 0)",
    Cyan: "rgb(0, 255, 255)",
    Brown: "rgb(165, 42, 42)"
}



window.onload=() => {
    defaultColor =  window.getComputedStyle(tryButtons[0]).getPropertyValue("background-color");
}    


for(let button of optionsButtons){
    button.onclick = ()=>{
        colorSelected = window.getComputedStyle(button).getPropertyValue("background-color");
            console.log(colorSelected);
    }
}


for(let button of tryButtons){
    button.onclick=()=>{
        button.style.backgroundColor = colorSelected;
        colorSelected = NaN;
    }
}

buttonCheck.onclick= ()=>{
    for(let button of tryButtons) {
        if (window.getComputedStyle(button).getPropertyValue("background-color") == defaultColor) {
            alert("devi selezionare 4 colori");
            break;
        }
    }    
}


const value3 = document.getElementById('');


