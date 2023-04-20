class PokerHand {
  constructor(hand) {
    this.hand = hand.split(' ');
  }

  getRank() {
    const hand = this.hand;
    const suits = {};
    const values = {};
    const sortedValues = [];

    hand.forEach((card) => {
      // extract value and suit of card
      const value = card.slice(0, -1);
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
      sortedValues.push({ value, count: values[value] });
    }
    
    // sort sortedValues by count descending
    sortedValues.sort((a, b) => {
      const rankA = '23456789TJQKA'.indexOf(a.value);
      const rankB = '23456789TJQKA'.indexOf(b.value);

      return rankB - rankA;
    });

    // check if the hand is a flush (all cards have the same suit)
    const isFlush = Object.keys(suits).length === 1;

    // check if the hand is a straight (all cards are consecutive values)
    const isStraight = () => {
      if (sortedValues.length !== 5) {
        return false;
      }
    
      let straightCount = 0;
      for (let i = 1; i < sortedValues.length; i++) {
        const rankA = '23456789TJQKA'.indexOf(sortedValues[i - 1].value);
        const rankB = '23456789TJQKA'.indexOf(sortedValues[i].value);
    
        if (rankA - rankB === 1) {
          straightCount++;
        } else if (i === 4 && rankA === 12 && rankB === 0) {
          // Special case: Ace low straight
          straightCount++;
        } else {
          return false;
        }
      }
    
      return straightCount === 4;
    };
    
    const isStraightResult = isStraight();

    // determine the rank of the hand based on flush and straight conditions + group counts
    if (isFlush && isStraightResult && sortedValues[0].value === 'A') {
      return 'Royal Flush';
    } else if (isFlush && isStraightResult) {
      return 'Straight Flush';
    } else if (isFlush) {
      return 'Flush';
    } else if (isStraightResult) {
      return 'Straight';
    } else if (sortedValues[0].count === 4) {
      return 'Four of a Kind';
    } else if (sortedValues[0].count === 3 && sortedValues[1].count === 2) {
      return 'Full House';
    } else if (sortedValues[0].count === 3) {
      return 'Three of a Kind';
    } else if (sortedValues[0].count === 2 && sortedValues[1].count === 2) {
      return 'Two Pair';
    } else if (sortedValues[0].count === 2) {
      return 'One Pair';
    } else {
      return 'High Card';
    }
  }
}

module.exports = PokerHand;
