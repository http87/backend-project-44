// rules for all games
export default (nameGame) => {
  let rule = '';
  switch (nameGame) {
    case 'even':
      rule = 'Answer "yes" if the number is even, otherwise answer "no".';
      break;
    case 'calc':
      rule = 'What is the result of the expression?';
      break;
    case 'gcd':
      rule = 'Find the greatest common divisor of given numbers.';
      break;
    case 'prime':
      rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
      break;
    case 'progression':
      rule = 'What number is missing in the progression?';
      break;
    default:
      // do nothing
  }
  return rule;
};
