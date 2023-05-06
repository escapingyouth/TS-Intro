const numberButtons = document.querySelectorAll(
	'[data-number]'
) as NodeListOf<HTMLButtonElement>;
const operationButtons = document.querySelectorAll(
	'[data-operation]'
) as NodeListOf<HTMLButtonElement>;
const equalsButton = document.querySelector(
	'[data-equals]'
) as HTMLButtonElement;
const deleteButton = document.querySelector(
	'[data-delete]'
) as HTMLButtonElement;
const allClearButton = document.querySelector(
	'[data-all-clear]'
) as HTMLButtonElement;
const previousOperandTextEl = document.querySelector(
	'[data-previous-operand]'
) as HTMLButtonElement;
const currentOperandTextEl = document.querySelector(
	'[data-current-operand]'
) as HTMLButtonElement;

class Calculator {
	currentOperand: string;
	previousOperand: string;
	operation: string | undefined;

	constructor(
		public previousOperandTextEl: HTMLButtonElement,
		public currentOperandTextEl: HTMLButtonElement
	) {
		this.previousOperandTextEl = previousOperandTextEl;
		this.currentOperandTextEl = currentOperandTextEl;

		this.currentOperand = '';
		this.previousOperand = '';
		this.operation = '';
		this.clear();
	}

	private getDisplayNumber(number: string) {
		const integerDigits = +number.split('.')[0];
		const decimalDigits = number.split('.')[1];

		let integerDisplay: string;

		if (isNaN(integerDigits)) {
			integerDisplay = '';
		} else {
			integerDisplay = integerDigits.toLocaleString('en', {
				maximumFractionDigits: 0
			});
		}

		if (decimalDigits != null) {
			return `${integerDisplay}.${decimalDigits}`;
		} else {
			return integerDisplay;
		}
	}

	appendNumber(input: string) {
		if (input === '.' && this.currentOperand.includes('.')) {
			return;
		}
		this.currentOperand = this.currentOperand + input;
	}

	chooseOperation(operation: string) {
		if (this.currentOperand === '') return;
		if (this.previousOperand !== '') {
			this.compute();
		}
		this.operation = operation;
		this.previousOperand = this.currentOperand;
		this.currentOperand = '';
	}

	compute() {
		let computation: number;
		const prev = +this.previousOperand;
		const current = +this.currentOperand;

		if (isNaN(prev) || isNaN(current)) return;

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
		this.currentOperandTextEl.innerText = this.getDisplayNumber(
			this.currentOperand
		);

		if (this.operation != null) {
			this.previousOperandTextEl.innerText = `${this.getDisplayNumber(
				this.previousOperand
			)} ${this.operation}`;
		} else {
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
