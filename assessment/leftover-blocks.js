/**
 * PEDAC
 * 
 * Understanding the Problem
 * You have a number of building blocks that can be used to build a valid structure. There are certain rules
 * about what determines the validity of a structure:
 * 
 * - The building blocks are cubes
 * - The structure is built in layers
 * - The top layer is a single block
 * - A block in an upper layer must be supported by four blocks in a lower layer
 * - A block in a lower layer can support more than one block in an upper layer
 * - You cannot leave gaps between blocks
 * 
 * Write a program that, given the number for a specific amount of cubes, calculates the number of blocks
 * left over after building the tallest possible valid structure.
 * 
 * Explicit Requirements
 * - Input: a number
 *  - The given number represents a specific amount of cubes
 * - Output: a number
 *  - The output number represents the number of blocks left over after building the tallest possible 
 *    valid structure
 * - Blocks are cubes*
 * - Cubes are six-sided, have square faces, and have equal lengths on all sides*
 * - The structure is built in layers
 * - The top layer is a single block
 * - A block in an upper layer must be supported by four blocks in a lower layer
 * - A block in a lower layer can support more than one block in an upper layer
 * 
 * Visualizing the structure:
 *     ---
 *   --- ---
 * --- --- ---
 * 
 * - Layer 1: 1 block (1x1)
 * - Layer 2: 4 blocks (2x2)
 * - Layer 3: 9 blocks (3x3)
 * 
 * Implicit Requirements
 * - The given input number is always positive
 * - Layer number correlates with blocks in a layer
 *  - Layer number x Layer number = number of blocks in a layer
 * 
 * Questions:
 * - Is there always blocks left over?
 *  - Answered by test case: no, there isn't always blocks left over if the number of blocks create valid
 * layers, and ultimately, a valid structure.
 * - Is the lower layer still valid if it has more blocks than it needs?
 *  - Answered by 2nd to last test case: The layer is only valid if it has the proper amount of blocks 
 * needed.
 * 
 * Examples and Test Cases
 * 
 * console.log(calculateLeftoverBlocks(0) === 0); //true
 * console.log(calculateLeftoverBlocks(1) === 0); //true
 * console.log(calculateLeftoverBlocks(2) === 1); //true
 * console.log(calculateLeftoverBlocks(4) === 3); //true
 * console.log(calculateLeftoverBlocks(5) === 0); //true
 * console.log(calculateLeftoverBlocks(6) === 1); //true
 * console.log(calculateLeftoverBlocks(14) === 0); //true
 * 
 * Data Structures
 * Layer 1: Check if the given number is >= layerNumber**. If it is, subtract layerNumber**
 * Layer 2: Check if the leftover is >= layerNumber**. If it is, subtract layerNumber**
 * Layer 3: Check if the leftover is >= layerNumber**. If it is, subtract layerNumber**
 * 
 * - From this logic, we need a loop that increments the layer number after each iteration.
 * - That way, we can get the next layer's square to determine how many blocks are needed to support the top 
 * layer.
 * - If we don't have enough blocks to build another bottom layer, the rest of those blocks get returned as the "left over blocks".
 * 
 * The data structure is simply a number.
 * 
 * Algorithm
 * 1. Create a "blocks remaining" and set it equal to given number of blocks
 * 2. Create a variable layerNumber = 1
 * 3. Create a variable "blocks required" = layerNumber**2
 * 4. Check if given number "blocks remaining" is >= "blocks required"".
 * 5. If it is, subtract "blocks required" from "blocks remaining"
 * 6. Incremement layerNumber by 1 to work on the next layer.
 * 7. Repeat step 3-6 until "blocks remaining" is < "blocks required".
 * 8. Return "blocks remianing".
 * 
 */

function calculateLeftoverBlocks(blocks) {
  let blocksRemaining = blocks;
  let layerNumber = 1;
  
  while (true) {
    let blocksRequired = layerNumber**2;
    if (blocksRemaining >= blocksRequired) {
      blocksRemaining = blocksRemaining - blocksRequired ;
      layerNumber += 1;
    } else {
      break;
    }
  }

  return blocksRemaining;
}

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true