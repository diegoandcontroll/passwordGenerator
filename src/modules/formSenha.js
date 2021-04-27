import passwordGenerator from './geradores';

const divPassword = document.querySelector('.password-text');

const qtdChar = document.querySelector('.char-qtd');

const chkUpper = document.querySelector('.chk-upperCase');

const chkLow = document.querySelector('.chk-lowCase');

const chkNumber = document.querySelector('.chk-number');

const chkSymbol = document.querySelector('.chk-symbol');

const btn = document.querySelector('.password-generator');

export default () =>{
  btn.addEventListener('click', e =>{
    divPassword.innerHTML = generatedPassword();
  });
}

function generatedPassword(){
  const password = passwordGenerator(
    qtdChar.value,
    chkUpper.checked,
    chkLow.checked,
    chkNumber.checked,
    chkSymbol.checked
  );
  return password || "Selected Field";d
}