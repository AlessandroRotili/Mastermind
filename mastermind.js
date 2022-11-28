var colorSelected;
var misterySequence = [];
var isDuplicate = false;
var turn = 1;
var defaultColor;

var misterySequenceButtons = document.getElementById('guess').getElementsByTagName('button');
var optionsButtons = document.getElementById('options').getElementsByTagName('button');
var validateButton = document.getElementById('btn-check');


var tryButtons = document.getElementById('try' + turn).getElementsByTagName('button');
var checkButtons = document.getElementById('check'+ turn).getElementsByTagName('button');

// const Colors = {
// 	Red: "rgb(255, 0, 0)",
// 	Green: "rgb(0, 128, 0)",
// 	Blue: "rgb(0, 0, 255)",
// 	Yellow: "rgb(255, 255, 0)",
//  Purple: "rgb(128, 0, 128)",
//  Orange: "rgb(255, 165, 0)",
//  Cyan: "rgb(0, 255, 255)",
//  Brown: "rgb(165, 42, 42)"
// }

const Colors = [
	"rgb(255, 0, 0)",
	"rgb(0, 128, 0)",
	"rgb(0, 0, 255)",
	"rgb(255, 255, 0)",
    "rgb(128, 0, 128)",
    "rgb(255, 165, 0)",
    "rgb(0, 255, 255)",
    "rgb(165, 42, 42)"
]

function GenerateMisterySequence() {
    let myColors = Colors;
    for(let i = 0; i < misterySequenceButtons.length; i++) {
        let index = Math.floor(Math.random() * (myColors.length -1));
        let randomColor = myColors[index];
        misterySequence.push(randomColor);
        myColors.splice(index, 1);
    }
    console.log(misterySequence);
}


function displayMisterySequence() {
    
    for(let i = 0; i < misterySequenceButtons.length; i++) {
        misterySequenceButtons[i].style.backgroundColor = misterySequence[i];
    }
}

function check() {
    for(let i = 0; i < tryButtons.length; i++) {
        let color = window.getComputedStyle(tryButtons[i]).getPropertyValue("background-color");
        if(misterySequence[i] == color) {
            checkButtons[i].style.backgroundColor= 'red';
        }
        
    }
}



window.onload=() => {
    defaultColor =  window.getComputedStyle(tryButtons[0]).getPropertyValue("background-color");
    GenerateMisterySequence();
    displayMisterySequence();
    deactivateTryButton();
    activateTryButtons();
}    


for(let button of optionsButtons){
    button.onclick = ()=>{
        colorSelected = window.getComputedStyle(button).getPropertyValue("background-color");
            console.log(colorSelected);
    }
}

function deactivateTryButton() {
    let allTryButtons = document.getElementById('tries').getElementsByTagName('button');
    for ( let button of allTryButtons) {
        button.disabled = true;
    }
}

function activateTryButtons() {
    for(let button of tryButtons){
        button.disabled = false;
        button.onclick=()=>{
            button.style.backgroundColor = colorSelected;
            colorSelected = NaN;
        }
    }

    if(turn > 1) {

        let oldTryButtons =document.getElementById('try' + (turn - 1)).getElementsByTagName('button');
        
        for(let button of oldTryButtons){
            button.disabled = true;
        }
    }
}

validateButton.onclick= ()=>{
    
    if (isSequenceValid()) {
        check();
        turn++;
        checkButtons = document.getElementById('check'+ turn).getElementsByTagName('button');
        tryButtons = document.getElementById('try' + turn).getElementsByTagName('button');
        activateTryButtons();
    } else {
        alert("devi selezionare 4 colori");
    }
}

function isSequenceValid() {
    for(let button of tryButtons) {
        if (window.getComputedStyle(button).getPropertyValue("background-color") == defaultColor) {
            return false;
        }         
    }
    return true;    
}

