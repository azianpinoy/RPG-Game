//Basic Variables/////////////////////////////////////////////////////
var battleTime = false;
var attacker = "";
var defender = "";
var attackerText = $("<div>");
var defenderText = $("<div>");
var enemiesDefeated = 0;

//Restart Button//////////////////////////////////////////////////////
var restartButton = $("<button>");
restartButton.html("Restart");

restartButton.on("click", function(){
	enemiesDefeated = 0;

	fizzObject = {
		position: "#char-select-section",
		name: "Fizz",
		health: 125,
		attack: 8,
		attackIncrease: 8,
		defense: 15
	}

	nautilusObject = {
		position: "#char-select-section",
		name: "Nautilus",
		health: 200,
		attack: 5,
		attackIncrease: 5,
		defense: 5
	}

	karmaObject = {
		position: "#char-select-section",
		name: "Karma",
		health: 120, 
		attack: 6,
		attackIncrease: 6,
		defense: 15
	}

	zyraObject = {
		position: "#char-select-section",
		name: "Zyra",
		health: 105,
		attack: 7,
		attackIncrease: 7,	
		defense: 20
	}

	updateCharDivs();
	appendChars();

	$("#fizzClick").css("background-color","white");
	$("#nautilusClick").css("background-color","white");
	$("#karmaClick").css("background-color","white");
	$("#zyraClick").css("background-color","white");

	$("#battle-text").empty();
})

//Picture Variables///////////////////////////////////////////////////
var fizzPic = $('<img id="char fizz-pic">');
fizzPic.attr("src", "assets/images/fizz.jpg");

var nautilusPic = $('<img id="char nautilus-pic">');
nautilusPic.attr("src", "assets/images/nautilus.jpg");

var karmaPic = $('<img id="char karma-pic">');
karmaPic.attr("src", "assets/images/karma.jpg");

var zyraPic = $('<img id="char zyra-pic">');
zyraPic.attr("src", "assets/images/zyra.jpg");

//Character Object variables///////////////////////////////////////////
var fizzObject = {
	position: "#char-select-section",
	name: "Fizz",
	health: 125,
	attack: 8,
	attackIncrease: 8,
	defense: 15
}

var nautilusObject = {
	position: "#char-select-section",
	name: "Nautilus",
	health: 200,
	attack: 5,
	attackIncrease: 5,
	defense: 5
}

var karmaObject = {
	position: "#char-select-section",
	name: "Karma",
	health: 120, 
	attack: 6,
	attackIncrease: 6,
	defense: 15
}

var zyraObject = {
	position: "#char-select-section",
	name: "Zyra",
	health: 105,
	attack: 7,
	attackIncrease: 7,	
	defense: 20
}

//Character Div variables///////////////////////////////////////////
var fizzDiv = $('<div id="fizzClick" class="charDiv">');

var nautilusDiv = $('<div id="nautilusClick" class="charDiv">');

var karmaDiv = $('<div id="karmaClick" class="charDiv">');

var zyraDiv = $('<div id="zyraClick" class="charDiv">');


//Function to update Character Divs/////////////////////////////////////
function updateCharDivs(){
	fizzDiv.empty();
	fizzDiv.append('<h3>' + fizzObject.name + '</h3>');
	fizzDiv.append(fizzPic);
	fizzDiv.append('<h3>' + fizzObject.health + '</h3>');

	nautilusDiv.empty();
	nautilusDiv.append('<h3>' + nautilusObject.name + '</h3>');
	nautilusDiv.append(nautilusPic);
	nautilusDiv.append('<h3>' + nautilusObject.health + '</h3>');

	karmaDiv.empty();
	karmaDiv.append('<h3>' + karmaObject.name + '</h3>');
	karmaDiv.append(karmaPic);
	karmaDiv.append('<h3>' + karmaObject.health + '</h3>');

	zyraDiv.empty();
	zyraDiv.append('<h3>' + zyraObject.name + '</h3>');
	zyraDiv.append(zyraPic);
	zyraDiv.append('<h3>' + zyraObject.health + '</h3>');
}

//Function to place Characters in their positions/////////////////////////////////
function appendChars(){
	$(fizzObject.position).append(fizzDiv);
	$(nautilusObject.position).append(nautilusDiv);
	$(karmaObject.position).append(karmaDiv);
	$(zyraObject.position).append(zyraDiv);
}

//Initiate Game Start positions////////////////////////////////////////////////
updateCharDivs();
appendChars();

//Select Character and Enemies//////////////////////////////////////////////////
$("#fizzClick").on("click", function(){
	if(fizzObject.position == "#char-select-section"){
		attacker = fizzObject;

		fizzObject.position = "#your-char-section";
		$("#fizzClick").css("background-color","green");

		nautilusObject.position = "#enemy-select-section";
		karmaObject.position = "#enemy-select-section";
		zyraObject.position = "#enemy-select-section";

		$("#nautilusClick").css("background-color","red");
		$("#karmaClick").css("background-color","red");
		$("#zyraClick").css("background-color","red");

		appendChars();
	}
	else if(fizzObject.position == "#enemy-select-section"){
		defender = fizzObject;

		if(battleTime == false){
		fizzObject.position = "#active-enemy-section";
		appendChars();
		battleTime = true;
		}
		else{
			//Do nothing
		}
	}
	else{
		//Do nothing
	}
})

$("#nautilusClick").on("click", function(){
	if(nautilusObject.position == "#char-select-section"){
		attacker = nautilusObject;

		nautilusObject.position = "#your-char-section";
		$("#nautilusClick").css("background-color","green");

		fizzObject.position = "#enemy-select-section";
		karmaObject.position = "#enemy-select-section";
		zyraObject.position = "#enemy-select-section";

		$("#fizzClick").css("background-color","red");
		$("#karmaClick").css("background-color","red");
		$("#zyraClick").css("background-color","red");

		appendChars();
	}
	else if(nautilusObject.position == "#enemy-select-section"){
		defender = nautilusObject;

		if(battleTime == false){
		nautilusObject.position = "#active-enemy-section";
		appendChars();
		battleTime = true;
		}
		else{
			//Do nothing
		}
	}
	else{
		//Do nothing
	}
})

$("#karmaClick").on("click", function(){
	if(karmaObject.position == "#char-select-section"){
		attacker = karmaObject;

		karmaObject.position = "#your-char-section";
		$("#karmaClick").css("background-color","green");

		nautilusObject.position = "#enemy-select-section";
		fizzObject.position = "#enemy-select-section";
		zyraObject.position = "#enemy-select-section";

		$("#nautilusClick").css("background-color","red");
		$("#fizzClick").css("background-color","red");
		$("#zyraClick").css("background-color","red");

		appendChars();
	}
	else if(karmaObject.position == "#enemy-select-section"){
		defender = karmaObject;

		if(battleTime == false){
		karmaObject.position = "#active-enemy-section";
		appendChars();
		battleTime = true;
		}
		else{
			//Do nothing
		}
	}
	else{
		//Do nothing
	}
})

$("#zyraClick").on("click", function(){
	if(zyraObject.position == "#char-select-section"){
		attacker = zyraObject;

		zyraObject.position = "#your-char-section";
		$("#zyraClick").css("background-color","green");

		nautilusObject.position = "#enemy-select-section";
		karmaObject.position = "#enemy-select-section";
		fizzObject.position = "#enemy-select-section";

		$("#nautilusClick").css("background-color","red");
		$("#karmaClick").css("background-color","red");
		$("#fizzClick").css("background-color","red");

		appendChars();
	}
	else if(zyraObject.position == "#enemy-select-section"){
		defender = zyraObject;

		if(battleTime == false){
		zyraObject.position = "#active-enemy-section";
		appendChars();
		battleTime = true;
		}
		else{
			//Do nothing
		}
	}
	else{
		//Do nothing
	}
})

//Attack Button//////////////////////////////////////////////////////
$("#attack-button").on("click", function(){
	if(battleTime == false){
		//Do Nothing
	}
	else{
		attacker.health = attacker.health - defender.defense;
		defender.health = defender.health - attacker.attack;
		
		updateCharDivs();
		appendChars();
		
		$("#battle-text").empty();
		attackerText.html("You attacked " + defender.name + " for " + attacker.attack + " damage!");
		defenderText.html(defender.name + " attacked you back for " + defender.defense + " damage!");
		$("#battle-text").append(attackerText);
		$("#battle-text"). append(defenderText);

		attacker.attack = attacker.attack + attacker.attackIncrease; 

		if(attacker.health <= 0){
			$("#battle-text").empty();
			attackerText.html("You have been defeated... Game Over!!!");
			$("#battle-text").append(attackerText);
			$("#battle-text").append(restartButton);
			battleTime = false;
		}
		else if(defender.health <= 0){
			battleTime = false;
			enemiesDefeated++;
			defender.position = "Dead";
			$("#active-enemy-section").empty();

			updateCharDivs();
			appendChars();

			$("#battle-text").empty();
			attackerText.html("You have defeated " + defender.name + ", you can choose to fight another enemy.");
			$("#battle-text").append(attackerText);
		}
		else{
			//Do nothing
		}

	}

	if(enemiesDefeated == 3){
		$("#battle-text").empty();
		alert("Congratualtions! You win!");
		$("#battle-text").append(restartButton);
		battleTime = false;
	}
})











