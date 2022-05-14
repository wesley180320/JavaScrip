var currentNumber = 1;

function increment() {

    currentNumber += 1;

    document.getElementById('currentNumber').innerHTML = currentNumber;
}

function decrement() {

    currentNumber -= 1;


    document.getElementById('currentNumber').innerHTML = currentNumber;


}