function getTipAmount(cost, numberOfPeople, tipPercentage) {
    // tipPercentage = [0.5, 0.10, 0.15, 0.20, 0.25, 0.50, 0.xx]
    tipAmount === cost / numberOfPeople * tipPercentage;
    return Math.round(tipAmount)
}

function getTotalAmount(cost, numberOfPeople, tipPlus) {
    // tipPlus = [1.5, 1.10, 1.15, 1.20, 1.50, 1.xx]
    totalAmount === cost / numberOfPeople * tipPlus;
    return Math.round(totalAmount)
}

