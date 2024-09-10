import engine, { getRandomInt } from '../index.js';

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

export default () => {
  // Рассказываем о оправилах игры
  const rules = 'What is the result of the expression? ';
  const arr = []; // [[question = '', correctAnswer = '']]
  const stages = 3; // всего три этапа / 3 вопроса

  for (let i = 1; i <= stages; i += 1) {
    // - формируем вопросы
    const range = 10; // from 0 to 10
    const x = getRandomInt(range);
    const y = getRandomInt(range);
    const randActionNum = getRandomInt(3);
    const arrAction = ['+', '-', '*'];
    const randAction = arrAction[randActionNum];

    // анализируем ответ
    const expectedAnswer = isCalc(x, y, randAction);
    arr.push([`${x} ${randAction} ${y}`, expectedAnswer]);
  }
  engine(arr, rules);
};
