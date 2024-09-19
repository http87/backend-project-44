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
  let current = 0;
  const progression = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    current = firstElement + (step * i);
    progression.push(current);
  }
  const expectedAnswer = progression[numSkip];
  progression[numSkip] = '..';
  const question = progression.join(' ');

  return question;
};

const getAnswer = (lengthProgression, firstElement, step, numSkip) => {
  let answer = 0;
  let expectedAnswer = '';
  for (let i = 0; i < lengthProgression; i += 1) {
    answer = firstElement + (step * i);
    if (numSkip === i) {
      expectedAnswer =  String(answer);
      break;
    }
  }

  return expectedAnswer;
};

export default () => {
  const questionsAnswers = [];

  for (let i = 0; i < numRounds; i += 1) {
    const firstElement = getRandWithRange(1, 20);
    const step = getRandWithRange(1, 5);
    const numSkip = getRandWithRange(1, getLength());

    const question = getProgression(getLength(), firstElement, step, numSkip);
    const expectedAnswer = getAnswer(getLength(), firstElement, step, numSkip);

    questionsAnswers.push([question, expectedAnswer]);
  }

  startGame(questionsAnswers, rule);
};
