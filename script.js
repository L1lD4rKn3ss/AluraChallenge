// Obtén los elementos del DOM
const inputTexto = document.getElementById('input-texto');
const msg = document.getElementById('msg');
const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');
const btnCopy = document.getElementById('btn-copy');
const defaultImage = document.getElementById('default-image');

// Objeto para encriptación y desencriptación
const cipher = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat"
};

// Función para encriptar texto
function customEncrypt(text) {
  let encryptedText = "";
  for (let char of text) {
    encryptedText += cipher[char] || char;
  }
  return encryptedText;
}

// Función para desencriptar texto
function customDecrypt(text) {
  let decryptedText = text;
  for (let char in cipher) {
    const replaceValue = new RegExp(cipher[char], 'g');
    decryptedText = decryptedText.replace(replaceValue, char);
  }
  return decryptedText;
}

// Evento para el botón Encriptar
btnEncriptar.addEventListener('click', () => {
  const text = inputTexto.value;
  const encryptedText = customEncrypt(text);
  msg.value = encryptedText;
  toggleDefaultImage();
});

// Evento para el botón Desencriptar
btnDesencriptar.addEventListener('click', () => {
  const text = msg.value;
  const decryptedText = customDecrypt(text);
  msg.value = decryptedText;
  toggleDefaultImage();
});

// Evento para el botón Copiar
btnCopy.addEventListener('click', () => {
  msg.select();
  document.execCommand('copy');
});

// Función para mostrar/ocultar la imagen predeterminada
function toggleDefaultImage() {
  if (msg.value === "") {
    defaultImage.style.display = "block";
  } else {
    defaultImage.style.display = "none";
  }
}
