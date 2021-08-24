function getPreviousTotalBalance(getId) {
    return parseFloat(document.getElementById(getId).innerText);
}

function getInput(getId) {
    const getInputAmount = parseFloat(document.getElementById(getId).value);
    document.getElementById(getId).value = ' ';
    return getInputAmount;
}

function updateTotal(getId, amount) {
    const previousTotal = parseFloat(document.getElementById(getId).innerText);
    document.getElementById(getId).innerText = previousTotal + amount;
}

function updateBalance(amount, isIncreasing) {
    let previousBalance = parseFloat(document.getElementById('balance-total').innerText);
    if (isIncreasing == true) {
        previousBalance = document.getElementById('balance-total').innerText = previousBalance + amount;
    }
    else {
        previousBalance = document.getElementById('balance-total').innerText = previousBalance - amount;
    }
}

document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInput('deposit-amount');
    if (depositAmount > 0) {
        updateTotal('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
})

document.getElementById('withdraw-button').addEventListener('click', function () {
    const previousTotalBalance = getPreviousTotalBalance('balance-total');
    const withdrawAmount = getInput('withdraw-amount');
    if (withdrawAmount > 0 && withdrawAmount <= previousTotalBalance) {
        updateTotal('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
})