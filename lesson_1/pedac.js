function sumEvenNumberRow(rowNum) {
  const rows = [];
  let startInteger = 2;

  for (let currentRowNum = 1; currentRowNum <= rowNum; currentRowNum++) {
    let row = createRow(startInteger, currentRowNum);
    rows.push(row);

    startInteger = row[row.length - 1] + 2;
  }

  let finalRow = rows.pop();
  return finalRow.reduce((a, b) => a + b);
}

function createRow(startingInteger, rowLength) {
  const row = [];
  let currentInteger = startingInteger;

  while (row.length < rowLength) {
    row.push(currentInteger);
    currentInteger += 2;
  }
  return row;
}

// row 1 → sum of integers in row: 2
// row 2 → sum of integers in row: 10
// row 3 → sum of integers in row: 30
// row 4 → sum of integers in row: 68

console.log(sumEvenNumberRow(1)); // 2
console.log(sumEvenNumberRow(2)); // 10
console.log(sumEvenNumberRow(4)); // 68

// start: 2, length: 1 → [2]
// start: 4, length: 2 → [4, 6]
// start: 8, length: 3 → [8, 10, 12]

// console.log(createRow(2, 1)); // [2]
// console.log(createRow(4, 2)); // [4, 6]
// console.log(createRow(8, 3)); // [8, 10, 12]

// Algorithm:
// 1. Create an empty ‘row’  array to contain integers
// 2. Add the starting integer
//     1. How do we find the starting integer of a row?
// 3. Increment the starting integer by 2 to get the next integer in the sequence
// 4. Repeat steps 2 and 3 until the array has reached the correct length
// 5. Return the ‘row’ array

// Start the loop
// - Add start integer to row array
// - Increment the start integer by 2
// - Break out of loop if the length of row array is equal to rowLength