/*validation */
function validateAmount() {
    //document.write(amount);
    let amt = document.getElementById("amount").value;
    if (amt > 1500000) {
        alert("Loan amount should not be more than 15 lakhs");
    }
}

function validatePeriod() {
    let time = document.getElementById("period").value;
    if (time < 7 || time > 15) {
        alert("Repayment period should be between 7 years to 15 years");
    }
}

/* calculating methods */
function calculatePayment() {
    let amount = document.getElementById("amount").value;
    let interest = document.getElementById("interest").value;
    let period = document.getElementById("period").value;


    //monthly payment
    var monthly = ((amount / period) * (interest / 100) + (amount / period)) / 12;
    var totalPay = monthly * 12 * period;
    var totalInterestPay = (amount / period) * (interest / 100) * period;

    document.getElementById("monthly").innerHTML = Math.round(monthly);
    document.getElementById("totalPay").innerHTML = Math.round(totalPay);
    document.getElementById("totalInterestPay").innerHTML = Math.round(totalInterestPay);

}