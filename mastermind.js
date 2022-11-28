var colorSelected;
var misterySequence;
var turn = 1;

const optionsButtons = document.getElementById('options').getElementsByTagName('button');

for(let button of optionsButtons){
    button.onclick = ()=>{
        colorSelected = window.getComputedStyle(button).getPropertyValue("background-color");
        console.log(colorSelected);
    }
}

const tryButtons = document.getElementById('try' + turn).getElementsByTagName('button');

for(let button of tryButtons){
    button.onclick=()=>{
        button.style.backgroundColor = colorSelected;
        colorSelected = NaN;
    }
}




const value2 = document.getElementById('');
const value3 = document.getElementById('');