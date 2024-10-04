import readlineSync from 'readline-sync';

export const numRounds = 3;

// engine
export default (questions, rule) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(rule);

  for (let i = 0; i < questions.length; i += 1) {
    const [question, answer] = questions[i];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (String(answer) !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
    console.log('Correct!');
    if (i === (numRounds - 1)) {
      console.log(`Congratulations, ${userName}!`);
    }
  }

  return null;
};
