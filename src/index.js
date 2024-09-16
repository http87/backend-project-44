import readlineSync from 'readline-sync';

// engine
export default (arr, rules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  for (let i = 0; i < arr.length; i += 1) {
    console.log(`Question: ${arr[i][0]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const expectedAnswer = String(arr[i][1]);
    if (expectedAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
    console.log('Correct!');
    if (i === (arr.length - 1)) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
  return null;
};
