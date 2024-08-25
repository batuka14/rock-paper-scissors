// define variables
var player=document.querySelector('.player');
var computer=document.querySelector('.computer');
var winner=document.querySelector('.winner');
var pPoint=document.querySelector('.pPoint');
var cPoint=document.querySelector('.cPoint');
var computerChoise, random;
var pCount=0;
// ++, --
var cCount=0;
// check
console.log(player);
console.log(computer);
console.log(winner);
console.log(pPoint);
console.log(cPoint);
console.log(restart);
// action
function play(playerChoice,){
	player.innerText="Player choice:"+(playerChoice);
	// computer -> random -> 0==rock,1==paper,2==scissors
	random=Math.floor(Math.random()*3)+1;
	console.log(random);
	if(random==1){
		computerChoise="rock";
		computer.innerText="Computer choise:rock";
	}else if(random==2){
		computerChoise="paper";
		computer.innerText="Computer choise:paper";
	}else if(random==3){
		computerChoise="scissors";
		computer.innerText="Computer choise:scissors";
	}
	// player -> rock==scissors, paper==rock, scissors==paper
	if((playerChoice=="rock" && computerChoise=="scissors") || (playerChoice=="paper" && computerChoise=="rock") || (playerChoice=="scissors" && computerChoise=="paper")){
		winner.innerText="Winner:player";
		pCount++;
		pPoint.innerText="Player:"+pCount;
	}else if(playerChoice==computerChoise){
		winner.innerText="Winner:tie";
	}else{
		winner.innerText="Winner:computer";
		cCount++;
		cPoint.innerText="Computer:"+cCount;
	}
}
function restart(){
	computer.innerText="Computer choise:";
	player.innerText="Player choice:";
	winner.innerText="Winner:";
	cPoint.innerText="Computer:0";
	cCount=0;
	pPoint.innerText="Player:0";
	pCount=0;
}