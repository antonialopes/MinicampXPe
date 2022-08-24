function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);

  handleButtonClick();
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');
  const resultado = document.getElementById('resultado');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');

  imcResult.textContent = formattedImc;

  let classific = '';

  if (imc < 16) {
    classific = 'Inválido';
  } else if (imc < 16.9) {
    classific = 'Muito abaixo do peso';
  } else if (imc < 18.4) {
    classific = 'Abaixo do peso';
  } else if (imc < 24.9) {
    classific = 'Peso normal';
  } else if (imc < 29.9) {
    classific = 'Acima do peso';
  } else if (imc < 34.9) {
    classific = 'Obesidade grau I';
  } else if (imc < 40) {
    classific = 'Obesidade grau II';
  } else if (imc > 40) {
    classific = 'Obesidade grau III';
  } else {
    classific = 'Inválido';
  }

  resultado.textContent = classific;
}

start();
