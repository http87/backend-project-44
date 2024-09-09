import readlineSync from 'readline-sync';

let rightAnswerCounter = 0; // count amout of right answer - global

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
    rightAnswerCounter += 1;
  } else {
    let rightAnswer = '';
    if (answer === 'no') {
      rightAnswer = 'yes';
    } else if (answer === 'yes') {
      rightAnswer = 'no';
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \nLet's try again, ${userName}! 2`);
  }
};

export default () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const [FIRST_Q, SECOND_Q, RIGHT_Q] = [15, 6, 7]; // arr with questions
  const arrQuestion = [FIRST_Q, SECOND_Q, RIGHT_Q];
  for (const val of arrQuestion) {
    // output question / input answer
    const answer = readlineSync.question(`Question: ${val} => `);
    console.log(`Your answer: ${answer}`);

    // check correct text
    if (answer !== 'yes' && answer !== 'no') {
      let rightAnswer = '';
      if (answer === 'no') {
        rightAnswer = 'yes / no';
      } else if (answer === 'yes') {
        rightAnswer = 'yes / no';
      }
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \nLet's try again, ${userName}! 1`);
      return false;
    }
    // check answer - function
    checkAnswer(val, answer, userName);
  }
  if (rightAnswerCounter === 3) { // if all right - global
    return `Congratulations, ${userName}!`;
  }
};
