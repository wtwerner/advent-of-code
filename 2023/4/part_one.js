import * as fs from 'fs';

function main() {
  console.time('day_four_part_one');

  const cards = fs.readFileSync('input.txt').toString().split('\n');

  let result = 0;

  // Iterate through each card of the input
  for (const card of cards) {
    let counter = 0;
    let cardWinnings = 0;

    const allNumbers = card.split(':')[1].split('|');
    const winningNumbers = allNumbers[0];
    const myNumbers = allNumbers[1];

    const winningArr = winningNumbers.split(' ');
    const myArr = myNumbers.split(' ');

    // Check whether my numbers match any number in the winning array
    for (const number of myArr) {
      // Ignore empty spaces
      if (number === '') {
        continue;
      }

      if (winningArr.includes(number)) {
        cardWinnings = Math.pow(2, counter);
        counter++;
      }
    }

    result += cardWinnings;
  }

  console.timeEnd('day_four_part_one');
  console.log(result);
}

main();
