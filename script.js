let displayValue = '0';
let operator = '';
let operand = '';

    function getNumber(number) {
        if (displayValue === '0') {
            displayValue = number;
        } else {
            displayValue += number;
        }
        updateDisplay();
        const clickedButton = event.target;

    clickedButton.style.backgroundColor = 'grey';

    setTimeout(() => {
        clickedButton.style.backgroundColor = '';
    }, 100);
    }

    function getOperator(op) {
        operator = op;
        operand = displayValue;
        displayValue = '0';
        updateDisplay();
        const clickedButton = event.target;

        clickedButton.style.backgroundColor = 'grey';
    
        setTimeout(() => {
            clickedButton.style.backgroundColor = '';
        }, 100);
    }

    function calculateResult() {
        let result;
        const clickedButton = event.target;

        clickedButton.style.backgroundColor = 'grey';
    
        setTimeout(() => {
            clickedButton.style.backgroundColor = '';
        }, 100);
        switch (operator) {
            case '+':
                result = parseFloat(operand) + parseFloat(displayValue);
                break;
            case '-':
                result = parseFloat(operand) - parseFloat(displayValue);
                break;
            case '*':
                result = parseFloat(operand) * parseFloat(displayValue);
                break;
            case '÷':
                if (parseFloat(displayValue) !== 0) {
                    result = parseFloat(operand) / parseFloat(displayValue);
                } else {
                    alert("Cannot divide by zero");
                    clearDisplay();
                    return;
                }
                break;
        }
        displayValue = result.toString();
        updateDisplay();
        operator = '';
        operand = '';
    }

    function clearDisplay() {
        displayValue = '0';
        operator = '';
        operand = '';
        updateDisplay();
        const clickedButton = event.target;

        clickedButton.style.backgroundColor = 'grey';
    
        setTimeout(() => {
            clickedButton.style.backgroundColor = '';
        }, 100);
    }

    function updateDisplay() {
        document.getElementById('output').value = displayValue;
    }
    