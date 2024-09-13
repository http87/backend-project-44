import readlineSync from 'readline-sync';

// return random num from 2 to 40
const getRandomIntFixValue = () => {
  const max = 40;
  const range = Math.floor(Math.random() * max);
  const randomNum = range + 2; // + 2, to except 0 и 1
  return randomNum;
};

// return rundom num from min to max
const getRandWithRange = (min, max) => {
  // случайное число от min до (max+1)
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getRandomInt = (max) => Math.floor(Math.random() * max);

/**
 * Возвращает x, возведённое в n-ную степень.
 *
 * @param {number} x первое рандомное число.
 * @param {number} y второе рандомное число.
 * @param {string} action действие, выполняемое над числами.
 * @return {number}
 */
const isCalc = (x, y, action) => {
  switch (action) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      return false;
  }
};

// returt greatest common divisor
const isGCD = (x, y) => {
  let maxDivisor = 0;
  if (x === y) {
    maxDivisor = x;
    return maxDivisor;
  }
  if (x === 1 || y === 1) {
    maxDivisor = 1;
    return maxDivisor;
  }
  if (x !== y) {
    const min = (x < y) ? x : y;
    let i = 1;
    while (i <= min) {
      if (x % i === 0 && y % i === 0) {
        maxDivisor = i;
      }
      i += 1;
    }
  }
  return maxDivisor;
};

// GET: even odd (return boolean)
const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

// engine
export default (arr, rules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  for (let i = 0; i < arr.length; i += 1) {
    console.log(`Question: ${arr[i][0]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const expectedAnswer = String(arr[i][1]);
    if (expectedAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'. \nLet's try again, ${userName}!`);
      return false;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
  return null;
};

export {
  getRandomInt,
  getRandomIntFixValue,
  getRandWithRange,
  isPrime,
  isGCD,
  isCalc,
};
