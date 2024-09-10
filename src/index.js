import readlineSync from 'readline-sync';

export default (arr, rules) => {
  // 1. знакомимся
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(rules);
  
  for (let i = 0; i < arr.length; i += 1) {
    // показываем вопрос / принимаем ответ
    const userAnswer = readlineSync.question(`Question: ${arr[i][0]} => `);
    console.log(`Your answer: ${userAnswer}`);
    const expectedAnswer = arr[i][1] + ''; // меняем typeof на string
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

};