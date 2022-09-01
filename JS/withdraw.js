document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawField.value = '';
    if (isNaN(newWithdrawAmount)) {
        alert('Only Number');
        return;
    }
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const preWithdrawTotalString = withdrawTotalElement.innerText;
    const preWithdrawTotal = parseFloat(preWithdrawTotalString);


    const balanceTotalElement = document.getElementById('balance-total');
    const prebalanceTotalString = balanceTotalElement.innerText;
    const prebalanceTotal = parseFloat(prebalanceTotalString);

    if (newWithdrawAmount > prebalanceTotal) {
        alert('Insufficient Fund');
        return;
    }
    const currentWithdrawTotal = preWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const currentBalanceTotal = prebalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
})