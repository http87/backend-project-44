import startGame, { numRounds } from '../index.js';
import getRandWithRange from '../math.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

export default () => {
  const questionsAnswers = [];

  for (let i = 0; i < numRounds; i += 1) {
    const question = getRandWithRange(0, 40);
    const expectedAnswer = isPrime(question) ? 'yes' : 'no';
    questionsAnswers.push([question, expectedAnswer]);
  }

  startGame(questionsAnswers, rule);
};
