document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    depositField.value = '';
    if (isNaN(newDepositAmount)) {
        alert('Only Number');
        return;
    }
    const depositTotalElement = document.getElementById('deposit-total');
    const predepositTotalElementString = depositTotalElement.innerText;
    const predepositTotalElement = parseFloat(predepositTotalElementString);
    const currentDepositTotal = predepositTotalElement + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;
    const balanceTotalElement = document.getElementById('balance-total');
    const prebalanceTotalString = balanceTotalElement.innerText;
    const prebalanceTotal = parseFloat(prebalanceTotalString);
    const currentBalanceTotal = prebalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
})