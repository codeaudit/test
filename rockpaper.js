

var result = "You won!";

// 0 - rock
// 1 - scissors
// 2 - paper
// 3 - lizard
// 4 - spock

function checkWinner( m, c ){
	var r = "tie";
	if( c === m ) r = "tie";

	if( m === 0) {
		if( c == 1 ) { r= "win"};
		if( c == 2 ) { r= "lose"};
		if( c == 3 ) { r= "win"};
		if( c == 4 ) { r= "lose"};
	} else if(m === 1){
        if( c == 0 ) { r= "lose"};
		if( c == 2 ) { r= "win"};
		if( c == 3 ) { r= "win"};
		if( c == 4 ) { r= "lose"};
	} else if(m === 2){
        if( c == 0 ) { r= "lose"};
		if( c == 1 ) { r= "win"};
		if( c == 3 ) { r= "lose"};
		if( c == 4 ) { r= "win"};
	} else if(m === 3){
        if( c == 0 ) { r= "lose"};
		if( c == 1 ) { r= "lose"};
		if( c == 2 ) { r= "win"};
		if( c == 4 ) { r= "win"};
	} else if(m === 4){
        if( c == 0 ) { r= "win"};
		if( c == 1 ) { r= "win"};
		if( c == 2 ) { r= "lose"};
		if( c == 3 ) { r= "lose"};
	}
    return r;
}


var end = false;
while( !end ){
var move = prompt( "Enter your move:");

var moveName = ["rock","scissors","paper","lizard","spock"];
var counter = (Math.round( Math.random() * 5) ) % 5;

if( moveName.indexOf(move) == -1 ){
	result = "Invalid move!";
} else {
	result = checkWinner(moveName.indexOf(move) , counter);
}

//if( move === "rock"){
  
//} else if( move === "scissors"){
//   result = checkWinner(1, counter);
//} else if( move === "paper"){
//   result = checkWinner(2, counter);
//} else if( move === "lizard"){
//   result = checkWinner(3, counter);
//} else if( move === "spock"){
//   result = checkWinner(4, counter);
//} else {
//   result = "Invalid move!";
//}

if( result == "tie"  ||  result == "Invalid move!") {
   alert("machine moved " + moveName[counter] + " tie!");
   end = false;
} else {
   var again = prompt("machine moved " + moveName[counter] +", you " + result + "! Play again?");
   if( again === "y")
       end = false;
   else
   	   end = true;
}
   
}

