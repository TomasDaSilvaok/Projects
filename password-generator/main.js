const passwordInput = document.querySelector("#passLength");
const passwordOutput = document.querySelector("#password");
const errorMsg = document.querySelector(".error");
const btn = document.querySelector("button");
const copy = document.querySelector(".copy");
const tooltipText = document.querySelector(".tooltip-text");

function generatePassword(length) {
  if (length === "" || length < 8 || length > 30) return;

  let password = "";
  const characters = `'abcdefghijklmnñopqrstuvwxtzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789!.,@¡?¿="'`;

  for (let i = 0; i < length; i++) {
    const randomCharacter = Math.floor(Math.random() * characters.length);
    password += characters[randomCharacter];
  }

  return password;
}

btn.addEventListener("click", () => {
  const finalPassword = generatePassword(passwordInput.value);

  if (finalPassword === undefined) {
    errorMsg.innerText = "La contraseña debe tener entre 8 y 30 caracteres.";
    errorMsg.classList.remove("hide");
    passwordOutput.value = "";
  } else {
    errorMsg.classList.add("hide");
    passwordOutput.value = finalPassword;
  }
});

copy.addEventListener("click", () => {
  if (passwordOutput.value === "") return;

  passwordOutput.select();
  passwordOutput.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(passwordOutput.value);

  tooltipText.textContent = "Contraseña copiada";
  setTimeout(() => {
    tooltipText.textContent = "Copiar contraseña";
  }, 2000);
});
