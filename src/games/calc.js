import engine, { numRounds } from '../index.js';
import getRandWithRange from '../math.js';
import actions from '../calc-actions.js';

const calculate = (x, y, action) => {
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

export default () => {
  const nameGames = 'calc';
  const questionsAnswers = [];

  for (let i = 0; i < numRounds; i += 1) {
    // - формируем вопросы
    const range = 10; // from 0 to 10
    const x = getRandWithRange(0, range);
    const y = getRandWithRange(0, range);
    const randomActionNum = getRandWithRange(0, actions.length - 1);
    const selectedAction = actions[randomActionNum];
    const expectedAnswer = calculate(x, y, selectedAction);
    const question = `${x} ${selectedAction} ${y}`;
    questionsAnswers.push([question, expectedAnswer]);
  }
  engine(questionsAnswers, nameGames);
};
