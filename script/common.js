/*  This function is to get all input field */

function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldString = inputField.value;
  const inputFieldMoney = parseFloat(inputFieldString);
  return inputFieldMoney;
}

/* This function is to set input field value into the innerText field */

function setInnerTextValue(id, value) {
  const outputField = document.getElementById(id);
  outputField.innerText = value.toFixed(2);
}

/* This fucntion is to fix Error handling*/

function validation(errors) {
  for (let error of errors) {
    if (isNaN(error) || error < 0 || error == "") {
      return false;
    }
  }
  return true;
}
