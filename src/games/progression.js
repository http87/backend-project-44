import engine from '../index.js';
import getRandWithRange from '../math.js';

export default () => {
  // Рассказываем о оправилах игры
  const rules = 'What number is missing in the progression?';
  const arr = []; // [[question = '', correctAnswer = '']]
  const stages = 3; // всего три этапа / 3 вопроса
  for (let i = 1; i <= stages; i += 1) {
    // - формируем вопросы
    const numStartProgression = getRandWithRange(1, 20);
    const lengthProgressionMin = 5;
    const lengthProgressionMax = 10;
    const lengthProgression = getRandWithRange(lengthProgressionMin, lengthProgressionMax);
    const stepIncrease = getRandWithRange(1, 5);
    const numSkip = getRandWithRange(1, lengthProgression);
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
    progression = progression.trim();
    arr.push([`${progression}`, expectedAnswer]);
  }

  engine(arr, rules);
};
