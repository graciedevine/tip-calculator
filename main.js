function getTipAmount(cost, numberOfPeople, tipPercentage) {
    const tipAmount = cost / numberOfPeople * tipPercentage / 100;
    return tipAmount;
}

function getTotalAmount(cost, numberOfPeople, tipPercentage) {
    const totalAmount = cost / numberOfPeople + getTipAmount(cost, numberOfPeople, tipPercentage);
    return totalAmount;
}

console.log(getTotalAmount(142.55, 5, 15))
console.log(getTipAmount(142.55, 5, 15))

