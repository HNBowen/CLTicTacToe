var assert = require('assert');

var game = require('./game.js')

//write tests for selectSpot
describe('selectSpot', function() {
  //it should call checkSpot 

  //it should call renderBoard, if selected spot is valid

  //it should call checkBoard, if selected spot is valid

  //it should increment move if selected spot is valid

  //it should update the board

  //it should call promptUser if the select spot was invalid
})
//write tests for checkSpot
describe('checkSpot', function() {
  var board = ["x","o"," "," "," "," "," "," "," "]
  //it should return false if spot is NaN
  it('should return false if spot is NaN', function() {
    assert.equal(false, game.checkSpot("f"));
  })
  //it should return false if spot is a number less than 1 or greater than 9
  it('should return false if spot is a number less than 1 or greater than 9', function() {
    assert.equal(false, game.checkSpot(10))
    assert.equal(false, game.checkSpot(0))
  })
  //it should return false if the spot has already been chosen
  it('should return false if the spot has already been chosen', function() {
    assert.equal(false, game.checkSpot(0))
  })
  //it should return true if the spot is open and the selection valid
  it('should return true if the spot is open', function() {
    assert.equal(true, game.checkSpot(4))
  })
})
//write tests for checkBoard
describe('checkBoard', function() {
  //it should return true if there is a winning row

  //it should return true if there is a winning column

  //it should return true if there is a winning major diagonal

  //it should returnt true if there is a winning minor diagonal
})