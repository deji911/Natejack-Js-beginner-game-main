document.getElementById("progress-bar").style.display = 'none';
document.getElementById('load').style.display = 'none';
let contBtn = document.getElementById('cont');
let startBtn = document.getElementById('newPlayer');
let input = document.getElementById('input');
let input2 = document.getElementById('input-2');
start.style.display  = 'block';
let playTime = localStorage.getItem('play-time');
let playDate = localStorage.getItem('play-date');

start.addEventListener('click', inputUser);
function inputUser(){
    document.getElementById('form').style.display = 'block';
    start.style.display  = 'none';
}
let userInput;
let playerName = localStorage.getItem('user-name');
document.getElementById('btnSubmit').addEventListener('click', getUserInput);

function getUserInput(){
   userInput = input.value;
    document.getElementById('form').style.display = 'none';
    setTimeout(() => {
        document.getElementById('load').style.display = 'block';
    }, 600);
    setTimeout(() => {
      if(playerName === userInput || playerName === null){
        setTimeout(() => {
          loader();
      }, 1000);
      }
      else{
        document.getElementById('modal-4').style.display = 'block';
        userInput = playerName;
        document.getElementById('not-player').innerHTML = `${playerName} ${playDate} ${playTime}`;
      };
    }, 1000);
    
};
var timeleft2 = -1;

function loader(){
    setInterval(function(){
        timeleft2 ++;
        document.getElementById("progress-bar").style.display = 'block';
        document.getElementById("progress-bar").value += timeleft2;
        localStorage.setItem('user-name', userInput);
        if(timeleft2 >=9){
          document.getElementById("progress-bar").style.display = 'none';
          document.getElementById('load').style.display = 'none';
        //   clearInterval(loader);
          window.location.replace('./game.html');
        };
      },1500);
};
 

contBtn.addEventListener('click', continueSavedGame);

function continueSavedGame(){
  document.getElementById('modal-4').style.display = 'none';
  loader();
}

startBtn.addEventListener('click', showForm);

function showForm(){
  document.getElementById('form-2').style.display = 'initial';
};

document.getElementById('btnSubmit-2').addEventListener('click', getUserInput2);

function getUserInput2(){
  userInput = input2.value;
   document.getElementById('modal-4').style.display = 'none';
   setTimeout(() => {
       document.getElementById('load').style.display = 'block';
   }, 600);
   setTimeout(() => {
    loader();
    localStorage.removeItem('bot-money');
    localStorage.removeItem('player-money');
}, 1000);  
};

input.onkeypress = (event) =>{
  let x = event.key;
  if(x === 'Enter'){
    getUserInput();
    event.preventDefault();
  }
  console.log(x);
};
input2.onkeypress = (event) =>{
  let x = event.key;
  if(x === 'Enter'){
    getUserInput2();
    event.preventDefault();
  }
  console.log(x);
};