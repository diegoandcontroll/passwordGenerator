const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const upperCase = () => String.fromCharCode(rand(65,91));
const lowCase = () => String.fromCharCode(rand(97,123));
const number = () => String.fromCharCode(rand(48,58));
const symbol = ',.;:-=+_(){}@!#$%"&*~[]';
const symbolGenerate = () => symbol[rand(0, symbol.length)];

export default function passwordGenerate(char, upper, low, num, symbol){
  const passwordArray = [];
  char = Number(char);

  for(let i = 0; i < char; i++){
    upper && passwordArray.push(upperCase());
    low && passwordArray.push(lowCase());
    num && passwordArray.push(number());
    symbol && passwordArray.push(symbolGenerate());
  }

  return passwordArray.join('').slice(0, char);
}