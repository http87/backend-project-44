import readlineSync from 'readline-sync';

// Возвращает рандомно целое число от 0 до max
const getRandomInt = (max) => Math.floor(Math.random() * max);

// GET: even odd (return boolean)
const isEven = number => number % 2 === 0;

export default () => {
  // 1. знакомимся
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  // 2. Рассказываем о оправилах игры
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  // 3. Задаём вопросы
  // - три этапа
  const stages = 3;
  for (let i = 1; i <= stages; i += 1) {
    // - формируем вопросы 
    const range = 40; // from 0 to 40
    const randomNum = getRandomInt(range) + 1; // + 1, чтобы исключить 0

    // показываем вопрос / принимаем ответ
    const userAnswer = readlineSync.question(`Question: ${randomNum} => `);
    console.log(`Your answer: ${userAnswer}`);

    // анализируем ответ
    const expectedAnswer = isEven(randomNum) ? 'yes' : 'no';
    if (expectedAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'. \nLet's try again, ${userName}!`);
      return false;
    }

    if (i === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
