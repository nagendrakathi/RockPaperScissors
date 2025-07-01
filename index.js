//Selectors
const rock=document.querySelector('#rock');
const paper=document.querySelector('#paper');
const scissor=document.querySelector('#scissor');
const reset=document.querySelector('.reset-btn');
const score1=document.querySelector('.user-score');
const score2=document.querySelector('.comp-score');
const display1=document.querySelector('.computer .comp-option');
const display2=document.querySelector('.computer .results');
const computerSelection=document.querySelector('.computer img');

let userOpt='';
let compOpt='';
let winner='';
let userScore=0;
let compScore=0;
const images=[rock, paper, scissor]
for(let img of images){
    img.addEventListener('click',()=>{
        userOpt=img.getAttribute('id');
        compOpt=play();
        display1.innerHTML='Computer Choose'
        console.log(`${userOpt} ${compOpt}`);
        calcResult(userOpt, compOpt);
        if(winner==='user')
            userScore+=1;
        else if(winner==='computer')
            compScore+=1;
        updateScore(userScore, compScore);
    })
}

reset.addEventListener('click', ()=>{
    score1.innerHTML=0;
    score2.innerHTML=0;
    userScore=0;
    compScore=0;
    userOpt='';
    compOpt='';
    winner='';
    display1.innerHTML='';
    display2.innerHTML='';
    computerSelection.src='';
});

function play(){
    const num=Math.floor(Math.random()*3);
    if(num===0){
        computerSelection.src='images/rock.svg';
        return 'rock';
    }
    else if(num===1){
        computerSelection.src='images/paper.svg';
        return 'paper';
    }  
    else if(num===2){
        computerSelection.src='images/scissor.svg';
        return 'scissor';
    }
}

function calcResult(userOpt, compOpt){
    if(userOpt===compOpt){
        winner='tie';
        display2.innerHTML='Tie';
        // alert(`Tie ${userOpt} ${compOpt}`);
    }
    else if(userOpt==='rock' && compOpt==='paper'){
        winner='computer';
        display2.innerHTML='Computer Won';
        // alert(`Computer Wins ${userOpt} ${compOpt}`);
    }  
    else if(userOpt==='rock' && compOpt==='scissor'){
        winner='user';
        display2.innerHTML='You Won';
        // alert(`You won ${userOpt} ${compOpt}`);
    }  
    else if(userOpt==='paper' && compOpt==='rock'){
        winner='user';
        display2.innerHTML='You Won';
        // alert(`User Won ${userOpt} ${compOpt}`);
    }   
    else if(userOpt==='paper' && compOpt==='scissor'){
        winner='computer';
        display2.innerHTML='Computer Won';
        // alert(`Computer Won ${userOpt} ${compOpt}`);
    }    
    else if(userOpt==='scissor' && compOpt==='rock'){
        winner='computer';
        display2.innerHTML='Computer Won';
        // alert(`Computer Won ${userOpt} ${compOpt}`);
    }
    else if(userOpt==='scissor' && compOpt==='paper'){
        winner='user';
        display2.innerHTML='YOu Won';
        // alert(`You Won ${userOpt} ${compOpt}`);
    }  
}

function updateScore(s1, s2){
    score1.innerHTML=s1;
    score2.innerHTML=s2;
}