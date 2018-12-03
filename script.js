var players=[];
var markers=["X","O"];
var whoseTurn=0;
var scores=[0,0];
var winValues=[7,56,73,84,146,273,292,448];
var gameOver=false;
players[0]="muzaffar";
players[1]="khan";

function winCheck()
{
for(var i=0;i<winValues.length;i++)
{
if((scores[whoseTurn] & winValues[i]) == winValues[i])

{
document.getElementById("game-message").innerText=players[whoseTurn] + "Wins!";
gameOver=true;

}
}
if(((scores[0] + scores[1])==511) && !gameOver)
{
document.getElementById("game-message").innerText="Its a tie!!";
gameOver=true;
}

}

function play(clickedDiv, divValue)
{

if(!gameOver)
{
scores[whoseTurn] +=divValue;
clickedDiv.onclick="";

clickedDiv.innerHTML="<span>" +markers[whoseTurn] +"</span>";
winCheck();
if(!gameOver){toggle();}
}
}

function toggle()
{
if(whoseTurn == 0) whoseTurn = 1;
else whoseTurn = 0;
document.getElementById("game-message").innerText=players[whoseTurn] + " 's Turn!";

}