function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
}

BankAccount.prototype.deposit = function(inputtedAmountDeposit) {
  return this.amount += inputtedAmountDeposit
}

BankAccount.prototype.withdraw = function(inputtedAmountWithdraw) {
  return this.amount -= inputtedAmountWithdraw
}

//user interface logic
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#input-name").val();
    var inputtedInitialDeposit = parseInt($("input#initial-deposit").val());

    var newBankAccount = new BankAccount(inputtedName, inputtedInitialDeposit);

  $("form#input2").submit(function(event) {
    event.preventDefault();

    var inputtedAmountDeposit = parseInt($("input#amount").val());
    var newAmount = newBankAccount.deposit(inputtedAmountDeposit);
    
    $("#output-deposit").text(newAmount);

  })

  $("form#input3").submit(function(event) {
    event.preventDefault();
    var inputtedAmountWithdraw = parseInt($("input#amount").val());
    var newAmount = newBankAccount.withdraw(inputtedAmountWithdraw);

    $("#output-deposit").text(newAmount);
  })
})
});
