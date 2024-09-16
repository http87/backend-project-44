import engine from '../index.js';
import getRandWithRange from '../math.js';

// GET: even odd (return boolean)
const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const arr = []; // [[question = '', correctAnswer = '']]

  for (let i = 1; i <= 3; i += 1) {
    // анализируем ответ
    const randInt = getRandWithRange(2, 40);
    const expectedAnswer = isPrime(randInt) ? 'yes' : 'no';
    arr.push([randInt, expectedAnswer]);
  }

  engine(arr, rules);
};
