import engine, { getRand } from '../index.js';

// Возвращает рандомно целое число от 0 до max
const getRandomInt = (max) => Math.floor(Math.random() * max);

export default () => {
  // Рассказываем о оправилах игры
  const rules = 'What number is missing in the progression?';
  const arr = []; // [[question = '', correctAnswer = '']]
  const stages = 3; // всего три этапа / 3 вопроса
  for (let i = 1; i <= stages; i += 1) {
    // - формируем вопросы
    const numStartProgression = getRandomInt(20) + 1;
    const lengthProgressionMin = 5;
    const lengthProgressionMax = 10;
    const lengthProgression = getRand(lengthProgressionMin, lengthProgressionMax);
    const stepIncrease = getRandomInt(5) + 1;
    const numSkip = getRandomInt(lengthProgression - 2) + 1;
    let valueProgression = numStartProgression;
    let progression = '';
    let expectedAnswer = 0;
    // формируем прогрессию
    for (let j = 1; j <= lengthProgression; j += 1) {
      if (numSkip === j) {
        expectedAnswer = valueProgression;
        progression = `${progression} ..`;
      } else {
        progression = `${progression} ${valueProgression}`;
      }
      valueProgression += stepIncrease;
    }
    // анализируем ответ
    expectedAnswer += '';
    arr.push([`${progression}`, expectedAnswer]);
  }

  engine(arr, rules);
};
