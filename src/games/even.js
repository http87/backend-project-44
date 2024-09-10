import engine from '../index.js';

// Возвращает рандомно целое число от 0 до max
const getRandomInt = (max) => Math.floor(Math.random() * max);

// GET: even odd (return boolean)
const isEven = (number) => number % 2 === 0;

export default () => {
  const arr = []; // [[question = '', correctAnswer = '']]
  for (let i = 1; i <= 3; i += 1) {
    // - формируем вопросы
    const range = 40; // from 0 to 40
    const randomNum = getRandomInt(range) + 1; // + 1, чтобы исключить 0

    // анализируем ответ
    const expectedAnswer = isEven(randomNum) ? 'yes' : 'no';
    arr.push([randomNum, expectedAnswer]);
  }
  engine(arr, 'even');
};
