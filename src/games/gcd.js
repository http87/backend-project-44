import { gcd } from 'mathjs';
import engine from '../index.js';

// Возвращает рандомно целое число от min до max
const getRandNum = (min, max) => {
  // случайное число от min до (max+1)
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

// GET: even odd (return boolean)
const isGCD = (x, y) => gcd(x, y);

export default () => {
  // Рассказываем о оправилах игры
  const rules = 'Find the greatest common divisor of given numbers. ';
  const arr = []; // [[question = '', correctAnswer = '']]
  const stages = 3; // всего три этапа / 3 вопроса

  for (let i = 1; i <= stages; i += 1) {
    // - формируем вопросы
    const x = getRandNum(1, 40);
    const y = getRandNum(41, 99);

    // анализируем ответ
    const expectedAnswer = isGCD(x, y);
    arr.push([`${x} ${y}`, expectedAnswer]);
  }

  engine(arr, rules);
};
