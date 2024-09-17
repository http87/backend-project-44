import engine, { numRounds } from '../index.js';
import getRandWithRange from '../math.js';

const isEven = (number) => number % 2 === 0;

export default () => {
  const nameGames = 'even';
  const questionsAnswers = [];
  for (let i = 0; i < numRounds; i += 1) {
    const question = getRandWithRange(2, 40);
    const expectedAnswer = isEven(question) ? 'yes' : 'no';
    questionsAnswers.push([question, expectedAnswer]);
  }
  engine(questionsAnswers, nameGames);
};
