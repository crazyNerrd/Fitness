// Function to calculate BMI
var heightInput = document.querySelector(".height-input-field");
var weightInput = document.querySelector(".weight-input-field");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var statement = document.querySelector(".result-statement");
var BMI, height, weight;
const age = parseFloat(document.querySelector(".age-input-field").value);

calculateButton.addEventListener("click", ()=>{
    
    height = heightInput.value;
    weight = weightInput.value;
    BMI = weight/(height**2); 
    result.innerText = BMI;

    if (BMI < 18.5) {
        document.querySelector(".result-statement").classList.add("underweight");
        document.querySelector(".result-statement").textContent = "Your BMI falls within the underweight range";
    } else if (BMI >= 18.5 && BMI < 24.9) {
        document.querySelector(".result-statement").classList.add("normal-weight");
        document.querySelector(".result-statement").textContent = "Your BMI is within the normal weight range";
    } else if (BMI >= 25 && BMI < 29.9) {
        document.querySelector(".result-statement").classList.add("overweight");
        document.querySelector(".result-statement").textContent = "Your BMI falls within the overweight range";
    } else {
        document.querySelector(".result-statement").classList.add("obese");
        document.querySelector(".result-statement").textContent = "Your BMI falls within the obese range";
    }
    
    
});
