import engine, { numRounds } from '../index.js';
import getRandWithRange from '../math.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

export default () => {
  const nameGames = 'prime';
  const questionsAnswers = [];

  for (let i = 0; i < numRounds; i += 1) {
    // анализируем ответ
    const question = getRandWithRange(0, 40);
    const expectedAnswer = isPrime(question) ? 'yes' : 'no';
    questionsAnswers.push([question, expectedAnswer]);
  }

  engine(questionsAnswers, nameGames);
};
