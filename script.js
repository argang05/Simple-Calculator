// Append values to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Delete the last character
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Perform the calculation
function calculate() {
    const display = document.getElementById('display');
    try {
        // Replace the division and multiplication symbols for evaluation
        const expression = display.value.replace(/÷/g, '/').replace(/×/g, '*').replace(/−/g, '-');
        const result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
        setTimeout(() => clearDisplay(), 1500);
    }
}
