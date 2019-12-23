// let rangeStart = 248345;
// let rangeEnd = 746315;
// let correctNumbers = [];
// let newCorrectNumbers = [];
// let pass;

// function numberIsIncreasing(number) {
//   let array = number.toString().split("");
//   let num1 = 0;
//   let num2 = 1;
//   while (num2 < 6) {
//     if (parseInt(array[num1]) <= parseInt(array[num2])) {
//       num1++;
//       num2++;
//       pass = true;
//     } else {
//       num2 = 6;
//       pass = false;
//     }
//   }
//   if (pass == true) {
//     correctNumbers.push(number);
//   }
// }

// function adjecentNumbersMatch() {
//   correctNumbers.map(number => {
//     let array = number.toString().split("");
//     let num1 = 0;
//     let num2 = 1;
//     while (num2 < 6) {
//       if (parseInt(array[num1]) != parseInt(array[num2])) {
//         num1++;
//         num2++;
//         pass = false;
//       } else {
//         num2 = 6;
//         pass = true;
//       }
//     }
//     if (pass == true) {
//       newCorrectNumbers.push(number);
//     }
//   });
// }

// const runMe = () => {
//   while (rangeStart < rangeEnd) {
//     numberIsIncreasing(rangeStart);
//     rangeStart++;
//   }
//   adjecentNumbersMatch();
//   // console.log(`The answer is ${newCorrectNumbers.length}`);
//   console.log(newCorrectNumbers);
// };

// runMe();

// Answer = 1019 :)

let array = [
  248888,
  248889,
  248899,
  248999,
  249999,
  255555,
  255556,
  255557,
  255558,
  255559,
  255566,
  255567,
  255568,
  255569,
  255577,
  255578,
  255579,
  255588,
  255589,
  255599,
  255666,
  255667,
  255668,
  255669,
  255677,
  255678,
  255679,
  255688,
  255689,
  255699,
  255777,
  255778,
  255779,
  255788,
  255789,
  255799,
  255888,
  255889,
  255899,
  255999,
  256666,
  256667,
  256668,
  256669,
  256677,
  256678,
  256679,
  256688,
  256689,
  256699,
  256777,
  256778,
  256779,
  256788,
  256799,
  256888,
  256889,
  256899,
  256999,
  257777,
  257778,
  257779,
  257788,
  257789,
  257799,
  257888,
  257889,
  257899,
  257999,
  258888,
  258889,
  258899,
  258999,
  259999,
  266666,
  266667,
  266668,
  266669,
  266677,
  266678,
  266679,
  266688,
  266689,
  266699,
  266777,
  266778,
  266779,
  266788,
  266789,
  266799,
  266888,
  266889,
  266899,
  266999,
  267777,
  267778,
  267779,
  267788
];

let rangeStart = 248345;
let rangeEnd = 746315;
let correctNumbers = [];
let newCorrectNumbers = [];
let pass;

function numberIsIncreasing(number) {
  let array = number.toString().split("");
  let num1 = 0;
  let num2 = 1;
  while (num2 < 6) {
    if (parseInt(array[num1]) <= parseInt(array[num2])) {
      num1++;
      num2++;
      pass = true;
    } else {
      num2 = 6;
      pass = false;
    }
  }
  if (pass == true) {
    correctNumbers.push(number);
  }
}

function adjecentNumbersMatch() {
  correctNumbers.map(number => {
    let array = number.toString().split("");
    let num1 = 0;
    let num2 = 1;
    while (num2 < 6) {
      if (parseInt(array[num1]) != parseInt(array[num2])) {
        num1++;
        num2++;
        pass = false;
      } else {
        num2 = 6;
        pass = true;
      }
    }
    if (pass == true) {
      newCorrectNumbers.push(number);
    }
  });
}

let holder2 = [];
function nextToEachOther(number) {
  let counter = 0;
  let holder = [];
  let secondArray = [];
  let singleArray = number.toString().split("");
  while (counter <= singleArray.length) {
    if (singleArray[counter + 1] != undefined) {
      let one = singleArray[counter];
      let two = singleArray[counter + 1];
      if (one === two) {
        holder.push(one);
      }
    }
    counter++;
  }
  let counter2 = holder.length - 1;
  while (counter2 >= 0) {
    if (holder[counter2 - 1] != undefined) {
      let one = holder[counter2];
      let two = holder[counter2 - 1];
      if (one != two) {
        holder2.push(number);
      }
    }
    counter2--;
  }
}

const runMe = () => {
  while (rangeStart < rangeEnd) {
    numberIsIncreasing(rangeStart);
    rangeStart++;
  }
  adjecentNumbersMatch();
  // console.log(`The answer is ${newCorrectNumbers.length}`);
  // console.log(newCorrectNumbers);
  newCorrectNumbers.map(element => {
    nextToEachOther(element);
  });
  console.log(holder2.length);
};

// const runMe = () => {
//   array.map(element => {
//     nextToEachOther(element);
//   });
//   console.log(holder2.length);
// };

runMe();

// Answer = 1019 :)
// second answer 587 wrong
