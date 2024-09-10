import { gcd } from 'mathjs';
import engine, { getRand } from '../index.js';

// GET: even odd (return boolean)
const isGCD = (x, y) => gcd(x, y);

export default () => {
  // Рассказываем о оправилах игры
  const rules = 'Find the greatest common divisor of given numbers. ';
  const arr = []; // [[question = '', correctAnswer = '']]
  const stages = 3; // всего три этапа / 3 вопроса

  for (let i = 1; i <= stages; i += 1) {
    // - формируем вопросы
    const x = Math.abs(getRand(1, 9));
    const y = Math.abs(getRand(1, 9));

    // анализируем ответ
    const expectedAnswer = isGCD(x, y);
    const question = x + ' ' + y;

    arr.push([question, expectedAnswer]);
  }
  engine(arr, rules);
};
