import startGame, { numRounds } from '../index.js';
import getRandWithRange from '../math.js';

const rule = 'What number is missing in the progression?';

const getLength = () => {
  const min = 5;
  const max = 10;
  const result = getRandWithRange(min, max);
  return result;
};

const getProgression = (lengthProgression, firstElement, step, numSkip) => {
  const progression = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    const current = firstElement + (step * i);
    progression.push(current);
  }
  progression[numSkip] = '..';
  const question = progression.join(' ');

  return question;
};

export default () => {
  const questionsAnswers = [];

  for (let i = 0; i < numRounds; i += 1) {
    const firstElement = getRandWithRange(1, 20);
    const step = getRandWithRange(1, 5);

    const lengthProgression = getLength();
    const numSkip = getRandWithRange(1, lengthProgression);
    const question = getProgression(lengthProgression, firstElement, step, numSkip);
    const expectedAnswer = firstElement + (step * numSkip);
    questionsAnswers.push([question, expectedAnswer]);
  }

  startGame(questionsAnswers, rule);
};
