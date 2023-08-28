let input = document.getElementById('result');

function append(value) {
    input.value += value;
}

function clearInput() {
    input.value = '';
}

function calculate() {
    try {
        let result = eval(input.value);
        input.value = result;
    } catch (error) {
        input.value = 'Error';
    }
}