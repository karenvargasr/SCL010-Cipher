const btnCipher = document.getElementById('cipher');
const btnDecipher = document.getElementById('decipher');

const containerResult = document.getElementById('result');

btnCipher.addEventListener('click', () => {
  let text = document.getElementById('enterText').value;
  let numOffset = document.getElementById('secretPass').value;

  containerResult.innerHTML = window.cipher.encode(text, numOffset);

})
btnDecipher.addEventListener('click', () => {
  let text = document.getElementById('enterText').value;
  let numOffset = document.getElementById('secretPass').value;

  containerResult.innerHTML = window.cipher.decode(text, numOffset);
  })

