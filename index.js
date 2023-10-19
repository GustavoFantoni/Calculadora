class Calculator {
    constructor() {
        this.display = document.getElementById('display');
        this.currentInput = '';
        this.result = '';
    }

    addToDisplay(value) {
        this.currentInput += value;
        this.display.value = this.currentInput;
    }

    calculateResult() {
        try {
            this.result = eval(this.currentInput);
            this.display.value = this.result;
        } catch (error) {
            this.display.value = 'Erro';
        }
    }

    clearDisplay() {
        this.currentInput = '';
        this.result = '';
        this.display.value = '';
    }

    backspace() {
        this.currentInput = this.currentInput.slice(0, -1);
        this.display.value = this.currentInput;
    }
}

const calculator = new Calculator();

function addToDisplay(value) {
    calculator.addToDisplay(value);
}

function addToOpenParenthesis() {
    calculator.addToDisplay('(');
}

function addToCloseParenthesis() {
    calculator.addToDisplay(')');
}

function calculateResult() {
    calculator.calculateResult();
}

function clearDisplay() {
    calculator.clearDisplay();
}

function backspace() {
    calculator.backspace();
}