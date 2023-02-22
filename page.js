let inputElement = document.getElementById("inputElement");
let signInTextElement = document.getElementById("signInText");
function signIn() {
  let inputValue = inputElement.value;
  let verifyText = "Hi " + inputValue + ", verifying your account...";
  signInTextElement.textContent = verifyText;
}

signInTextElement.style.color ="white";
  signInTextElement.style.src ="https://cdn-icons-png.flaticon.com/512/3276/3276136.png";
