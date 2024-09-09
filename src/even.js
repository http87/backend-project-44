import readlineSync from 'readline-sync';

// Возвращает рандомно целое число от 0 до max
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/**
 * Возвращает true / false
 *
 * @param {number} val Вопрос из игры (Анализируемое число).
 * @param {string} answer Ответ пользователя yes / no.
 * @return {boolean} Возвращает true / false.
 */
const checkAnswer = (val, answer, userName) => {
  const testVal = val % 2;
  // Checking the correctness of the answer
  let result;
  if ((testVal === 0 && answer === 'yes')) {
    result = true;
  } else if (testVal !== 0 && answer === 'no') {
    result = true;
  } else {
    result = false;
  }

  // Conclusion depending on the answer
  if (result === true) {
    console.log('Correct!');
  } else {
    let rightAnswer = '';
    if (answer === 'no') {
      rightAnswer = 'yes';
    } else if (answer === 'yes') {
      rightAnswer = 'no';
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \nLet's try again, ${userName}!`);
    return false;
  }
};

export default () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const length = 3;
  for (let i = 1; i <= 3; i += 1) {
    const randomNum = getRandomInt(40);
    // output question / input answer
    const answer = readlineSync.question(`Question: ${randomNum} => `);
    console.log(`Your answer: ${answer}`);

    // check correct text
    if (answer !== 'yes' && answer !== 'no') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes / no'. \nLet's try again, ${userName}!`);
      return false;
    }
    // check answer - function
    const result = checkAnswer(randomNum, answer, userName);
    if (result === false) {
      return false;
    }
    if (i === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
