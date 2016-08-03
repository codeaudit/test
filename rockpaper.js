// comment

var result = "You won!";

// 0 - rock
// 1 - scissors
// 2 - paper
// 3 - lizard
// 4 - spock

function checkWinner( m, c ){
	var r = "tie";
	if( c === m ) {
		r = "tie";
        return r;
	}

	r = "lose";
	if( m === 0) {
		if( c == 1 ) { r= "win"};
		if( c == 3 ) { r= "win"};
	} else if(m === 1){
		if( c == 2 ) { r= "win"};
		if( c == 3 ) { r= "win"};
	} else if(m === 2){
		if( c == 1 ) { r= "win"};
		if( c == 4 ) { r= "win"};
	} else if(m === 3){
		if( c == 2 ) { r= "win"};
		if( c == 4 ) { r= "win"};
	} else if(m === 4){
        if( c == 0 ) { r= "win"};
		if( c == 1 ) { r= "win"};
	}
    return r;
}

function play(){

var end = false;
//while( !end ){
var move = addPrompt( "Enter your move:");

var moveName = ["rock","scissors","paper","lizard","spock"];
var counter = (Math.round( Math.random() * 5) ) % 5;

if( moveName.indexOf(move) == -1 ){
	result = "Invalid move!";
} else {
	result = checkWinner(moveName.indexOf(move) , counter);
}


if( result == "tie"  ||  result == "Invalid move!") {
   addAlert("machine moved " + moveName[counter] + " tie!");
   end = false;
} else {
   var again = addPrompt("machine moved " + moveName[counter] +", you " + result + "! Play again?");
   if( again === "y")
       end = false;
   else
   	   end = true;
}
   
}
//}



function addPrompt(str)
{
	var e = document.createElement("input");
	//e.innerHTML = str + ' <input type="input"/><br/>';
    e.setAttribute("type","text");
	
	document.getElementById("prompts").appendChild(e);

	

    e.onkeydown = function(evt) {
    if (evt.key === "Enter") {
        var human = e.value;
        if (human === 'r' || human === 'p' || human === 's') {
            addAlert(human);
        }
    }
    }

};


function addAlert(str)
{
	var e = document.createElement("span");
	e.setAttribute("class","alert_class")
	e.innerHTML = str;
    
	
	//document.getElementById("prompts").appendChild(e);

	document.getElementById("prompts").appendChild(e);
}

addPrompt("Enter");