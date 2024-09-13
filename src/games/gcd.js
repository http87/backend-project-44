import engine, { getRandWithRange, isGCD } from '../index.js';

export default () => {
  // Рассказываем о оправилах игры
  const rules = 'Find the greatest common divisor of given numbers.';
  const arr = []; // [[question = '', correctAnswer = '']]
  const stages = 3; // всего три этапа / 3 вопроса

  for (let i = 1; i <= stages; i += 1) {
    // - формируем вопросы
    const number1 = getRandWithRange(1, 20);
    const number2 = getRandWithRange(1, 20);

    // анализируем ответ
    const expectedAnswer = isGCD(number1, number2);
    const question = `${number1} ${number2}`;

    arr.push([question, expectedAnswer]);
  }
  engine(arr, rules);
};
