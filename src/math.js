// my math functions

// return rundom num from min to max
export default (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
