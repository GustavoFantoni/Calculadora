class Calculator {
    constructor() {
        this.display = document.getElementById('display');
        this.currentInput = '';
        this.result = '';
    }

    addToDisplay(value) {
        this.currentInput += value; // Valor usado nos cálculos

        // Substituir '*' por '×' e '/' por '÷' apenas na string exibida no visor
        this.inputString = this.display.value + value;
        this.inputString = this.inputString.replace(/\*/g, '×');
        this.inputString = this.inputString.replace(/\//g, '÷');

        this.display.value = this.inputString;
    }

    calculateResult() {
        try {
            this.result = eval(this.currentInput);
            this.display.value = this.result;
            this.currentInput = this.display.value;
        } catch (error) {
            this.display.value = 'Erro';
            this.currentInput = '';
        }
    }

    clearDisplay() {
        this.currentInput = '';
        this.result = '';
        this.display.value = '';
    }

    backspace() {
        this.currentInput = this.currentInput.slice(0, -1);
        this.inputString = this.inputString.slice(0, -1);
        this.display.value = this.inputString
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
