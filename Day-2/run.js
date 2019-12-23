let memory = [
  1,
  12,
  2,
  3,
  1,
  1,
  2,
  3,
  1,
  3,
  4,
  3,
  1,
  5,
  0,
  3,
  2,
  10,
  1,
  19,
  1,
  19,
  5,
  23,
  1,
  23,
  9,
  27,
  2,
  27,
  6,
  31,
  1,
  31,
  6,
  35,
  2,
  35,
  9,
  39,
  1,
  6,
  39,
  43,
  2,
  10,
  43,
  47,
  1,
  47,
  9,
  51,
  1,
  51,
  6,
  55,
  1,
  55,
  6,
  59,
  2,
  59,
  10,
  63,
  1,
  6,
  63,
  67,
  2,
  6,
  67,
  71,
  1,
  71,
  5,
  75,
  2,
  13,
  75,
  79,
  1,
  10,
  79,
  83,
  1,
  5,
  83,
  87,
  2,
  87,
  10,
  91,
  1,
  5,
  91,
  95,
  2,
  95,
  6,
  99,
  1,
  99,
  6,
  103,
  2,
  103,
  6,
  107,
  2,
  107,
  9,
  111,
  1,
  111,
  5,
  115,
  1,
  115,
  6,
  119,
  2,
  6,
  119,
  123,
  1,
  5,
  123,
  127,
  1,
  127,
  13,
  131,
  1,
  2,
  131,
  135,
  1,
  135,
  10,
  0,
  99,
  2,
  14,
  0,
  0
];

// Task One
// let address0 = 0;
// let address1 = 1;
// let address2 = 2;
// let address3 = 3;
// let answer;
// let positionToReplace = memory[address3];
// let instruction = memory[address0];
// const findOpcode = () => {
//   while (instruction != 99) {
//     runAction(instruction);
//     address0 = address0 + 4;
//     address1 = address1 + 4;
//     address2 = address2 + 4;
//     address3 = address3 + 4;
//     positionToReplace = memory[address3];
//     instruction = memory[address0];
//   }
//   console.log(`STOP!!! Your answer is: ${memory[0]}`);
// };

// const runAction = instruction => {
//   if (instruction === 1) {
//     answer = memory[memory[address1]] + memory[memory[address2]];
//     memory.splice(memory[address3], 1, answer);
//   }
//   if (instruction === 2) {
//     answer = memory[memory[address1]] * memory[memory[address2]];
//     memory.splice(memory[address3], 1, answer);
//   }
// };
// const runMe = () => {
//   findOpcode();
// };

// runMe();

const operations = {
  1: (inputArray, pos1, pos2, resultPos) =>
    (inputArray[inputArray[resultPos]] =
      inputArray[inputArray[pos1]] + inputArray[inputArray[pos2]]),
  2: (inputArray, pos1, pos2, resultPos) =>
    (inputArray[inputArray[resultPos]] =
      inputArray[inputArray[pos1]] * inputArray[inputArray[pos2]])
};

const part1Solution = (inputArray, index = 0) => {
  const operation = inputArray[index];
  if (operation === 99) {
    return inputArray[0];
  }

  if (operation === 1 || operation === 2) {
    operations[operation](inputArray, index + 1, index + 2, index + 3);
  } else {
    throw new Error("Something went wrong!");
  }

  return part1Solution(inputArray, index + 4);
};

const part2Solution = (inputArray, targetValue) => {
  for (let i = 0; i <= 99; i++) {
    for (let j = 0; j <= 99; j++) {
      const newArr = [...inputArray];
      newArr[1] = i;
      newArr[2] = j;
      const currentResult = part1Solution(newArr);
      console.log("CURRENT VALUE", currentResult);

      if (currentResult === targetValue) {
        console.log(i, j);
        return 100 * i + j;
      }
    }
  }

  throw new Error("Value not found");
};

const runMe = () => {
  part2Solution(memory, 19690720);
};

runMe();
