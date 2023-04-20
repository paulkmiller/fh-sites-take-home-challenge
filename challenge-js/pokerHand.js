class PokerHand {
  constructor() {}

  getRank() {
    // Implement poker hand ranking

    // Possible ranks:
    // Royal Flush
    // Straight Flush
    // Four of a Kind
    // Full House
    // Flush
    // Straight
    // Three of a Kind
    // Two Pair
    // One Pair
    // High Card

    function evaluatePokerHand(hand){
      const suits = {};
      const values = {};
      const sortedValues = [];

      hand.forEach(card => {
        // extract value and suit of card
        // increment the count of the suit in suits obj
        // increment the count of the value in values obj
    }

    // for each value in values obj
      // add an object containing value and count to sortedValues

    // check if the hand is a flush (all cards have the same suit)

    // check if the hand is a straight (all cards are consecutive values)

    // determine the rank of the hand based on flush and straight conditions + group counts
    // if isFlush and isStraight and the first value is 'A'
      // return 'Royal Flush'
    // else if isFlush and isStraight
      // return 'Straight Flush'
    // else if isFlush
      // return 'Flush'
    // else if isStraight
      // return 'Straight'
    // else if sortedValues[0].count is 4
      // return 'Four of a Kind'
    // else if sortedValues[0].count is 3 and sortedValues[1].count is 2
      // return 'Full House'
    // else if sortedValues[0].count is 3
      // return 'Three of a Kind'
    // else if sortedValues[0].count is 2 and sortedValues[1].count is 2
      // return 'Two Pair'
    // else if sortedValues[0].count is 2
      // return 'One Pair'
    // else
      // return 'High Card'

    return 'Royal Flush';
  }
}

module.exports = PokerHand;
