// let a = 'we';
// let b ='tou';
// let c = 'show';
// let d = 'like';
// let e = 'at';
// let arr = [a,b,c,d,e];

// function getarr(){
//     let arrr = Math.floor(Math.random()*5)
//     console.log(arr[arrr]);
// }
// getarr();
let botCash = document.getElementById('bot-cash');
let botSumEl = document.getElementById('bot-sum');
let botCardEl = document.getElementById('bot-cards');
let potEl = document.getElementById('pot');
let playerCardEl = document.getElementById('player-cards');
let playerSumEl = document.getElementById('player-sum');
let playBtn = document.getElementById('play-btn');
let hitBtn = document.getElementById('hit-btn');
let standBtn = document.getElementById('dob-btn');
// let revealBtn = document.getElementById('reveal-btn');
let playerName = document.getElementById('user-name');
let playerCash = document.getElementById('player-cash');
let aceDrawn = document.getElementById('modal');
let tieDraw = document.getElementById('modal-1');
let aceDrawnEl = document.getElementById('cards-drawn');
let win = document.getElementById('win');
let loose = document.getElementById('loose');
let ChoiceEl = document.getElementById('bot-choice');
let drawTieButton = document.getElementById("tie-button");
let drawTieMsg = document.getElementById("tie-msg");
let playMsg = document.getElementById("play-btn-msg");
let playCashMsg = document.getElementById("player-cash-msg");
let botCashMsg = document.getElementById("bot-cash-msg");
let start = document.getElementById("progress-bar");
hitBtn.style.display = 'none';
standBtn.style.display = 'none';
// revealBtn.style.display = 'none';


let playerChoice;
let playerCards = [];
let botCards = [];
let playerSum = 0;
let botSum = 0;
let newCard = 0;
let botNewCard = 0;
isAlive = false;
let firstCard;
let secondCard;
// let botChoice = [];
let choice = [];
let choose = 0;
let pot = 0;

let playerData = {
    name: localStorage.getItem('user-name')||'Player',
    money:localStorage.getItem('player-money') || 1000
 };
 let botData ={
    money:localStorage.getItem('bot-money') || 1000
 };



 let X = ['X','X'];




 function newX(){
    let newX = 'X';
    X.push(newX);
    renderCards();
 };



 setTimeout(() => {
    // ChoiceEl.innerHTML = '<p class="choice">Bot Ready</p>';
    let msg = 'Bot Ready'
    renderChoiceMsg(msg,'bot');
 }, 600);


 

    botCash.innerHTML = `$${botData.money}`;
    playerCash.innerHTML = `$${playerData.money}`;
    potEl.innerHTML  =`  $${pot}`;
    playerName.innerHTML = `${playerData.name}`;
    // playBtn.disabled = true;
    let txt1 = "You've already Placed a bet"
    let txt = 'Not Enough Cash, Bet Lower';
    let txt2 = "Bot Wants To Bet Lower";
function bet_50 (){

    if(playerData.money < 50){
        renderChoiceMsg(txt,'player');
        setTimeout(() => {
            ChoiceEl.innerHTML = '';
        }, 1000);
    }
    else if(botData.money < 50){
        renderChoiceMsg(txt2,'bot');
        setTimeout(() => {
            ChoiceEl.innerHTML = '';
        }, 1000);
    }
    else if(playerData.money > 50 && pot > 49){
        renderChoiceMsg(txt1,'player');
        setTimeout(() => {
            ChoiceEl.innerHTML = '';
        }, 1000);
    }
    else{
        pot += 100;
        playerData.money -= 50;
        botData.money -=50;
        botCash.innerHTML = `$${botData.money}`;
        playerCash.innerHTML = `$${playerData.money}`;
        potEl.innerHTML  =`  $${pot}`;
        playCashMsg.innerHTML = ` -$50`;
        botCashMsg.innerHTML = ` -$50`;
        playCashMsg.style.color = 'red';
        botCashMsg.style.color = 'red';
        playCashMsg.style.display = 'initial';
        botCashMsg.style.display = 'initial';
        setTimeout(() => {
            playCashMsg.style.display = 'none';
            botCashMsg.style.display = 'none';
        }, 600);
        // playBtn.disabled = false;
    };
   
};
function bet_100 (){
    if(playerData.money < 100){
        renderChoiceMsg(txt,'player');
        setTimeout(() => {
            ChoiceEl.innerHTML = '';
        }, 1000);
    }
    else if(playerData.money > 100 && pot > 49){
        renderChoiceMsg(txt1,'player');
        setTimeout(() => {
            ChoiceEl.innerHTML = '';
        }, 1000);
    }
    else if(botData.money < 100){
        renderChoiceMsg(txt2,'bot');
        setTimeout(() => {
            ChoiceEl.innerHTML = '';
        }, 1000);
    }
    else{
        pot += 200;
        playerData.money -= 100;
        botData.money -= 100;
        botCash.innerHTML = `$${botData.money}`;
        playerCash.innerHTML = `$${playerData.money}`;
        potEl.innerHTML  =`$${pot}`;
        playCashMsg.innerHTML = ` -$100`;
        botCashMsg.innerHTML = ` -$100`;
        playCashMsg.style.color = 'red';
        botCashMsg.style.color = 'red';
        playCashMsg.style.display = 'initial';
        botCashMsg.style.display = 'initial';
        setTimeout(() => {
            playCashMsg.style.display = 'none';
            botCashMsg.style.display = 'none';
        }, 600);
        // playBtn.disabled = false;
    };
  
};
function bet_200 (){
    if(playerData.money < 200){
        renderChoiceMsg(txt,'player');
        setTimeout(() => {
            ChoiceEl.innerHTML = '';
        }, 1000);
    }
    else if(playerData.money > 200 && pot > 49){
        renderChoiceMsg(txt1,'player');
        setTimeout(() => {
            ChoiceEl.innerHTML = '';
        }, 1000);
    }
    else if(botData.money < 200){
        renderChoiceMsg(txt2,'bot');
        setTimeout(() => {
            ChoiceEl.innerHTML = '';
        }, 1000);
    }
    else{
        pot += 400;
        playerData.money -= 200;
        botData.money -= 200;
        botCash.innerHTML = `$${botData.money}`
        playerCash.innerHTML = `$${playerData.money}`
        potEl.innerHTML  =`  $${pot}`;
        playCashMsg.innerHTML = ` -$200`;
        botCashMsg.innerHTML = ` -$200`;
        playCashMsg.style.color = 'red';
        botCashMsg.style.color = 'red';
        playCashMsg.style.display = 'initial';
        botCashMsg.style.display = 'initial';
        setTimeout(() => {
            playCashMsg.style.display = 'none';
            botCashMsg.style.display = 'none';
        }, 600);
        // playBtn.disabled = false;
    };
   
};

// document.getElementById('500').addEventListener('click',bet_500);
function bet_500 (){
    
    if(playerData.money < 500){
        renderChoiceMsg(txt,'player');
        setTimeout(() => {
            ChoiceEl.innerHTML = '';
        }, 1000);
    }
    else if(playerData.money > 500 && pot > 49){
        renderChoiceMsg(txt1,'player');
        setTimeout(() => {
            ChoiceEl.innerHTML = '';
        }, 1000);
    }
    else if(botData.money < 500){
        renderChoiceMsg(txt2,'bot');
        setTimeout(() => {
            ChoiceEl.innerHTML = '';
        }, 1000);
    }
    else{
        pot += 1000;
    playerData.money -= 500;
    botData.money -=500;
    botCash.innerHTML = `$${botData.money}`
    playerCash.innerHTML = `$${playerData.money}`
    potEl.innerHTML  =`  $${pot}`;
    playCashMsg.innerHTML = ` -$500`;
    botCashMsg.innerHTML = ` -$500`;
    playCashMsg.style.color = 'red';
    botCashMsg.style.color = 'red';
    playCashMsg.style.display = 'initial';
    botCashMsg.style.display = 'initial';
    setTimeout(() => {
        playCashMsg.style.display = 'none';
        botCashMsg.style.display = 'none';
    }, 600);
    // playBtn.disabled = false;
    };
};


// function playBtnMsg(){
//     playMsg.style.display = 'initial';
// };

//Function to generate random numbers
function getPlayerRandomNumb(){
    let random = Math.floor(Math.random()*13)+1;
    if(random === 11){
        random = 'J';
        return random;
    }
    else if(random === 1){
        random = 'A';
        return random;
    }
    else if(random === 12){
        random ='Q';
        return random;
    }
    else if(random === 13){
        random ='K';
        return random;
    }
    else{
        return random;
    }
};


//function to generate bots random number
function getBotRandomNumb(){
    let random = Math.floor(Math.random()*13)+1;
    if(random === 11){
        random = 'J';
        return random;
    }
    else if(random === 1){
        random = 'A';
        return random;
    }
    else if(random === 12){
        random ='Q';
        return random;
    }
    else if(random === 13){
        random ='K';
        return random;
    }
    else{
        return random;
    }
};
 

//function to get players random cards
function playerRandomNumbersConditional(playerCards){
    firstCard = getPlayerRandomNumb();
    secondCard = getPlayerRandomNumb();
    let ace = "Player Got Two Ace's";
    let sum = firstCard + secondCard;
    if(firstCard === 'Q' && secondCard ==='J' || firstCard === 'Q' && secondCard === 'K' || firstCard === 'K' && secondCard === 'Q' || firstCard === 'K' && secondCard ==='J' || firstCard ==='J' && secondCard  === 'K' || firstCard ==='J' && secondCard === 'Q'){
        sum = 10 + 10;
    }
    else if(firstCard === 'Q' && secondCard === 'Q' || firstCard === 'J'&& secondCard === 'J' || firstCard === 'K' && secondCard === 'K'){
        sum = 10 + 10;
    }
    else if(firstCard === 'Q' && secondCard ==='A' || firstCard === 'K' && secondCard ==='A' || firstCard === 'J' && secondCard ==='A'){
        sum = 10 + 1;
    }
    else if(firstCard === 'A' && secondCard ==='Q' || firstCard === 'A' && secondCard ==='K' || firstCard === 'A' && secondCard ==='J'){
        sum = 10 + 1;
    }
    else if(firstCard === 'A' && secondCard === 'A'){
        sum = 1 + 1;
        hitBtn.disabled = true;
        standBtn.disabled = true;
        setTimeout(() => {
            showBotCards();
            playCashMsg.style.display = 'initial';
            playCashMsg.style.color = 'yellowgreen';
            playCashMsg.innerHTML = `+$${pot}`;
            botCash.innerHTML = `$${playerData.money + pot}`;
            playerData.money += pot;
            potEl.innerHTML = `$${0}`;
             document.getElementById('Ace-win').style.display = 'block'; 
             renderChoiceMsg(ace,'player')
            }, 3000);
            setTimeout(() => {
                document.getElementById('Ace-win').style.display = 'none'; 
                countdown();
            }, 6000);
    }
    else if(firstCard === 'Q' || firstCard === 'J' || firstCard === 'K'){
        sum = 10 + secondCard;
    }
    else if(secondCard === 'Q' || secondCard === 'J' || secondCard === 'K'){
        sum = 10 + firstCard;
    }
    else if(firstCard === 'A'){
        sum = 1 + secondCard;
    }
    else if(secondCard === 'A'){
        sum = firstCard + 1;
    }
    else{}
    playerCards = [firstCard,secondCard]
    getPlayerSum(sum);
    return playerCards;
}


function playerChoice_1(value){
    let c =  Number(value);
    console.log(c);
}
// console.log(playerChoice);



//Function to get Bots Card
function  botRandomConditional(botCards){
    firstCard = getBotRandomNumb();
    secondCard = getBotRandomNumb();
    let sum = firstCard + secondCard;
    let ace = "Bot Got Two Ace's"
    if(firstCard === 'Q' && secondCard ==='J' || firstCard === 'Q' && secondCard === 'K' || firstCard === 'K' && secondCard === 'Q' || firstCard === 'K' && secondCard ==='J' || firstCard ==='J' && secondCard  === 'K' || firstCard ==='J' && secondCard === 'Q'){
        sum = 10 + 10;
    }
    else if(firstCard === 'Q' && secondCard === 'Q' || firstCard === 'J'&& secondCard === 'J' || firstCard === 'K' && secondCard === 'K'){
        sum = 10 + 10;
    }
    else if(firstCard === 'Q' && secondCard ==='A' || firstCard === 'K' && secondCard ==='A' || firstCard === 'J' && secondCard ==='A'){
        sum = 10 + 1;
    }
    else if(firstCard === 'A' && secondCard ==='Q' || firstCard === 'A' && secondCard ==='K' || firstCard === 'A' && secondCard ==='J'){
        sum = 10 + 1;
    }
    else if(firstCard ==='A' && secondCard === 'A'){
        sum = 1 + 1;
        hitBtn.disabled = true;
        standBtn.disabled = true;
        
        setTimeout(() => {
        showBotCards();
        botCashMsg.style.display = 'initial';
        botCashMsg.style.color = 'yellowgreen';
        botCashMsg.innerHTML = `+$${pot}`;
        botData.money += pot;
        botCash.innerHTML = `$${botData.money + pot}`;
        potEl.innerHTML = `$${0}`;
         document.getElementById('Ace-lose').style.display = 'block'; 
         renderChoiceMsg(ace,'bot')
        }, 3000);
        setTimeout(() => {
            document.getElementById('Ace-lose').style.display = 'none'; 
            countdown();
        }, 6000);

    }
    else if(firstCard === 'Q' || firstCard === 'J' || firstCard === 'K'){
        sum = 10 + secondCard;
    }
    else if(secondCard === 'Q' || secondCard === 'J' || secondCard === 'K'){
        sum = 10 + firstCard;
    }
    else if(firstCard === 'A'){
        sum = 1 + secondCard;
    }
    else if(secondCard === 'A'){
        sum = firstCard + 1;
    }
    else{};
    botCards = [firstCard,secondCard];
    getBotSum(sum);
    return botCards;
    
};




//function to get first two cards sum of both player and bot
function getPlayerSum(sum){
playerSum = sum;
}
function getBotSum(sum){
    botSum = sum;
}


//function to start game and render first two cards
playBtn.addEventListener('click', playGame);

function playGame(){
   if(pot === 0){
    playMsg.style.display = 'block'
    setTimeout(() => {
        playMsg.style.display = 'none'
    }, 600);
   }
   else{
    playerCards = playerRandomNumbersConditional(playerCards);
    botCards = botRandomConditional(botCards);
    let botMsg = 'Bot Picks Two Cards';
    let playerMsg = `${playerData.name} Picks Two Cards`;
    renderChoiceMsg(botMsg,'bot');
    renderChoiceMsg(playerMsg,'player');
    setTimeout(() => {
        
    },2000 );
    renderCards();
    playBtn.style.display = 'none';
    hitBtn.style.display = 'initial';
    standBtn.style.display = 'initial';
    // revealBtn.style.display = 'initial';
   };
}

 function renderCards(){
    let playerCard = '';
    for(let i of playerCards){
        playerCard += `<div class="player-cards-bg"> ${i} </div> `;
    }
    let botX = '';
    for(let w of X){
        botX += `<div class="bot-cards-bg"> ${w} </div>`;
    }
    botCardEl.innerHTML = botX;
    botSumEl.innerHTML = 'X';
    
    playerCardEl.innerHTML = playerCard;
    // botCardEl.innerHTML = `<div class="bot-cards-bg">X</div>`;
    // botCardEl.innerHTML += `<div class="bot-cards-bg">X</div>`;
    // console.log(playerCard);
    playerSumEl.innerHTML = playerSum;
 };



//function to let bot draw a new Card
function botHit(){
    let botsNewCard = getBotRandomNumb();
    botCards.push(botsNewCard);
    if(botsNewCard === 'Q' || botsNewCard === 'J' || botsNewCard === 'K'){
        botSum+=10;
        // botCardEl.innerHTML += `<div class="bot-cards-bg">X</div>`;
        newX();
    }
    else if( botsNewCard === 'A'){
        botSum+=1;
        newX();
        // botCardEl.innerHTML += `<div class="bot-cards-bg">X</div>`;
    }
    else{
        botSum += botsNewCard;
        newX();
        // botCardEl.innerHTML += `<div class="bot-cards-bg">X</div>`;
    };
    // ChoiceEl.innerHTML = `<p class="choice"> Bot Draws New Card </p>`;
    let botMsg = 'Bot Draws New Card';
    renderChoiceMsg(botMsg,'bot');
 };

function renderChoiceMsg(msg,type){
    let className = 'bot-choice';
    if(type === 'player'){
        className = 'player-choice';
    }
    else if(type === 'table'){
        className = 'table';
    }
    else{};
    let messageEl = document.createElement('div');
    let txtNode = document.createTextNode(msg);
    messageEl.classList.add(className);
    messageEl.append(txtNode);
    ChoiceEl.append(messageEl);
}

 //Function to let bot decide either to draw a new card or stand
 function botHitOrStand(){
    let randomChoice = Math.floor(Math.random()*2);
    if(randomChoice === 0 && botSum <= 17){
        botHit();
    }
    else if(randomChoice === 1 && botSum <= 17){
        botHit();
    }
    else{
        // ChoiceEl.innerHTML = `<p class="choice"> Bot Stands </p>`;
        let botMsg = 'Bot Stands';
        renderChoiceMsg(botMsg,'bot');
    }
 };

 
//  newCardRandomBot(botNewCard);
//  console.log(newCardRandomBot(botNewCard));





 //function to generate bots new card
function newCardRandomBot(botNewCard){
    botNewCard = getBotRandomNumb();
    let botChoice = ['A',11]
    let randomBotChoice = Math.floor(Math.random()*2)
     if(botNewCard === 'A' && botSum < 5 ){
        botNewCard = botChoice[1];
        return botNewCard;
    }
    else if(botNewCard === 'A' && botSum >= 5){
        botNewCard = botChoice[randomBotChoice];
        return botNewCard;
    }
    else if(botNewCard === 'A' && botSum > 17){
        botNewCard = botChoice[0];
        return botNewCard;
     }
    else{
        return botNewCard;
    }

};





//function to generate player new random card
function newCardRandom(newCard){
    newCard = getPlayerRandomNumb();
    if(newCard === 1){
    };
    return newCard;
};

 //function to let player draw a new card
 hitBtn.addEventListener('click',playerNewCard);
 function playerNewCard(){
    newCard = getPlayerRandomNumb();
    playerCards.push(newCard);
    if(newCard === 'Q' || newCard === 'K' || newCard === 'J'){
        playerSum +=10;
    }
    else if(newCard === 'A'){
        playerSum +=1;
    }
    else{
        playerSum += newCard;
    };
    renderCards();
    botHitOrStand();
    // ChoiceEl.innerHTML = `<p class="player-choice">Player Draws New Card</p>`;
    let playerMsg = `${playerData.name} Draws New Card`;
    renderChoiceMsg(playerMsg,'player');
    if(playerSum >= 21){
        hitBtn.disabled = true;
    };
 };



 //function to reveal bots cards
 function showBotCards(){
    let botCard = '';
    for(let w = 0; w<botCards.length; w++){
        botCard += `<div class="bot-cards-bg"> ${botCards[w]} </div>`;
    }
    botCardEl.innerHTML = botCard;
    botSumEl.innerHTML = botSum;
    
 };


 //function 
 drawTieButton.addEventListener('click', tieMiniGame);

 function getPlayerTieCards (){
    let playerCard = getPlayerRandomNumb();
    playerCardEl.innerHTML = `<div class="player-cards-bg"> ${playerCard} </div> `;
    if(playerCard === 'Q' || playerCard === 'K' || playerCard === 'J' ){
        return 10;
    }
    else if(playerCard ==='A'){
        return 1;
    }
    else{
        return playerCard
    };
 };


 function getBotTieCards (){
    let botCard = getBotRandomNumb();
    botCardEl.innerHTML = `<div class="bot-cards-bg"> ${botCard} </div>`;
    if(botCard === 'Q' || botCard === 'K' || botCard === 'J' ){
        return 10;
    }
    else if(botCard ==='A'){
        return 1;
    }
    else{
        return botCard
    };
   
 };

 function tieMiniGame (){
    let playerCard = getPlayerTieCards();
    let botCard = getBotTieCards();
    botSum = botCard;
    playerSum = playerCard;
    playerSumEl.innerHTML = playerSum;
    botSumEl.innerHTML = botSum;
    tieDraw.style.display = 'none';
    setTimeout(() => {
        renderGame(); 
    }, 2000);
    
 }
 




 //function to render game, reaveal bots cards and select winner!!!!
 standBtn.addEventListener('click',noNewCard);

 function noNewCard(){
    botHitOrStand();
    // ChoiceEl.innerHTML = `<p class="player-choice">Player Stands</p>`;
    let playerMsg = `${playerData.name} Stands`;
    renderChoiceMsg(playerMsg,'player');
    

    setTimeout(() => {
        let table = 'Cards on Table';
        renderChoiceMsg(table,'table');
        showBotCards();
        standBtn.disabled = true;
        hitBtn.disabled = true;
    }, 2000);
    
    setTimeout(() => {
        renderGame();
    }, 2900);
    // ChoiceEl.innerHTML = ''
 };


 function renderGame(){

    if(playerSum === 1 && botSum > 1){
        win.style.display = 'block';
        playCashMsg.style.display = 'initial';
        playerCash.innerHTML = `$${playerData.money + pot}`;
        playCashMsg.style.color = 'yellowgreen';
        playCashMsg.innerHTML = `+$${pot}`;
        potEl.innerHTML = `$${0}`;
        playerData.money += pot;
        setTimeout(() => {
            win.style.display = 'none';
        }, 4000);
        setTimeout(() => {
            countdown();
        }, 5000);
    }

    else if(botSum === 1 && playerSum > 1){
        loose.style.display = 'block';
        botCashMsg.style.display = 'initial';
        botCashMsg.style.color = 'yellowgreen';
        botCashMsg.innerHTML = `+$${pot}`;
        botCash.innerHTML = `$${botData.money + pot}`;
        potEl.innerHTML = `$${0}`;
        botData.money += pot;
        setTimeout(() => {
            loose.style.display = 'none';
        }, 4000);
        setTimeout(() => {
            countdown();
        }, 5000);
    }

    else if(playerSum > 21 && botSum > 21){

        setTimeout(() => {
            playerSumEl.innerHTML =''
            botSumEl.innerHTML = ''
        }, 500); 
        drawTieMsg.innerHTML = `<p>You and Bot got Higher Than 21<span class="text-success"> TIE!!!</span></p>`;
        tieDraw.style.display = 'block';
    }

    else if(playerSum === botSum){
        setTimeout(() => {
            playerSumEl.innerHTML=''
            botSumEl.innerHTML= ''
        }, 500);
        tieDraw.style.display = 'block';
    }

    else if(playerSum === 21 && botSum > 21){
        win.style.display = 'block';
        playCashMsg.style.display = 'initial';
        playCashMsg.style.color = 'yellowgreen';
        playCashMsg.innerHTML = `+$${pot}`;
        playerCash.innerHTML = `$${playerData.money + pot}`;
        potEl.innerHTML = `$${0}`;
        playerData.money += pot;
        setTimeout(() => {
            win.style.display = 'none';
        }, 4000);
        setTimeout(() => {
            countdown();
        }, 5000);
        
    }

    else if(botSum===21 && playerSum > 21){
        loose.style.display = 'block';
        botCashMsg.style.display = 'initial';
        botCashMsg.style.color = 'yellowgreen';
        botCashMsg.innerHTML = `+$${pot}`;
        botCash.innerHTML = `$${botData.money + pot}`;
        potEl.innerHTML = `$${0}`;
        botData.money += pot;
        setTimeout(() => {
            loose.style.display = 'none';
    }, 4000);
    setTimeout(() => {
        countdown();
    }, 5000);
}


else if (playerSum === 21 && botSum < 21){
    win.style.display = 'block';
    playCashMsg.style.display = 'initial';
    playerCash.innerHTML = `$${playerData.money + pot}`;
    playCashMsg.style.color = 'yellowgreen';
    playCashMsg.innerHTML = `+$${pot}`;
    potEl.innerHTML = `$${0}`;
    playerData.money += pot;
    setTimeout(() => {
        win.style.display = 'none';
    }, 4000);
    setTimeout(() => {
        countdown();
    }, 5000);
}


else if (playerSum < 21 && botSum > 21){
    win.style.display = 'block';
    playCashMsg.style.display = 'initial';
    playerCash.innerHTML = `$${playerData.money + pot}`;
    playCashMsg.style.color = 'yellowgreen';
    playCashMsg.innerHTML = `+$${pot}`;
    potEl.innerHTML = `$${0}`;
    playerData.money += pot;
    setTimeout(() => {
        win.style.display = 'none';
    }, 4000);
    setTimeout(() => {
        countdown();
    }, 5000);
}

else if (botSum < 21  && playerSum >21 ){
    loose.style.display = 'block';
    botCashMsg.style.display = 'initial';
    botCashMsg.style.color = 'yellowgreen';
    botCashMsg.innerHTML = `+$${pot}`;
    botCash.innerHTML = `$${botData.money + pot}`;
    potEl.innerHTML = `$${0}`;
    botData.money += pot;
setTimeout(() => {
    loose.style.display = 'none';
}, 4000);
setTimeout(() => {
    countdown();
}, 5000);
}



    else if(playerSum > botSum){
        win.style.display = 'block';
        playCashMsg.style.display = 'initial';
        playerCash.innerHTML = `$${playerData.money + pot}`;
        playCashMsg.style.color = 'yellowgreen';
        playCashMsg.innerHTML = `+$${pot}`;
        potEl.innerHTML = `$${0}`;
        playerData.money += pot;
        setTimeout(() => {
            win.style.display = 'none';
            
        }, 4000);
        setTimeout(() => {
            countdown();
        }, 5000);
    }


else if(botSum===21 && playerSum < 21){
    loose.style.display = 'block';
    botCashMsg.style.display = 'initial';
    botCashMsg.style.color = 'yellowgreen';
    botCashMsg.innerHTML = `+$${pot}`;
    botCash.innerHTML = `$${botData.money + pot}`;
    potEl.innerHTML = `$${0}`;
    botData.money += pot;
    setTimeout(() => {
        loose.style.display = 'none';
    }, 4000);
    setTimeout(() => {
        countdown();
    }, 5000);
}


else if(botSum > playerSum){
    loose.style.display = 'block';
    botCashMsg.style.display = 'initial';
    botCashMsg.style.color = 'yellowgreen';
    botCashMsg.innerHTML = `+$${pot}`;
    botCash.innerHTML = `$${botData.money + pot}`;
    potEl.innerHTML = `$${0}`;
    botData.money += pot;
    setTimeout(() => {
        loose.style.display = 'none';
    }, 4000);
    setTimeout(() => {
        countdown();
    }, 5000);
}
    else{};

 };

 let playDate = new Date().toDateString();
 let playtime = new Date().toLocaleTimeString();
 console.log(playtime);


 let timeLeft = 5;
function countdown(){
    if(playerData.money < 50){
        document.getElementById('modal-6').style.display = 'initial';
        document.getElementById('remainingCash').innerHTML= `$${playerData.money}`;
    }
    else if(botData.money < 50){
        document.getElementById('modal-7').style.display = 'initial';
        document.getElementById('winningCash').innerHTML= `$${playerData.money}`;
    }
    else{
        document.getElementById('modal-5').style.display = 'initial';
    setInterval(() => {
        timeLeft--;
        if(timeLeft <= 0){
            localStorage.setItem('player-money', playerData.money);
            localStorage.setItem('bot-money', botData.money);
            localStorage.setItem('play-time', playtime);
            localStorage.setItem('play-date', playDate);
            document.getElementById('modal-5').style.display = 'none';
            location.reload(); 
        };
        document.getElementById('timeout').innerHTML = timeLeft;
    }, 1000);
    };
};

document.getElementById('retry').addEventListener('click', replay );
document.getElementById('again').addEventListener('click', replay );

function replay(){
    document.getElementById('modal-8').style.display = 'initial';
    setInterval(() => {
        timeLeft--;
        if(timeLeft <= 0){
            localStorage.removeItem('player-money');
            localStorage.removeItem('bot-money');
            document.getElementById('modal-5').style.display = 'none';
            location.reload(); 
        };
        document.getElementById('timeout').innerHTML = timeLeft;
    }, 1000);
};


document.getElementById('rules').addEventListener('click', () => {

    document.getElementById('modal-9').style.display = 'initial';
})
let modal = document.getElementById('modal-9');

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = 'none';
    };
};

// setInterval(() => {
//     document.getElementById("progressBar").value = 1;
// }, 1200);
