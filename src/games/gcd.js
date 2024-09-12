import { gcd } from 'mathjs';
import engine, { getRand } from '../index.js';

export default () => {
  // Рассказываем о оправилах игры
  const rules = 'Find the greatest common divisor of given numbers.';
  const arr = []; // [[question = '', correctAnswer = '']]
  const stages = 3; // всего три этапа / 3 вопроса

  for (let i = 1; i <= stages; i += 1) {
    // - формируем вопросы
    const number1 = getRand(-9, 9);
    const number2 = getRand(-9, 9);

    // анализируем ответ
    const expectedAnswer = gcd(number1, number2);
    const question = `${number1} ${number2}`; //Question: <number1> <number2>

    arr.push([question, expectedAnswer]);
  }
  engine(arr, rules);
};
