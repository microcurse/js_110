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
 * Implicit Requirements
 * - The given input number is always positive
 * - Layer number correlates with blocks in a layer
 *  - Layer number x Layer number = number of blocks in a layer
 * 
 * Questions:
 * - 
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
 */