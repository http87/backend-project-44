import engine from '../index.js';
import getRandWithRange from '../math.js';

// GET: even odd (return boolean)
const isEven = (number) => number % 2 === 0;

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const arr = []; // [[question = '', correctAnswer = '']]
  for (let i = 1; i <= 3; i += 1) {
    const randInt = getRandWithRange(2, 40);
    const expectedAnswer = isEven(randInt) ? 'yes' : 'no';
    arr.push([randInt, expectedAnswer]);
  }
  engine(arr, rules);
};
