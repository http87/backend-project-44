import engine from '../index.js';

// Возвращает рандомно целое число от 0 до max
const getRandomInt = (max) => Math.floor(Math.random() * max);

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
    // - формируем вопросы
    const range = 40; // from 0 to 40
    const randomNum = getRandomInt(range) + 2; // + 2, чтобы исключить 0 и 1

    // анализируем ответ
    const expectedAnswer = isPrime(randomNum) ? 'yes' : 'no';
    arr.push([randomNum, expectedAnswer]);
  }
  engine(arr, 'prime');
};
