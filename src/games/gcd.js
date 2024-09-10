import engine from '../index.js';
import { gcd } from 'mathjs'

// Возвращает рандомно целое число от 0 до max
const getRandomInt = (max) => Math.floor(Math.random() * max);

// GET: even odd (return boolean)
const isGCD = (x, y) => gcd(x, y);

export default () => {
  // Рассказываем о оправилах игры
  const rules = 'Find the greatest common divisor of given numbers. ';
  const arr = []; // [[question = '', correctAnswer = '']]
  const stages = 3; // всего три этапа / 3 вопроса

  for (let i = 1; i <= stages; i += 1) {
    // - формируем вопросы
    const range = 20; // from 0 to 20
    const x = getRandomInt(range);
    const y = getRandomInt(range);
    
    // анализируем ответ
    const expectedAnswer = isGCD(x, y);
    arr.push([`${x} ${y}`, expectedAnswer]);
  }

  engine(arr, rules);
};
