const display = document.querySelector('#display');
let opr = document.querySelector('.operator');
let contFloat = 0;

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
            break;
        case '+':
            setOperator(symbol);
            break;
        case '-':
            setOperator(symbol);
            break;
        case 'x':
            setOperator(symbol);
            break;
        case '/':
            setOperator('÷');
            break;
    }
}

function setOperator(symbol) {
    opr.innerText = symbol;
}