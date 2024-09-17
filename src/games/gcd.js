import engine, { numRounds } from '../index.js';
import getRandWithRange from '../math.js';

// GCD - greatest common divisor
const getGCD = (x, y) => {
  let maxDivisor = 0;

  if (x === y) {
    maxDivisor = x;
    return maxDivisor;
  }

  const min = (x < y) ? x : y;
  let i = 1;
  while (i <= min) {
    if (x % i === 0 && y % i === 0) {
      maxDivisor = i;
    }
    i += 1;
  }

  return maxDivisor;
};

export default () => {
  // Рассказываем о оправилах игры
  const nameGames = 'gcd';
  const questionsAnswers = [];

  for (let i = 0; i < numRounds; i += 1) {
    const number1 = getRandWithRange(1, 20);
    const number2 = getRandWithRange(1, 20);
    const expectedAnswer = getGCD(number1, number2);
    const question = `${number1} ${number2}`;
    questionsAnswers.push([question, expectedAnswer]);
  }
  engine(questionsAnswers, nameGames);
};
