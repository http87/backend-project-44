import readlineSync from 'readline-sync';

export default (arr, rules) => {
  // 1. знакомимся
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  if (rules === 'prime' || rules === 'even') {
    console.log('Answer "yes" if the number is even, otherwise answer "no". ');
  } else {
    console.log(rules);
  }

  for (let i = 0; i < arr.length; i += 1) {
    // показываем вопрос / принимаем ответ
    console.log(`Question: ${arr[i][0]}`);
    const userAnswer = readlineSync.question('`Your answer: `');
    const expectedAnswer = String(arr[i][1]);
    if (expectedAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'. \nLet's try again, ${userName}!`);
      return false;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
  return null;
};
