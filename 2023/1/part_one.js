import * as fs from "fs";

function main() {
  // Create an array to parse through each line
  const textArray = fs.readFileSync("input.txt").toString().split("\n");

  let count = 0;

  // Iterate through each string
  textArray.forEach((line) => {
    const numberArray = [];

    // Push each number to the array
    for (const character of line) {
      if (/^[0-9]*$/.test(character)) {
        numberArray.push(character);
      }
    }

    // Combine the first number and the last from the array
    const finalNumber = `${numberArray[0]}${numberArray.pop()}`;

    // Add to the sum
    count += Number(finalNumber);
  });

  console.log("Sum of calibration values:", count);
}

main();
