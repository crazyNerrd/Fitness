// Function to calculate BMI
function calculateBMI() {
    const weight = parseFloat(document.querySelector(".weight-input-field").value);
    const height = parseFloat(document.querySelector(".height-input-field").value);

    // Check if input is valid
    if (isNaN(weight) || isNaN(height)) {
        document.querySelector(".bmi-result").textContent = "Invalid Input";
        return;
    }

    const bmi = weight / (height * height);

    document.querySelector(".bmi-result").textContent = `Your BMI : ${bmi.toFixed(2)}`;
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
