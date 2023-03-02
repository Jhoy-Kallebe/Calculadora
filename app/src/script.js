const display = document.querySelector('#display');
const opr = document.querySelector('.operator');
const valueOneDisplay = document.querySelector('.valueOne');
let contFloat = 0;
let operatorAccount = null;
let valueOne = 0;
let valueTwo = 0;
let result = 0;

display.value = '0';

function clickButton(number) {
    if(display.value.length <= 1 && display.value === '0'){
        if(number !== '.') {
            display.value = '';
        }
    }
    if((number === '.' && contFloat === 0) || number !== '.'){
        display.value += number;
        if(number === '.') {
            contFloat++;
        }
    }
}

function clickSymbol(symbol) {
    switch (symbol) {
        case 'CA':
            display.value = '0';
            contFloat = 0;
            opr.innerText = '';
            valueOneDisplay.innerText = '';
            break;
        case '=': 
            executeAccount(operatorAccount);
            display.value = result;
            opr.innerText = '';
            valueOneDisplay.innerText = '';
            break;
    }
}

function clickOperator(operator) {
    switch (operator) {
        case '+':
            setOperator(operator);
            break;
        case '-':
            setOperator(operator);
            break;
        case 'x':
            setOperator(operator);
            break;
        case '/':
            setOperator('÷');
            break;
    }
    operatorAccount = operator;
    valueOne = display.value;
    display.value = '0';
    valueOneDisplay.innerText = valueOne;
}

function setOperator(symbol) {
    opr.innerText = symbol;
}

function executeAccount(operator) {
    switch (operator) {
        case '+':
            valueTwo = display.value;
            add(valueOne, valueTwo);
            break;
        case '-':
            valueTwo = display.value;
            sub(valueOne, valueTwo);
            break;
        case 'x':
            valueTwo = display.value;
            multi(valueOne, valueTwo);
            break;
        case '/':
            valueTwo = display.value;
            divi(valueOne, valueTwo);
            break;
    }
}

function add(numberOne, numberTwo) {
    result = parseFloat(numberOne) + parseFloat(numberTwo);
}

function sub(numberOne, numberTwo) {
    result = numberOne - numberTwo;
}

function multi(numberOne, numberTwo) {
    result = numberOne * numberTwo;
}

function divi(numberOne, numberTwo) {
    result = numberOne / numberTwo;
}