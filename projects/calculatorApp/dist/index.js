"use strict";
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextEl = document.querySelector('[data-previous-operand]');
const currentOperandTextEl = document.querySelector('[data-current-operand]');
class Calculator {
    constructor(previousOperandTextEl, currentOperandTextEl) {
        this.previousOperandTextEl = previousOperandTextEl;
        this.currentOperandTextEl = currentOperandTextEl;
        this.previousOperandTextEl = previousOperandTextEl;
        this.currentOperandTextEl = currentOperandTextEl;
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = '';
        this.clear();
    }
    getDisplayNumber(number) {
        const integerDigits = +number.split('.')[0];
        const decimalDigits = number.split('.')[1];
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        }
        else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0
            });
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        }
        else {
            return integerDisplay;
        }
    }
    appendNumber(input) {
        if (input === '.' && this.currentOperand.includes('.')) {
            return;
        }
        this.currentOperand = this.currentOperand + input;
    }
    chooseOperation(operation) {
        if (this.currentOperand === '')
            return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }
    compute() {
        let computation;
        const prev = +this.previousOperand;
        const current = +this.currentOperand;
        if (isNaN(prev) || isNaN(current))
            return;
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case 'x':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            default:
                return;
        }
        this.currentOperand = computation.toString();
        this.operation = undefined;
        this.previousOperand = '';
    }
    updateDisplay() {
        this.currentOperandTextEl.innerText = this.getDisplayNumber(this.currentOperand);
        if (this.operation != null) {
            this.previousOperandTextEl.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        }
        else {
            this.previousOperandTextEl.innerText = '';
        }
    }
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
    clear() {
        this.currentOperand = '';
        this.operation = undefined;
    }
}
const calculator = new Calculator(previousOperandTextEl, currentOperandTextEl);
numberButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        calculator.appendNumber(btn.innerText);
        calculator.updateDisplay();
    });
});
operationButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        calculator.chooseOperation(btn.innerText);
        calculator.updateDisplay();
    });
});
equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
});
allClearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});
deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
});
