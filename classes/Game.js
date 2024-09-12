import { Dice, TwelveSidedDice } from './Dice.js';

export default class Game {
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
      this.finish();
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

  finish() {
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
}