
class Arithematic {
    sum(x, y) {
        return x + y;
    }
    mul(x, y) {
        return x * y;
    }
    sub(x, y) {
        return x - y;
    }
    div(x, y) {
        return x / y;
    }
    mod(x, y) {
        return x % y;
    }
}



var modulus = document.querySelector('#mod');
var del = document.querySelector('#delete');
var clear = document.querySelector('#clear');
var sq = document.querySelector('#sq');

let sign = document.querySelectorAll('.sign')
let nums = document.querySelectorAll('.btn > .num')
let inputDisplay = document.getElementById('content-display')

var value1;
var value2;
var count = 0;

var showValue = document.querySelector(".show-value > p");


let operation = new Arithematic();


sign.forEach(elem => {
    elem.addEventListener('click', () => {
        if(count == 0) {
            value1 = +inputDisplay.value;
            count++;
            showValue.innerHTML = inputDisplay.value + elem.innerHTML;
            inputDisplay.value = null;
        }
        else {
            value2 = +inputDisplay.value;

            switch(elem.innerHTML) {
                case '+':
                    inputDisplay.value = operation.sum(value1, value2);
                    break;
                case '-':
                    inputDisplay.value = operation.sub(value1, value2);
                    break;
                case 'x':
                    inputDisplay.value = operation.mul(value1, value2);
                    break;
                case '÷':
                    inputDisplay.value = operation.sum(value1, value2);
                    break;
                case '%':
                    inputDisplay.value = operation.mod(value1, value2);
                    break;
            }
            count = 0;
        }
    });
});

let closeCalc = document.querySelector('#close-div');

closeCalc.addEventListener('click', () => {
    document.body.remove();
})

nums.forEach(elem => {
    elem.addEventListener('click', () => {
        inputDisplay.value += elem.innerHTML;
    });
});

clear.addEventListener('click', () => {
    inputDisplay.value = null;
    value1 = null;
    value2 = null;
    showValue.innerHTML = '';
})