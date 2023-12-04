import * as fs from 'fs';

function main() {
  console.time('day_two_part_two');

  // Create an array to parse through each line
  const input = fs.readFileSync('input.txt').toString().split('\n');

  let sumOfPower = 0;

  // We are checking for the minimum of each color for the game to be possible
  for (const game of input) {
    const draws = game.split(': ')[1].split('; ');

    const minimum = {
      red: 0,
      green: 0,
      blue: 0,
    };

    // Iterate through each draw to see if the minimum must be increased
    for (const draw of draws) {
      const colors = draw.split(', ');

      for (const color of colors) {
        const cubeColor = color.split(' ')[1];
        const cubeCount = color.split(' ')[0];

        if (minimum[cubeColor] < Number(cubeCount)) {
          minimum[cubeColor] = Number(cubeCount);
        }
      }
    }

    const power = minimum['red'] * minimum['green'] * minimum['blue'];
    sumOfPower += power;
  }

  console.timeEnd('day_two_part_two');
  console.log('The sum of the powers is:', sumOfPower);
}

main();
