var inputBox = document.getElementById('finalV');

    function updateInput(value) {
        inputBox.value += value;
    }

    function clearInput() {
        inputBox.value = '';
    }

    function backspace() {
        inputBox.value = inputBox.value.slice(0, -1);
    }

    function solve() {
        let expression = inputBox.value;

        // Replace 'x' with '*' and '÷' with '/'
        expression = expression.replace(/x/g, '*').replace(/÷/g, '/');

        try {
            // Use eval to evaluate the expression
            let result = eval(expression);

            // Update the display with the result
            inputBox.value = result;
        } catch (error) {
            // Handle errors, e.g., if the expression is invalid
            inputBox.value = 'Error';
        }
    }

    // Add event listeners for each button
    document.getElementById('Equal').addEventListener('click', solve);
    document.getElementById('AC').addEventListener('click', clearInput);
    document.getElementById('Back').addEventListener('click', backspace);

    // Add event listeners for numeric and operator buttons
    var buttons = document.querySelectorAll('.calculator-form button');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            updateInput(button.textContent);
        });
    });