import engine, { getRandomIntFixValue, isPrime } from '../index.js';

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const arr = []; // [[question = '', correctAnswer = '']]

  for (let i = 1; i <= 3; i += 1) {
    // анализируем ответ
    const randInt = getRandomIntFixValue();
    const expectedAnswer = isPrime(randInt) ? 'yes' : 'no';
    arr.push([randInt, expectedAnswer]);
  }

  engine(arr, rules);
};
