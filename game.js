// Installation von readline-sync mit `npm init -y` && npm install readline-sync`
import readlineSync from 'readline-sync';

// Klassen importieren
import Player from './classes/Player.js';
import Game from './classes/Game.js';



// Das Spiel starten
const numberOfDices = parseInt(readlineSync.question("How many dices do you want to play with? ")); // Integer
const numberOfRounds = parseInt(readlineSync.question("How many rounds do you want to play? ")); // Integer

const player1Name = readlineSync.question("Player1: What is your name? ");
const player2Name = readlineSync.question("Player2: What is your name? ");

// Würfel-Typ erfragen
const diceTypes = ['Normal Dice', '12-Sided Dice'];
const index = readlineSync.keyInSelect(diceTypes, 'Which dice type?');
console.log('Ok, ' + diceTypes[index] + ' is used.');

const selectedDiceType = diceTypes[index];

const player1 = new Player(player1Name);
const player2 = new Player(player2Name);

const game = new Game(player1, player2);
game.start(numberOfRounds, numberOfDices, selectedDiceType);