
var incomeamount = 2000;
function calculateBudgetOnIncome(){
  var _temp=incomeamount*20;
  var amountToReduce=_temp/100;
  var budget_amount=incomeamount-amountToReduce;
  document.getElementById('budget_amount').innerHTML=budget_amount;
  var expense = parseInt(document.getElementById('expense_amount').innerHTML);
  var _balance = budget_amount - expense;
  document.getElementById('balance_amount').innerHTML=_balance;
  var _savings=incomeamount - expense;
  document.getElementById('saving_amount').innerHTML=_savings;
}

function addAllExplenses()
{
  var _currentExpenseAmount = parseInt(document.getElementById('expense_amount').innerHTML);
  var expenseAmount = document.forms['add_more_expense_form']['amount'].value;
  expenseAmount = _currentExpenseAmount + expenseAmount;
  document.getElementById('expense_amount').innerHTML = expenseAmount;
}
function updateBudgetAmount(){
  var _currentBudgetAmount=parseInt(document.getElementById('budget_amount').innerHTML);
  var _addOnBudgetAmount = parseInt(document.forms['add_in_budget_form']['add_money_in_budget'].value);
  var _total_budget_amount= _currentBudgetAmount + _addOnBudgetAmount;
  document.getElementById('budget_amount').innerHTML = _total_budget_amount;
  var _currentExpense = parseInt(document.getElementById('expense_amount').innerHTML);
  var _updatedBalance = _total_budget_amount - _currentExpense;
  document.getElementById('balance_amount').innerHTML = _updatedBalance;
  var _updatedSavings=incomeamount - _currentExpense;
  document.getElementById('saving_amount').innerHTML = _updatedSavings;
}
function reduceBudgetAmount(){
  var _currentBudgetAmount=parseInt(document.getElementById('budget_amount').innerHTML);
  var _reductionBudgetAmount = parseInt(document.forms['add_in_budget_form']['reduce_money_in_budget'].value);
  var _total_budget_amount= _currentBudgetAmount - _reductionBudgetAmount;
  document.getElementById('budget_amount').innerHTML = _total_budget_amount;
  var _currentExpense = parseInt(document.getElementById('expense_amount').innerHTML);
  var _updatedBalance = _total_budget_amount - _currentExpense;
  document.getElementById('balance_amount').innerHTML = _updatedBalance;
  var _updatedSavings=incomeamount - _currentExpense;
  document.getElementById('saving_amount').innerHTML = _updatedSavings;
}

function showAllExpenses() {
  document.querySelector('.show-more-button').addEventListener('click', function() {
  	// If text is shown less, then show complete
  	if(this.getAttribute('data-more') == 0) {
  		this.setAttribute('data-more', 1);
  		this.style.display = 'block';
  		this.innerHTML = "<br><button type='button' name='readless'>View Less</button>";

  		this.previousElementSibling.style.display = 'none';
  		this.previousElementSibling.previousElementSibling.style.display = 'inline';
  	}
  	// If text is shown complete, then show less
  	else if(this.getAttribute('data-more') == 1) {
  		this.setAttribute('data-more', 0);
  		this.style.display = 'inline';
  		this.innerHTML = "<br><button type='button' name='readless'>View all</button>";
  		this.previousElementSibling.style.display = 'inline';
  		this.previousElementSibling.previousElementSibling.style.display = 'none';
  	}
  });

}

//*********************************
var elements = document.getElementsByClassName("column");
// Declare a loop variable
var i;
// List View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}
