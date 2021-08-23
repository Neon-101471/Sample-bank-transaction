function getInputValue (){
            
}

//Add Deposit Event Handler
document.getElementById('deposit-button').addEventListener('click', function(){
    //Previous amount
    const previousTotalDeposit = parseFloat(document.getElementById('deposit-total').innerText);
    const previousTotalWithdraw = parseFloat(document.getElementById('withdraw-total').innerText);
    const previousTotalBalance = parseFloat(document.getElementById('balance-total').innerText);

    //New amount
    const newDeposit = parseFloat(document.getElementById('deposit-amount').value);

    //Update withdraw and balance
    document.getElementById('deposit-total').innerText = previousTotalDeposit + newDeposit;
    document.getElementById('balance-total').innerText = previousTotalBalance + newDeposit;

    //Clear input field
    document.getElementById('deposit-amount').value = '';
})

//Add Withdraw Event Listener
document.getElementById('withdraw-button').addEventListener('click', function(){
    //Previous amount
    const previousTotalWithdraw = parseFloat(document.getElementById('withdraw-total').innerText);
    const previousTotalBalance = parseFloat(document.getElementById('balance-total').innerText);

    //New withdraw and new balance
    const newWithdraw = parseFloat(document.getElementById('withdraw-amount').value);

    //Update withdraw and balance
    document.getElementById('withdraw-total').innerText = previousTotalWithdraw + newWithdraw;
    document.getElementById('balance-total').innerText = previousTotalBalance - newWithdraw;

    //Clear input field
    document.getElementById('withdraw-amount').value = '';
})