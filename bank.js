function getInputValue(inputAmount) {
    let amount = document.getElementById(inputAmount);
    let amountText = amount.value;
    let amountNum = parseFloat(amountText);
    amount.value = '';
    return amountNum;
}

function updateMainField(fieldId, amountNum) {
    let mainField = document.getElementById(fieldId);
    let mainFieldText = mainField.innerText;
    let mainFieldNum = parseFloat(mainFieldText);
    mainField.innerText = mainFieldNum + amountNum;
}

function getBalance() {
    let mainBalance = document.getElementById('mainBalance');
    let mainBalanceText = mainBalance.innerText;
    let mainBalanceNum = parseFloat(mainBalanceText);
    return mainBalanceNum;
}

function updateBalance(amount, isAdd) {
    let mainBalance = document.getElementById('mainBalance');
    let mainBalanceText = mainBalance.innerText;
    let mainBalanceNum = parseFloat(mainBalanceText);
    if (isAdd == true) {
        mainBalance.innerText = mainBalanceNum + amount;
    } else {
        mainBalance.innerText = mainBalanceNum - amount;
    }
}

document.getElementById('requestDeposit').addEventListener('click', function () {
    let depAmountNum = getInputValue('depositAmount');
    
    if (depAmountNum > 0) {
        updateMainField('mainDeposit', depAmountNum);
        updateBalance(depAmountNum, true);
    }
});

document.getElementById('requestWithdraw').addEventListener('click', function () {
    let withdrawAmountNum = getInputValue('withdrawInput');
    
    let balance = getBalance();
    if (withdrawAmountNum > 0 && withdrawAmountNum < balance) {
        updateMainField('mainWithdraw', withdrawAmountNum);
        updateBalance(withdrawAmountNum, false);
    }
});
