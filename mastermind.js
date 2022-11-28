var colorSelected;
var misterySequence;

const optionsButtons = document.getElementById('options').getElementsByTagName('button');

for(let button of optionsButtons){
    button.onclick = ()=>{
        colorSelected = window.getComputedStyle(button).getPropertyValue("background-color");
        console.log(colorSelected);
    }
}

const tries = document.getElementById('tries').getElementsByTagName('button');

const value2 = document.getElementById('');
const value3 = document.getElementById('');