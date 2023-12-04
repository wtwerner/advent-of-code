import * as fs from 'fs';

const sybols = ['@', '#', '$', '%', '&', '*', '-', '+', '=', '/'];

const directions = [
  { row: -1, col: 0 }, // top
  { row: 1, col: 0 }, // bottom
  { row: 0, col: -1 }, // left
  { row: 0, col: 1 }, // right
  { row: -1, col: -1 }, // top-left
  { row: -1, col: 1 }, // top-right
  { row: 1, col: -1 }, // bottom-left
  { row: 1, col: 1 }, // bottom-right
];

function main() {
  // Create an array to parse through each line
  const input = fs.readFileSync('input.txt').toString().split('\n');

  // 1) parse through line and find number

  // 2) check each digit in number for adjacency to symbol

  // 3) add to sum if there is a symbol adjacent to any digit
}

main();
