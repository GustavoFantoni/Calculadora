function soma(value) {
    document.getElementById('result').value += value;
}

function calculate() {
    var result = eval(document.getElementById('result').value);
    document.getElementById('result').value = result;
}

function limpar() {
    console.log('funcao_clear')
    document.getElementById('result').value = '';
}