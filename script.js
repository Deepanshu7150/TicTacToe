console.log("Welcom to tic tac toe"); 
let music = new Audio("img/music.mp3")
let audioTurn = new Audio("img/ting.mp3")
let gameover = new Audio("img/gameover.mp3")


let isgameover = false;
let  turn = "X"

// Function to change turn 
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}


// Function to check winner 
const checkWin = ()=>{
let boxtext = document.getElementsByClassName('boxtext');
let Wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
Wins.forEach(e =>{
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!=="") ) {
        document.querySelector('.info').innerText = boxText = boxtext[e[0]].innerText + " Won"
        gameover.play();
        isgameover = true
        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "150px";
    }
})
}


// game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ""){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerText = "turn for      " + turn;
            // gameover.play();
        }
        }
    })
})


// reset button

reset.addEventListener('click', ()=>{
    let boxtextz = document.querySelectorAll('.boxtext');
Array.from(boxtextz).forEach(element =>{
    element.innerText = ""
})
turn = "X"
isgameover = false
document.getElementsByClassName("info")[0].innerText = "turn for      " + turn;
document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px";
// gameover.play();
audioTurn.play();
})