class PokerHand {
  constructor(hand) {
    this.hand = hand.split(' ');
  }

  getRank() {
      const hand = this.hand;
      const suits = {};
      const values = {};
      const sortedValues = [];

      hand.forEach(card => {
        // extract value and suit of card
        const value = card.slice(0,-1);
        const suit = card.slice(-1);
        
        // increment the count of the suit in suits obj
        // increment the count of the value in values obj
        // if suits[suit] is undefined, set it to 0 and increment
        suits[suit] = (suits[suit] || 0) + 1;
        values[value] = (values[value] || 0) + 1;
    });

    // for each value in values obj
      // add an object containing value and count to sortedValues
    for (const value in values) { 
      sortedValues.push({value, count: values[value]});
    };

    // sort sortedValues by count descending
    sortedValues.sort((a, b) => {
      const rankA = '23456789TJQKA'.indexOf(a.value);
      const rankB = '23456789TJQKA'.indexOf(b.value);

      return rankB - rankA;
    });

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
