
const generate = document.getElementById("generate");
const display = document.getElementById("display");
const digit = document.getElementById("digit");
const reset = document.getElementById("reset");
const lucky = document.getElementById("lucky");


function generatePassword(digit) {
    const passPool = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let validPass = "";

    while (validPass.length < digit) {
      const randomized = Math.floor(Math.random() * passPool.length);
      validPass += passPool[randomized];
    }

    return validPass;
  }

generate.addEventListener("click", function() {
  if(digit.value <= 20 && digit.value >= 1) {
  const result = generatePassword(digit.value);
  display.textContent = result; } else {
    alert("Invalid Input");
  }
});


reset.addEventListener("click", function() {
  const empty = "";
  display.textContent = empty;
  digit.value = empty;
})


lucky.addEventListener("click", function() {
  const randomized = Math.floor(Math.random() * 20 + 1);
  const result = generatePassword(randomized);
  display.textContent = result;
}) 