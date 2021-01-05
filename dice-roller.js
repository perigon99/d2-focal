const arvg = process.argv;
const filteredArgv = arvg.slice(2);
const numberOfRolls = Number(filteredArgv);
const diceMaxVal = 6;

console.log('Number of rolls', numberOfRolls);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


const diceRoller = (numberOfRolls, diceMaxVal) => {
  let result = 'Rolled ' + numberOfRolls + ' dice: ';
  for (let i = 0; i < numberOfRolls; i ++) {
    if (i < numberOfRolls -1) {
      result += getRandomInt(diceMaxVal) + ', ' 
    } else {
      result += getRandomInt(diceMaxVal) 
    }
  }
  return result;
}  

console.log(diceRoller(numberOfRolls, diceMaxVal))