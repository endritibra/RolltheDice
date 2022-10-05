class Player{
    constructor(score,turn) {
      this.score = score;
      this.turn=turn;
    }
  }


const playa=document.querySelector("#playa");
const player1=new Player(0,true);
const player2=new Player(0,false);
//let turn1=true;

//reset buton
const reset=document.querySelector("#res");

//roll button
const roll = document.querySelector('#roll');


let count=0;


//roll click
roll.addEventListener('click',function(){

    
    if(count>=15){
        alert('Gameover , you need to reset');
    }
    else{
    
    
    if(player1.turn){
        playa.textContent='Player 2 turn';

        let res1=Math.floor(Math.random() * 6) + 1
        document.querySelector("#player1Dice").textContent=res1
        player1.score+=res1   //Math.floor(Math.random() * 6) + 1;
        player1.turn=false;
        player2.turn=true;
       
    }
   

    else{
        playa.textContent='Player 1 turn';

        let res=Math.floor(Math.random() * 6) + 1
        document.querySelector("#player2Dice").textContent=res;
        player2.score+=res
        player2.turn=false;
        player1.turn=true;
    }


    document.querySelector("#player1Scoreboard").textContent=player1.score;
    document.querySelector("#player2Scoreboard").textContent=player2.score;

    if(player1.score===20 || player1.score>20){
        console.log('Player1 wins')
        roll.classList.add('remove')
        roll.classList.remove('show')
        playa.textContent="Player1 Wins , Reset"

       

        
    }else if(player2.score===20 || player2.score>20){
        console.log("Player 2 wins");
        roll.classList.add('remove')
        roll.classList.remove('show')
        playa.textContent="Player2 Wins , Reset"



    }
    console.log(player1.score)
    console.log(player2.score)
    count++;
   console.log(count)
   //player1.turn=!(player1.turn)

    }
})


//Reset functionality

reset.addEventListener('click',function(){
    player1.score=0;
    player2.score=0;
    player1.turn=true;
    player2.turn=false;
    count=0; 
    document.querySelector("#player1Dice").textContent=""

    document.querySelector("#player2Dice").textContent="";
    roll.classList.remove('remove')
    roll.classList.add('show')
    document.querySelector("#player1Scoreboard").textContent=""
    document.querySelector("#player2Scoreboard").textContent="";
    playa.textContent="Player1 turn"

    // document.querySelector('.butonat').appendChild(roll);
})

