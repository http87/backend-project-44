import engine, { getRandomInt } from '../index.js';

// GET: even odd (return boolean)
const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

export default () => {
  // Рассказываем о оправилах игры
  const arr = []; // [[question = '', correctAnswer = '']]
  for (let i = 1; i <= 3; i += 1) {
    // анализируем ответ
    const randInt = getRandomInt();
    const expectedAnswer = isPrime(randInt) ? 'yes' : 'no';
    arr.push([randInt, expectedAnswer]);
  }
  engine(arr, 'prime');
};
