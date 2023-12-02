//Initialize displayValue to store the input and memoryValue to stor memory operations
let displayValue = '';
let memoryValue = 0;

//Function to append a value to the display
function appendToDisplay(value) {
    //Concatenate the provided value to the existing displayValue
    displayValue += value;
    //Update the input field on the display with the new value
    document.getElementById('display').value = displayValue;
}

//Function to clear the display
function clearDisplay() {
    //Reset displayValue to an empty string
    displayValue = '';
    //Clear the input field on the display
    document.getElementById('display').value = '';
}

//Function to perform the calculation and update the display
function calculate() {
    try {
        //Evaluate the current expression stored in displayValue
        displayValue = eval(displayValue);
        //Update the input field with the calculated result
        document.getElementById('display').value = displayValue;
    } catch (error) {
        //If an error occurs during calculation, show 'Error' on the display
        document.getElementById('display').value = 'Error';
    }
}

//Function to add the current value to the memoryValue
function addToMemory() {
    //Convert the current displayValue to a float and add it to the memoryValue
    memoryValue += parseFloat(displayValue);
    //Clear the display after adding to memory
    clearDisplay();
}

//Function to recall the value from memory and display it
function recallMemory() {
    //Convert memoryValue to a string and set it as the new displayValue
    displayValue = memoryValue.toString();
    //Update the input field with the recalled value from memory
    document.getElementById('display').value = displayValue;
}