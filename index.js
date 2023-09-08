function calculateInterest() {
    // Get user input
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var time = parseFloat(document.getElementById("time").value);

    // Calculate interest
    var interest = (principal * rate * time) / 100;

    // Calculate total amount
    var totalAmount = principal + interest;

    // Display the result
    document.getElementById("principal-display").innerHTML = "Principal Amount: " + principal.toFixed(2);
    document.getElementById("interest-display").innerHTML = "Interest: " + interest.toFixed(2);
    document.getElementById("total-amount-display").innerHTML = "Total Amount: " + totalAmount.toFixed(2);
}