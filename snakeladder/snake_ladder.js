class Snakenladder{
    constructor(position,dice,dicerolling){
        this.position = position;
        this.dice = dice;
        this.dicerolling = dicerolling;
    }
}
let Player1 = new Snakenladder(0,0,0);
let Player2 = new Snakenladder(0,0);
console.log(Player1);
console.log("Start the Game");
function start(consolePlayer1){
while(Player1.position <=100)
{
    Player1.dice = Math.floor((Math.random()*6)+1);
    let choice = Math.floor(Math.random()*2);
    switch(choice)
    {
        case 0 :
            if(Player1.position + Player1.dice<= 100)
            {
                Player1.position += Player1.dice;
                console.log("got ladder :" +Player1.position);
            }
            else
            Player1.position += 0;
            break;
        case 1 :
            Player1.position -= Player1.dice;
            console.log("Got Snake :" +Player1.position);
            if(Player1.position <= 0)
            {
                Player1.position = 0;
            } 
            break;       
        default : 
            console.log("No Play");
            break;
        }
        consolePlayer1(Player1.dicerolling += 1)
    Player1.dicerolling += 1;
}
}
function diceRoll(Snake){
    console.log("dice rolling value :" +Snake);
}

start(diceRoll)
console.log("Winning Position : " +Player1.position);