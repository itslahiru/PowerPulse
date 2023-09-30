document.addEventListener('DOMContentLoaded', function () {
    // Calculate BMI function
    function calculateBMI() {
        // Get user input values
        var height = parseFloat(document.getElementById('height-input').value);
        var weight = parseFloat(document.getElementById('weight-input').value);
        var age = parseFloat(document.getElementById('age-input').value);

        // Check if inputs are valid numbers
        if (isNaN(height) || isNaN(weight) || isNaN(age)) {
            alert('Please enter valid height, weight, and age values.');
            return;
        }

        // Calculate BMI
        var bmi = weight / ((height / 100) * (height / 100));

        // Determine weight status
        var weightStatus;
        if (bmi < 18.5) {
            weightStatus = "Underweight";
        } else if (bmi >= 18.5 && bmi < 25) {
            weightStatus = "Healthy";
        } else if (bmi >= 25 && bmi < 30) {
            weightStatus = "Overweight";
        } else {
            weightStatus = "Obese";
        }

        // Display the result in the 'bmi-result' div
        var resultDiv = document.getElementById('bmi-result');
        resultDiv.innerHTML = `<p>Your BMI: <strong>${bmi.toFixed(2)}</strong></p><p>Weight Status: <strong>${weightStatus}</strong></p>`;
    }

    // Attach a click event handler to the Calculate button
    var calculateButton = document.getElementById('calculate-button');
    calculateButton.addEventListener('click', calculateBMI);
});