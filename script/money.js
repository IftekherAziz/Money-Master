document
  .getElementById("calculate-button")
  .addEventListener("click", function () {
    const income = document.getElementById("income").value;
    const food = document.getElementById("food").value;
    const rent = document.getElementById("rent").value;
    const clothes = document.getElementById("clothes").value;

    // calculate expense
    const expense = parseInt(food) + parseInt(rent) + parseInt(clothes); 
    
    // calculate balance
    const balance = parseInt(income.value) - expense; 
    
    //   validate income
    if (expense > income.value) {
      alert("Expenses cannot be more than income");
    } else {
      // view total expense and balance
      document.getElementById("expense").innerText = expense;
      document.getElementById("balance").innerText = balance;
    }
  });
