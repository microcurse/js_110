function calculateLeftoverBlocks(cubes) {
  let numberOfBlocksRemaining = cubes;
  let currentLayer = 0;
  let numberOfBlocksRequired = (currentLayer + 1)**2;

  while (numberOfBlocksRemaining >= numberOfBlocksRequired) {
    numberOfBlocksRemaining -= numberOfBlocksRequired;
    currentLayer += 1;
    numberOfBlocksRequired = (currentLayer + 1)**2;
  }

  return numberOfBlocksRemaining;
}

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true
console.log(calculateLeftoverBlocks(30) === 0); //true