import getRandom from './getRandom';

const hexChar = '0123456789abcdef';

const generatedHexId = (length = 6) => {
  const hexId = Array(length)
    .fill(null)
    .map(() => hexChar[getRandom(hexChar.length)])
    .join('');

  return hexId;
};

export default generatedHexId;
