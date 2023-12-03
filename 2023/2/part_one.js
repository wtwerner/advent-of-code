import * as fs from 'fs';

function main() {
  // Create an array to parse through each line
  const input = fs.readFileSync('input.txt').toString().split('\n');

  // The available cubes each game
  const cubes = {
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
      const blocks = {};

      const colors = draw.split(', ');

      for (const color of colors) {
        const cubeColor = color.split(' ')[1];
        const cubeCount = color.split(' ')[0];

        blocks[cubeColor] = cubeCount;
      }

      for (const [k, v] of Object.entries(blocks)) {
        if (v > cubes[k]) {
          possible = false;
        }
      }
    }

    if (possible) {
      sumOfIds += gameId;
    }
  }

  console.log(sumOfIds);
}

main();
