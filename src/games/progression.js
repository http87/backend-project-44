import engine, { numRounds } from '../index.js';
import getRandWithRange from '../math.js';

const getProgressionAndSkipNum = (param) => {
  const [lengthProgression, numStartProgression, numSkip, stepIncrease] = param;
  let nextValue = numStartProgression;
  let progression = '';
  let expectedAnswer = 0;
  for (let i = 0; i < lengthProgression; i += 1) {
    if (numSkip === i) {
      expectedAnswer = nextValue;
      progression = `${progression} ..`;
      nextValue += stepIncrease;
    }
    progression = `${progression} ${nextValue}`;
    nextValue += stepIncrease;
  }
  expectedAnswer += '';
  progression = progression.trim();
  return [progression, expectedAnswer];
};

export default () => {
  const nameGames = 'progression';
  const questionsAnswers = [];

  for (let i = 0; i < numRounds; i += 1) {
    const numStartProgression = getRandWithRange(1, 20);
    const minLengthProgression = 5;
    const maxLengthProgression = 10;
    const lengthProgression = getRandWithRange(minLengthProgression, maxLengthProgression);
    const stepIncrease = getRandWithRange(1, 5);
    const numSkip = getRandWithRange(1, lengthProgression);
    const param = [lengthProgression, numStartProgression, numSkip, stepIncrease];
    const [question, expectedAnswer] = getProgressionAndSkipNum(param);
    questionsAnswers.push([question, expectedAnswer]);
  }

  engine(questionsAnswers, nameGames);
};
