import * as fs from 'fs';

function main() {
  console.time('day_two_part_one');

  // Create an array to parse through each line
  const input = fs.readFileSync('input.txt').toString().split('\n');

  // The available cubes each game
  const availableCubes = {
    red: 12,
    green: 13,
    blue: 14,
  };

  let sumOfIds = 0;

  for (const game of input) {
    const gameId = Number(game.split(':')[0].split('Game ')[1]);
    const draws = game.split(': ')[1].split('; ');

    let possible = true;

    for (const draw of draws) {
      const cubes = {};

      const colors = draw.split(', ');

      for (const color of colors) {
        const cubeColor = color.split(' ')[1];
        const cubeCount = color.split(' ')[0];

        cubes[cubeColor] = cubeCount;
      }

      // Check if the drawn cubes exceed the available cubes
      for (const [k, v] of Object.entries(cubes)) {
        if (v > availableCubes[k]) {
          possible = false;
        }
      }
    }

    if (possible) {
      sumOfIds += gameId;
    }
  }

  console.timeEnd('day_two_part_one');
  console.log('The sum of the impossible game IDs is:', sumOfIds);
}

main();
