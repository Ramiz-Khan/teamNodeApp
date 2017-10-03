function Player(name, position, offense, defense, goodGame, badGame) {
	this.name = name;
	this.position = position;
	this.offense = offense;
	this.defense = defense;
	this.goodGame = goodGame;
	this.badGame = badGame;
	this.printStats = function() {
		var stats = "Name: " + this.name;
		stats += "Position: " + this.offense;
		stats += "Defense: " + this.defense;
		stats += "Good Games: " + this.goodGame;
		stats += "Bad Games: " + this.badGame;

		console.log(stats);
	};