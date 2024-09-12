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

export { Dice, TwelveSidedDice };