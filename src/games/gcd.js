import startGame, { numRounds } from '../index.js';
import getRandWithRange from '../math.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  let x = num1;
  let y = num2;
  while (x !== 0 && y !== 0) {
    if (x < y) {
      y %= x;
    } else if (y < x) {
      x %= y;
    }
  }

  return x + y;
};

export default () => {
  const questionsAnswers = [];

  for (let i = 0; i < numRounds; i += 1) {
    const number1 = getRandWithRange(1, 20);
    const number2 = getRandWithRange(1, 20);
    const expectedAnswer = getGCD(number1, number2);
    const question = `${number1} ${number2}`;
    questionsAnswers.push([question, expectedAnswer]);
  }

  startGame(questionsAnswers, rule);
};
