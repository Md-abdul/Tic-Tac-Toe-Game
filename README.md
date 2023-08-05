# Web-Tic-Tac-Toe

## Submission Instructions [Please note]

## Maximum Marks - 18

- The Submission should not contain spaces, for example,/js-101 folder/eval will not work
- Do not push node_modules and package-lock.json to GitHub

```
 ✅ Able to submit the app - 1 mark ( minimum score )
 ✅ Check Basic Structure is present on the DOM(there should be 9 divs with no textContent and restart button should not exist initially) - 1 mark
 ✅ Check if X as winner works correctly - 2 marks
 ✅ Check if O as winner works correctly - 2 marks
 ✅ Check if the draw works correctly - 2 marks
 ✅ Toggling of player works correctly - 2 marks
 ✅ Check grid-cells are getting updated with correct textContent after clicking on respective div - 2 marks
 ✅ Check if the click is not allowed on the filled square - 2 marks
 ✅ Check if click is not allowed after win(not replacing the existing cells textContent or classes) - 1 mark
 ✅ Check if the click is not allowed after draw - 1 mark
 ✅ Restart button working as per the expectation - 2 marks
```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package-lock.json to GitHub

Note:- No need to install node modules if you are not testing it in your local system or if you don't know Cypress
## Installation
```
npm install --engine-strict
```
## Start only Frontend server
```
npm run start
```

## Folder structure

```
├── index.css ==> Add your css here
├── index.html ==> You need to write your HTML code here
├── index.js ==> Add your js code here
```

- Please Ignore all the other files except for the above-mentioned files.

### You haven't taught Cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

<div style="text-align:center">
 <img src="https://i.imgur.com/pBPJ80p.gif" width="50%">
</div>


#### Use the template provided below to write your code (Mandatory)

## Some Rules to follow:-

- Before writing a single line of code please read the problem statement very carefully.
- Don't change the already given ids or classes.
- If you don't follow these rules you might not get any marks even if you do everything correctly.

## Problem Statement: Tic-Tac-Toe Game Implementation

Design and develop a tic-tac-toe game application using only HTML, CSS, and JavaScript. The application should provide an interactive and user-friendly interface that allows two players to compete against each other in the classic tic-tac-toe game.

## The application should meet the following requirements:

1. Game Board: Create a 3x3 grid representing the tic-tac-toe game board using HTML and CSS. Each cell of the grid should be clickable and visually distinguishable when occupied by a player's move.
2. Player Turns: Implement a turn-based system where each player takes alternating turns. The game starts with player X and then alternates until the game is over. 
3. Once a player plays a move, it can not be changed.
4. Valid Moves: Ensure that players can only make moves on empty cells. Prevent players from overwriting or modifying previously placed moves.
5. Win Detection: Implement a win detection mechanism that checks for three consecutive symbols (X or O) in a row, column, or diagonal. When a player wins, the application should display a winning message and prevent any further moves.
6. Draw Condition: Implement a draw condition that checks if all cells are filled and no player has won. In such a case, display a draw message and prevent any further moves.
7. Restart Functionality: Include a restart button that allows players to reset the game at any point. Clicking the restart button should clear the game board and reset all the game states.
8. Styling and User Experience: Use CSS to enhance the visual appeal of the application. Design a responsive and intuitive user interface that provides a seamless gaming experience across different screen sizes.
9. Code Structure and Readability: Organize the JavaScript code in a modular and maintainable manner. Use appropriate variables, functions, and comments to ensure code readability and understandability.

## Description

<div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
    <img width="48%" height="600px" src="https://i.imgur.com/D7NuzSb.png" style="margin-bottom: 10px;">
    <img width="48%" height="600px" src="https://i.imgur.com/NBpSB9x.png" style="margin-bottom: 10px;">
    <img width="48%" height="600px" src="https://i.imgur.com/2tpoVbJ.png" style="margin-bottom: 10px;">
    <img width="48%" height="600px" src="https://i.imgur.com/ceEu41M.png" style="margin-bottom: 10px;">
</div>


1. The tic-tac-toe game should consist of a 3x3 grid of cells represented by `<div>` elements. There will be a total of 9 cells contained within the `<div>` with the `id` as `"game"`. Each `<div>` element should be considered as an individual cell in the tic-tac-toe game.

2. There is a `div` with the class name as `status`
    - Inside this `<div>`, there should be a `<span>` element with the class name `"current-player"`. The text content of the `<span>` element should display either `"Its X turn"` or `"Its O turn` based on the current user's turn. The game should begin with X's turn, so the initial text content should be `"Its X turn"`.

3. When the user clicks on any of the cells(`div` with `class` name as `grid-cell`) the following things should get updated in the cell.
    - When any cell is clicked by the user, it should have the class name as `disabled`.(don't remove the existing class names)
    - You should also add the class name as `x` or `o` depending on the user who clicked it. (For example, if it is X's turn and he/she clicks on cell 2, that particular cell's class name should include the `x` as the class name. And similarly, if `O` clicks on any cell in his turn the cell should have the class name as `o`, and if the other person clicks on the cell which has been marked already then class names should not get changed as one cell can be marked by only by one person)
        - 1st person who starts the game class name will be `x` assigned while marking and the opponent(2nd person) when marking cell should assign `o` as the class name.
    - The status should get updated accordingly.(about whose turn is next)  
    - Once the cell is marked by `X` or `O` it can't be changed by any users.

Note:- For example, at any point of time if any cell has class name `x` it means that the cell was marked by `X`, and if it has class name `o` it means that the cell was marked by `O`.

4. When the game is completed(Any user won or it is draw, then the user should not be able to mark on any of the cells. the cells should get disabled)


5. There is a `div` with a class name as `game-over`
  - Inside this <div>, there should be an `<span>` element with the class name `"game-over-text"` that will be used to display the game-over message like `'X wins!'` or `O wins!` or `Draw!`.
  - Additionally, there should be a `<button>` element with the class name `"restart"` and textContent as `Restart`. 
    - On clicking it the game should be reset. All the class names which we assigned after the game starts should be removed and all the cells should be having empty text content as the game is reset.
    - The text Content of the `span.game-over-text`(span tag with class name game-over-text) should be changed to ""
    - The text content of the span tag with the class name `"current-player"` should display `"Its X turn"`.


Note:- The text Content of the cells, to represent the user who marked it can be of your own choice. You can use it as `X` or `O` or any other symbols but assign class name for the first person and second person as `x` and `o` respectively while marking cells. 
- Make sure to add the respective class names as mentioned in the problem statement.

#### The problem is tested on CP
![cp testlog](https://i.imgur.com/TaN84Ac.png)

#### General guidelines:-

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time.
