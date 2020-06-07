//console.write("Debugscripts");


function validateBudgetForm(){
  var income = document.forms['budget']['incomeamount'].value;
  var date = document.forms['budget']['bdgtdate'].value;
  var varDate = new Date(date);
  var today=new Date();

  if(income <= 0)
  {
    alert("Provide correct income detail")
    return false;
  }
  else if (today >= varDate) {
    alert("Incorrect date");
    return false;
  }
}
