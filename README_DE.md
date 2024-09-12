## Ein Würfelspiel entwickeln (mit objektorientierter Programmierung)
Entwickle ein einfaches Würfelspiel, das in der Konsole gespielt wird.

Zwei Spieler werfen abwechselnd Würfel. Alle Punkte werden zusammengezählt. Wer nach X Runden die meisten Punkte hat, gewinnt. Die Anzahl der zu werfenden Würfel und die Anzahl der zu spielenden Runden werden vom Spieler beim Start des Spiels festgelegt.

Falls du unsicher bist, wie man mit `readline-sync` arbeitet, sieh dir die Dokumentation hier an: https://www.npmjs.com/package/readline-sync

## So funktioniert das Spiel:
- Das Spiel wird in der Konsole gespielt, wobei ein Dialog mit `readline-sync` verwendet wird.
- Zu Beginn des Spiels wird der Benutzer mit folgenden Fragen konfrontiert:
  - `Wie viele Runden möchtest du spielen?` → Benutzer gibt eine Zahl ein
  - `Mit wie vielen Würfeln möchtest du spielen?` → Benutzer gibt eine Zahl ein
- Dann beginnt die erste Runde des Spiels:
  - `Spieler1: Möchtest du jetzt deine Würfel werfen? [y/n]`
    - Wenn bestätigt, werden die Würfel geworfen und das Ergebnis angezeigt:
      - `Spieler1: Du hast 11 Punkte geworfen (1, 2, 2 & 6)`
      - `Runde 1/5 // Spieler1 11 Punkte // Spieler2 0 Punkte`
    - Danach wiederholt sich der Vorgang für `Spieler2`
  - `Spieler2: Möchtest du jetzt deine Würfel werfen? [y/n]`
    - Wenn bestätigt, werden die Würfel geworfen und das Ergebnis angezeigt:
      - `Spieler2: Du hast 18 Punkte geworfen (1, 5, 6 & 6)`
      - `Runde 1/5 // Spieler1 11 Punkte // Spieler2 18 Punkte`
- Danach beginnt die nächste Runde und der obige Vorgang wiederholt sich.
- Wenn die letzte Runde beendet ist, wird eine Ergebnisnachricht angezeigt:
  - `Glückwunsch Spieler1, du hast gewonnen!`
  - `Endergebnis // Spieler1 55 Punkte // Spieler2 48 Punkte`

## Aufgabe 1: Baue das Grundspiel
Verwende Klassen, um deinen Code zu organisieren. Hier ist ein grundlegender Entwurf, wie deine Klassenstruktur aussehen könnte:

- `class Game`
  - Eigenschaften:
    - `player1` (Klasse Player)
    - `player2` (Klasse Player)
    - `dices` (Array, Klasse Dice)
    - `currentRound` (Number)
    - `totalRounds` (Number)
  - Methoden:
    - `start(numberOfRounds, numberOfDices)`
      - Diese Methode startet das Spiel, wenn sie aufgerufen wird
    - `playRound(player)`
      - Diese Methode startet eine Runde für einen Spieler
    - `finish()`
      - Diese Methode beendet das Spiel, wenn sie aufgerufen wird

- `class Player`
  - Eigenschaften:
    - `score` (Number)

- `class Dice`
  - Eigenschaften:
    - `value` (Number)
  - Methoden:
    - `throw()`
      - Würfelt und aktualisiert den Wert.
      - Mögliche Würfelergebnisse sind: 1, 2, 3, 4, 5, 6
      - Jede Zahl hat die gleiche Wahrscheinlichkeit, zu erscheinen.

Das ist nur eine Idee für den Entwurf. Falls du mehr Eigenschaften, Methoden oder Klassen benötigst, kannst du sie gerne hinzufügen.

## Aufgabe 2: Spielernamen wählen lassen
Derzeit heißen die Spieler automatisch `Spieler1` und `Spieler2`. Wäre es nicht viel besser, wenn die Spieler ihre eigenen Namen wählen könnten?

Aktualisiere den Spielbeginn, um für jeden Spieler den Namen mit folgender Eingabeaufforderung zu erfragen: `Spieler1: Wie heißt du?.`

Speichere die Namen beider Spieler und verwende sie im gesamten Spiel, indem du `Spieler1` und `Spieler2` durch die tatsächlichen Namen der Spieler ersetzt.

## Aufgabe 3: Zusätzliche Würfelarten hinzufügen
Momentan spielen die Spieler immer mit normalen Würfeln. Diese Würfel haben sechs Seiten mit den Zahlen 1-6, und jede Seite hat die gleiche Wahrscheinlichkeit, zu erscheinen. Was wäre, wenn wir verschiedene Würfeltypen hinzufügen würden? Wäre das nicht viel spannender?

Du kannst frei wählen, welche Würfeltypen du implementierst. Hier sind einige Ideen:

- Würfel mit unterschiedlicher Anzahl an Seiten (z. B. ein 20-seitiger Würfel)
- Würfel mit ungewöhnlicher Wertverteilung (z. B. ein Würfel mit 1, 1, 1, 1, 1, 6)
- usw.

Implementiere mindestens zwei(!) neue Würfeltypen.

**Grundlegender Implementierungsprozess:**

- Erweitere `class Dice` und erstelle für jeden deiner neuen Würfel eine neue Klasse, die auf der ursprünglichen Würfelklasse basiert.
- Überschreibe die `throw`-Methode der neuen Würfelklassen und implementiere die neuen Wurfalgorithmen.
- Lass den Benutzer zu Beginn des Spiels den Würfeltyp auswählen, indem du den folgenden Dialog mit `readline-sync` hinzufügst. Dieser Dialog wird angezeigt, nachdem die Spieler die Anzahl der Würfel eingegeben haben:
```js
[1] Normaler Würfel
[2] 1, 1, 1, 6, 6 Würfel
[3] 20-seitiger Würfel

Welchen Würfeltyp möchtest du verwenden? [1...3 / 0]:3
Ok, 20-seitiger Würfel wird verwendet.
```
Bonus-Ideen:
Wenn du die obigen Aufgaben erledigt hast, versuche das Spiel weiter zu verbessern. Hier sind einige Ideen, was du als Nächstes implementieren könntest:

- Erstelle eine Highscore-Liste
- Füge der Methode `Game.start` einen Parameter namens numberOfPlayers hinzu, mit dem du die Anzahl der Spieler festlegst
- Füge eine Funktion hinzu, mit der ein neues Spiel gestartet werden kann, sobald ein Spiel endet
- Mische verschiedene Würfeltypen miteinander
- Füge zusätzliche Regeln hinzu (z. B. 10 Extrapunkte für jedes Paar, 20 Punkte für eine Straße usw.)

Viel Spaß beim Programmieren <3