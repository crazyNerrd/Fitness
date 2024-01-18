// Function to calculate BMI and target weight for normal range
function calculateBMI() {
    const weight = parseFloat(document.querySelector(".weight-input-field").value);
    const height = parseFloat(document.querySelector(".height-input-field").value);

    // Check if input is valid
    if (isNaN(weight) || isNaN(height)) {
        document.querySelector(".bmi-result").textContent = "Invalid Input";
        document.querySelector(".weight-recommendation").textContent = "";
        return;
    }

    const bmi = weight / (height * height);

    document.querySelector(".bmi-result").textContent = `Your BMI: ${bmi.toFixed(2)}`;

    const lowerBMINormal = 18.5;
    const upperBMINormal = 24.9;
    const lowerWeightNormal = lowerBMINormal * (height * height);
    const upperWeightNormal = upperBMINormal * (height * height);
    const lowerWeightDiff = (lowerWeightNormal - weight).toFixed(2);
    const upperWeightDiff = (upperWeightNormal - weight).toFixed(2);

    if (bmi < lowerBMINormal) {
        document.querySelector(".weight-recommendation").textContent = `You should gain ${lowerWeightDiff} kg to reach the lower end of the normal BMI range.`;
    } else if (bmi > upperBMINormal) {
        document.querySelector(".weight-recommendation").textContent = `You should lose ${upperWeightDiff} kg to reach the upper end of the normal BMI range.`;
    } else {
        document.querySelector(".weight-recommendation").textContent = "You are already within the normal BMI range.";
    }
}

// Function to calculate BMR
function calculateBMR() {
    const weight = parseFloat(document.querySelector(".weight-input-field").value);
    const height = parseFloat(document.querySelector(".height-input-field").value);
    const age = parseFloat(document.querySelector(".age-input-field").value);
    const gender = document.querySelector(".gender-input-field").value;

    if (isNaN(weight) || isNaN(height) || isNaN(age)) {
        document.querySelector(".bmr-result").textContent = "Invalid Input";
        return;
    }


    let bmr;

    if (gender === "male") {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height * 100) - (5.677 * age);
    } else if (gender === "female") {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height * 100) - (4.330 * age);
    }

    document.querySelector(".bmr-result").textContent = `Your BMR: ${bmr.toFixed(2)} calories/day`;
}

// Event listener for the Calculate BMI & BMR button
document.querySelector(".calculate").addEventListener("click", function () {
    calculateBMI();
    calculateBMR();
});
