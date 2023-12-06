import * as fs from 'fs';

function main() {
  console.time('day_three_part_one');

  const schematic = fs.readFileSync('input.txt').toString().split('\n');

  let result = 0;

  // Iterate through each line of the input (y axis)
  for (let y = 0; y < schematic.length; y++) {
    let currentNumber = '';
    let checkForNumber = false;
    let adjacentToSymbol = false;

    // Iterate through each character of the line (x axis)
    for (let x = 0; x < schematic[y].length; x++) {
      // start checking a number if it isn't being checked yet
      if (schematic[y][x].match(/[0-9]/) && !checkForNumber) {
        checkForNumber = true;
        currentNumber = '';
        adjacentToSymbol = false;
      }

      // Add to the result if at the end of the line and we are checking for a number
      if ((x == schematic[y].length - 1 || !schematic[y][x].match(/[0-9]/)) && checkForNumber) {
        if (adjacentToSymbol)
          result += parseInt(currentNumber + (schematic[y][x].match(/[0-9]/) ? schematic[y][x] : ''));
        checkForNumber = false;
      }

      // If looking for a number, add the current character to the currentNumber and look for symbols
      if (checkForNumber) {
        currentNumber += schematic[y][x];

        // Check for a symbol around the current character
        for (let yOffset = -1; yOffset <= 1; yOffset++) {
          for (let xOffset = -1; xOffset <= 1; xOffset++) {
            // Skip the center (current position)
            if (xOffset === 0 && yOffset === 0) continue;

            // Calculate the new coordinates
            const newY = y + yOffset;
            const newX = x + xOffset;

            // Check if the new coordinates are within the bounds of the schematic
            const isWithinBounds = newY >= 0 && newY < schematic.length && newX >= 0 && newX < schematic[y].length;

            // Check if the character at the new coordinates is a symbol
            const isSymbol = isWithinBounds && !schematic[newY][newX].match(/[0-9.]/);

            if (isSymbol) {
              adjacentToSymbol = true;
            }
          }
        }
      }
    }
  }

  console.timeEnd('day_three_part_one');
  console.log(result);
}

main();
