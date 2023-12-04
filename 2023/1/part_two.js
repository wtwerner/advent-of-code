import * as fs from 'fs';

const numbers = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function main() {
  console.time('day_one_part_two');

  // Create an array to parse through each line
  const textArray = fs.readFileSync('input.txt').toString().split('\n');
  const strings = [];

  // Add keys to strings array
  for (const k of Object.keys(numbers)) {
    strings.push(k.toString());
  }

  let count = 0;

  // Add values to strings array
  for (const v of Object.values(numbers)) {
    strings.push(v.toString());
  }

  // Iterate through each string
  textArray.forEach((line) => {
    const substringArray = [];

    // Compile an array of all the substrings found in the line
    for (let i = 0; i < line.length; i++) {
      for (const substring of strings) {
        if (line.startsWith(substring, i)) {
          substringArray.push(substring);
        }
      }
    }

    // Add first and last substring to numberArray
    let numOne = substringArray[0];
    let numTwo = substringArray.pop();

    // Get the value if numOne is a key
    if (numOne in numbers) {
      numOne = numbers[numOne];
    }

    // Get the value if numTwo is a key
    if (numTwo in numbers) {
      numTwo = numbers[numTwo];
    }

    // Combine the first number and the last from the array
    const finalNumber = `${numOne}${numTwo ? numTwo : ''}`;

    // Add to the sum
    count += Number(finalNumber);
  });

  console.timeEnd('day_one_part_two');
  console.log('Sum of calibration values:', count);
}

main();
