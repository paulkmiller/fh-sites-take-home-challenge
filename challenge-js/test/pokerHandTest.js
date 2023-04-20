var assert = require('assert');
var PokerHand = require('../pokerHand.js');

/**
 * test
 */
describe('Rank a Royal Flush', function() {
  it('Return royal flush when hand given', function() {
    var hand = new PokerHand('As Ks Qs Js 10s');
    assert.equal(hand.getRank(), 'Royal Flush');
  });
});

/**
 * test
 */
describe('Rank a Pair', function() {
  it('Return one pair when hand given', function() {
    var hand = new PokerHand('Ah As 10c 7d 6s');

    assert.equal(hand.getRank(), 'One Pair');
  });
});

/**
 * test
 */
describe('Rank Two Pair', function() {
  it('Return two pair when hand given', function() {
    var hand = new PokerHand('Kh Kc 3s 3h 2d');

    assert.equal(hand.getRank(), 'Two Pair');
  });
});

/**
 * test
 */
describe('Rank A Flush', function() {
  var hand = new PokerHand('Kh Qh 6h 2h 9h');

  it('Return flush when hand given', function() {
    assert.equal(hand.getRank(), 'Flush');
  });
});

// More tests go here
// tests to add:
// straight flush, four of a kind, three of a kind, full house, straight, high card
describe('Rank a Straight Flush', function() {
  it('Return royal flush when hand given', function() {
    var hand = new PokerHand('6s 5s 4s 3s 2s');
    assert.equal(hand.getRank(), 'Straight Flush');
  });
});

describe('Rank a Four of a Kind', function() {
  it('Return royal flush when hand given', function() {
    var hand = new PokerHand('8h 8s 8d 8c 2d');
    assert.equal(hand.getRank(), 'Four of a Kind');
  });
});

describe('Rank a Three of a Kind', function() {
  it('Return royal flush when hand given', function() {
    var hand = new PokerHand('Qs Qd Qc 4s 3h');
    assert.equal(hand.getRank(), 'Three of a Kind');
  });
});

describe('Rank a Full House', function() {
  it('Return royal flush when hand given', function() {
    var hand = new PokerHand(' 9h 9s 9c 5d 5s');
    assert.equal(hand.getRank(), 'Full House');
  });
});

describe('Rank a Straight', function() {
  it('Return royal flush when hand given', function() {
    var hand = new PokerHand('9d 8c 7h 6s 5d');
    assert.equal(hand.getRank(), 'Straight');
  });
});

describe('Rank a High Card', function() {
  it('Return royal flush when hand given', function() {
    var hand = new PokerHand('Ac 8d 6s 4h 2c');
    assert.equal(hand.getRank(), 'High Card');
  });
});