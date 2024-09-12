# Build a Dice-Throwing Game

Build a simple dice-throwing game, that is played in the console.

Two players take turns in throwing dices. All points are counted together. Whoever has the most points after X rounds wins. The number of dices thrown and the number of rounds to be played are defined by the player when starting the game.

If you are unsure about how to work with `readline-sync`, make sure to revisit the documentation: https://www.npmjs.com/package/readline-sync

### How the game works:

- The game is played in the console using `readline-sync` enabled dialogue.
- When the game starts, the user is prompted with the following questions:
    - `How many rounds do you want to play?` → User inputs number
    - `How many dices do you want to play with?` → User inputs number
- Then the first round of the game starts:
    - `Player1: Do you want to throw your dices now? [y/n]`
        - When confirmed dices are thrown and result is displayed:
            - `Player1: You threw 11 points (1, 2, 2 & 6)`
            - `Round 1/5 // Player1 11 points // Player2 0 points`
        - Then the same steps repeat for `Player2`
    - `Player2: Do you want to throw your dices now? [y/n]`
        - When confirmed dices are thrown and result is displayed:
            - `Player2: You threw 18 points (1, 5, 6 & 6)`
            - `Round 1/5 // Player1 11 points // Player2 18 points`
- Then the next round starts and the process above repeats.
- When the last round has finished, a result message is being shown:
    - `Congratulations Player1, you won!`
    - `Final Result // Player1 55 points // Player2 48 points`

### Task 1: Build the basic game

Use classes to organize your code. Here is a basic outline of how your class structure could look like:

- `class Game`
    - Properties:
        - `player1` (class Player)
        - `player2` (class Player)
        - `dices` (Array, class Dice)
        - `currentRound` (number)
        - `totalRounds` (number)
    - Methods
        - `start(numberOfRounds, numberOfDices)`
            - This method starts the game when called
        - `playRound(player)`
            This method starts a round for a given player
        - `finish()`
            - This method ends the game when being called
- `class Player`
    - Properties:
        - `score` (Integer)
- `class Dice`
    - Properties:
        - `value` (Integer)
    - Methods:
        - `throw()`
            - Throws the dice and updates its value.
            - The possible values of a dice are: 1, 2, 3, 4, 5, 6
            - Each value has the same probability to appear.

This is just an idea for an outline. If you need more properties, methods or classes, feel free to add them.

### Task 2: Let players choose their name

Right now players are automatically called `Player1` and `Player2`. Wouldn’t it be so much better if players could choose their own name?

Update the beginning of the game to also ask for each players name using the following prompt:
`Player1: What is your name?`.

Save the names of both players and use them in your game, respectively replacing `Player1` and `Player2` in the whole game with the actual player names.

### Task 3: Add  additional types of dices

Right now players are always playing with normal dices. These dices have six sides with the numbers 1-6 and an equal probability for each side to show. What if we would add more types of different dices? Wouldn’t that be much more exciting?

You can freely choose which dice types to implement. Here are some ideas:

- Dices with different number of sides (e.g. 20 sided dice)
- Dice with unusual value distribution (e.g. a dice with 1, 1, 1, 1, 1, 6)
- etc.

Implement at least two(!) new types of dices.

Basic process of implementation:

- Extend `class Dice` and create a new class based on the original dice class for each of your new dices
- Overwrite the `throw` method of the new dice classes and implement the new throwing algorithms
- Let the user choose with which dice to play at the start of the game by adding the following dialogue using `readline-sync`. This dialogue is displayed after players have entered the number of dices:

```jsx
[1] Normal dice
[2] 1, 1, 1, 6, 6 dice
[3] 20-sided dice
 
Which dice type? [1...3 / 0]:3
Ok, 20-sided dice is used.
```

### Bonus Ideas:

When you are done with the above tasks, try to further improve the game. Here are some ideas on what you could implement next:

- Create a high-score board
- Add a parameter to the `Game.start` method called `numberOfPlayers` , which lets you set the number of players to play with
- Add a functionality with which a new game can be started as soon as a game ends.
- Mix multiple types of dices with each other
- Add additional rules to the game (e.g. 10 extra points for every pair, 20 points for a street etc.)

Happy coding <3
