function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
}

BankAccount.prototype.change = function() {
  return this.amount += inputtedAmount
}

//user interface logic
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#input-name").val();
    var inputtedInitialDeposit = parseInt($("input#initial-deposit").val());
    var inputtedAmount = parseInt($("input#amount").val());

    var newBankAccount = new BankAccount(inputtedName, inputtedInitialDeposit);
  })
})
