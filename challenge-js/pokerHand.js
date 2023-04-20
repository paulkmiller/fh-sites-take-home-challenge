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

    // sort sortedValues by count ascending
    sortedValues.sort((a, b) => {
      const rankA = 'A23456789TJQK'.indexOf(a.value);
      const rankB = 'A23456789TJQK'.indexOf(b.value);
      
      return rankA - rankB;
    });
    
    // check if the hand is a flush (all cards have the same suit)
    const isFlush = Object.keys(suits).length === 1;
    
    // check if the hand is a straight (all cards are consecutive values)

    // initial attempt
    // const isStraight =
    //   sortedValues[0].count === 1 &&
    //   sortedValues[0].value === 'A' &&
    //   sortedValues[1].value === '5';
    
    // refactor attempt
    // const isStraight = sortedValues.every((card, i, arr) => {
    //   if (i === 0) return true;
    //   const prevRank = 'A23456789TJQK'.indexOf(arr[i - 1].value);
    //   const currantRank = 'A23456789TJQK'.indexOf(card.value);
    //   return currantRank === prevRank + 1 || (i === 4 && prevRank === 11 && currantRank === 0);
    // });

    // 2nd refactor atttempt
    function isStraight(sortedValues) {
      const ranks = 'A23456789TJQK';
      const handString = sortedValues.map((item) => item.value).join('');
    
      const isConsecutive = ranks.includes(handString);
      const isLowAceStraight = handString === '2345A';

      const allUnique = sortedValues.every((card) => card.count === 1);
    
      return allUnique && (isConsecutive || isLowAceStraight);
    }

    // determine the rank of the hand based on flush and straight conditions + group counts
    if (isFlush && isStraight && sortedValues[0].value === 'A') {
      // returns straight flush instead of royal flush with the following hand: As Ks Qs Js 10s
      // maybe an issue with the isStraight function?
      return 'Royal Flush';
    } else if (isFlush && isStraight) {
      return 'Straight Flush';
    } else if (isFlush) {
      return 'Flush';
    } else if (isStraight) {
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
