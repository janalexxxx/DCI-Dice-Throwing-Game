// Installation von readline-sync mit `npm init -y` && npm install readline-sync`
import readlineSync from 'readline-sync';

class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    dices = [];

    currentRound = 1; // Aktuelle Runde
    totalRounds = 0;

    start(numberOfRounds, numberOfDices, diceType) {
        this.totalRounds = numberOfRounds;
        
        for (let i=0; i<numberOfDices; i++) {
            if (diceType === 'Normal Dice') {
                this.dices.push(new Dice());
            } else if (diceType === '12-Sided Dice') {
                this.dices.push(new TwelveSidedDice());
            }
        }

        // Runden spielen
        while (this.currentRound <= this.totalRounds) {
            this.playRound(this.player1);
            this.playRound(this.player2);
            
            // Leerzeilen zur Übersicht
            console.log('...................');
            console.log();

            this.currentRound++;
        }

        // Spiel beenden
        // 1. Gewinner finden
        if (this.player1.score > this.player2.score) {
            console.log(`Congratulations ${this.player1.name}, you won!`);
        } else if (this.player1.score < this.player2.score) {
            console.log(`Congratulations ${this.player2.name}, you won!`);
        } else {
            console.log(`You are tied...`);
        }
        
        // 2. Ergebnis anzeigen
        console.log(`Final Result // ${this.player1.name} ${this.player1.score} points // ${this.player2.name} ${this.player2.score} points`);
    }

    playRound(player) {
        // 1. Spieler nach Bestätigung fragen
        readlineSync.keyInYN(`${player.name}: Do you want to throw your dices now?`);

        // 2. Würfel werfen
        let sumOfDices = this.dices.reduce((accumulator, dice) => {
            dice.throw();
            return accumulator + dice.value;
        }, 0);

        console.log(`${player.name}: You threw ${sumOfDices} points (TBD)`)

        // 3. Geworfene Punkte speichern
        player.score += sumOfDices;

        console.log(`Round ${this.currentRound}/${this.totalRounds} // ${this.player1.name} ${this.player1.score} points // ${this.player2.name} ${this.player2.score} points`);

        // Leerzeile in der Konsole für Übersicht
        console.log();
    }
}

class Player {
    constructor(name) {
        this.name = name;
    }
    score = 0;
}

class Dice {
    value = 0;
    throw() {
        // Zufällige Zahl zwischen 1 & 6 generieren
        this.value = Math.floor(Math.random() * 6) + 1;
    }
}

// Würfel mit 12 Seiten
class TwelveSidedDice extends Dice {
    // Throw-Methode überschreiben
    throw() {
        this.value = Math.floor(Math.random() * 12) + 1;
    }
}


// Hier startet unser Code...
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