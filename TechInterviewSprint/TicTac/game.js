//this game should be run from the command line by typing node game.js from the root directory

//require inquirer for user input
var inquirer = require('inquirer');

//at most their are 9 moves, so the file will stop after 9 runs
var move = 1;
//at the start of the game, a blank board will be logged to the console
var board = [" "," ", " ", " ", " ", " ", " ", " ", " "]

var promptUser = function(player) {
  inquirer.prompt({message: "player " + player + " choose a spot (1 - 9)", name: "choice"}).then(function(input) {
    
    selectSpot(input.choice, player);
  })
}

//helper function to select a spot
var selectSpot = function(spot, player) {
  
  spot = Number(spot)

  if (checkSpot(spot)) {
    //take spot off board
    board[spot - 1] = player
    renderBoard(board)
    move++
    //check if the game has been won, the playe who just placed has won
    if (checkBoard(board)) {
      console.log('player ' + player + ' has won!')
      console.log('OK BYE')
      return
    } else if (move > 9) {
      console.log("it's a draw!")
      return;
    } else if (player === "o"){
      promptUser("x")
    } else if (player === "x") {
      promptUser("o")
    }
  } else {
    console.log('bad choice!')
    promptUser(player)
  }
  
}

//helper function to check if the spot selected is valid
var checkSpot = function(spot) {
  //if spot is NaN, it's not valid
  if (isNaN(spot)) {
    return false
  }
  //if spot is greater than 9 or less than 1, it's not valid
  if (spot > 9 || spot < 1) {
    return false
  }
  if (board[spot - 1] === "x" || board[spot - 1] === "o") {
    return false
  }
  //if none of the above are true, return true
  return true
}

//helper function to check if the board has been solved
var checkBoard = function(board) {
  console.log('inside checkBoard')
  //check each row
  for (var i = 0; i <= 6; i+=3) {
  
    var row = board[i] + board[i+1] + board[i+2]
    if (row === "xxx" || row === "ooo") {
      return true
    }
  }
  //check each column
  for (var j = 0; j < 3; j++) {
  
    var column = board[j] + board[j+3] + board[j+6]
    if (column === "xxx" || column === "ooo") {
      return true
    }
   }
  var majDiag = board[0] + board[4] + board[8];
  var minDiag = board[2] + board[4] + board[6];
  //check maj diagonal
  if (majDiag === "xxx" || majDiag === "ooo") {
    return true
  }
  //check min diagonal
  if (minDiag === "xxx" || minDiag === "ooo") {
    return true
  }

  
  return false
}

var renderBoard = function(board) {
  var emptyBoard = {
    1: [" "," ", " ", " ", "|", " ", " ", " ", "|", " ", " ", " ", "\n", " ", "_", "_", "_", "|", "_", "_", "_", "|", "_", "_", "_", "\n"],
    2: [" ", " ", " ", " ", "|", " ", " ", " ", "|", " ", " ", " ", "\n", " ", "_", "_", "_", "|", "_", "_", "_", "|", "_", "_", "_", "\n"],
    3: [" ", " ", " ", " ", "|", " ", " ", " ", "|", " ", " ", " ", "\n", " ", " ", " ", " ", "|", " ", " ", " ", "|", " ", " ", " "]
  };
  //iterate through each of the rows and fill them in
  emptyBoard[1][1] = board[0];
  emptyBoard[1][5] = board[1];
  emptyBoard[1][9] = board[2];
  emptyBoard[2][1] = board[3];
  emptyBoard[2][5] = board[4];
  emptyBoard[2][9] = board[5];
  emptyBoard[3][1] = board[6];
  emptyBoard[3][5] = board[7];
  emptyBoard[3][9] = board[8];

  //log the board to the console
  console.log(emptyBoard[1].join("") + emptyBoard[2].join("") + emptyBoard[3].join(""));
}

var welcomeUsers = function() {
  console.log("Welcome to Command Line Tic Tac Toe!")
  setTimeout(function() {
    console.log("-*-*-*-*-*-*-*-*-*-*-");
    setTimeout(function() {
      console.log("-*-*-*-*-*-*-*-*-*-*-");
      setTimeout(function() {
        console.log("------* RULES *------");
        setTimeout(function() {
          console.log("-*-*-*-*-*-*-*-*-*-*-");
          setTimeout(function() {
            printRules();
          }, 1000)
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)
  
}

var printRules = function() {
  console.log("There are two players, x and o")
  console.log("Player x places first (sorry player o, pick x next time)")
  console.log("Place an x or 0 by selecting a number 1 - 9")
  console.log("1 refers to the upper left, 9 to the lower right. You get the idea")
  inquirer.prompt({message: "Ok, got it? y/n", name: "choice"}).then(function(input) {
    if (input.choice === "y") {
      renderBoard(board)
      promptUser("x")
    } else {
      printRules()
    }
  })
}

var move = 1;
welcomeUsers();


