import readlineSync from 'readline-sync';

export const numRounds = 3;

// engine
export default (questions, rule) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(rule);

  let i = 0;
  for (const [question, answer] of questions) {
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (String(answer) !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
    console.log('Correct!');
    if (i === (questions.length - 1)) {
      console.log(`Congratulations, ${userName}!`);
    }
    i += 1;
  }

  return null;
};
