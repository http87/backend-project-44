import engine from '../index.js';
import getRandWithRange from '../math.js';

// returt greatest common divisor
const isGCD = (x, y) => {
  let maxDivisor = 0;
  if (x === y) {
    maxDivisor = x;
    return maxDivisor;
  }
  if (x === 1 || y === 1) {
    maxDivisor = 1;
    return maxDivisor;
  }
  if (x !== y) {
    const min = (x < y) ? x : y;
    let i = 1;
    while (i <= min) {
      if (x % i === 0 && y % i === 0) {
        maxDivisor = i;
      }
      i += 1;
    }
  }
  return maxDivisor;
};

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
