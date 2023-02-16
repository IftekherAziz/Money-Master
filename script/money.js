/* 

Input Field: 
1. income
2. food
3. rent
4. clothes
5. save

Output Field:
1. expense
2. balance
3. save-amount
4. remaining-amount

Event handler: 
1. calculate-button
2. save-button

*/

/* Now set event handler to the calculate-button*/

document
  .getElementById("calculate-button")
  .addEventListener("click", function () {
    const income = getInputValue("income");
    const food = getInputValue("food");
    const rent = getInputValue("rent");
    const clothes = getInputValue("clothes");
    const expense = food + rent + clothes;
    const validInput = validation([income, food, rent, clothes]);

    if (validInput === false) {
      alert("Please input numeric positive balance");
    } else {
      if (expense > income) {
        alert("You do not have enough money");
      } else {
        setInnerTextValue("expense", expense);
        const balance = income - expense;
        setInnerTextValue("balance", balance);
      }
    }
  });

/* Now set event handler to the save-button*/

document.getElementById("save-button").addEventListener("click", function () {
  const income = getInputValue("income");
  const save = getInputValue("save");
  const previousBanlance = document.getElementById("balance").innerText;

  const validInput = validation([income, save, previousBanlance]);

  if (validInput === false) {
    alert("Please input numeric positive balance");
  } else {
    const saveAmount = (income * save) / 100;
    if (previousBanlance - saveAmount < 0) {
      alert("You do not have enough balance");
    }
    else {
    setInnerTextValue("save-amount", saveAmount);
    const remainingAmount = previousBanlance - saveAmount;
    setInnerTextValue("remaining-amount", remainingAmount);
  }
}
});
