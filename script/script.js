var formula = '';
var resultado = '';
var numero = '';
var numeros = [];
var operadores = [];


function isOperador(dado) {
    if ((dado == '+') || (dado == '-') || (dado == '/') || (dado == 'x') || (dado == 'e'))
        return true;
    return false;
}


function printa(dado) {

    if (isOperador(dado)) {
        numeros.push(Number(numero));
        operadores.push(dado);
        numero = '';
        if (dado != 'e') {
            formula = formula + dado;
        }
    } else {
        numero = numero + dado;
        formula = formula + dado;
    }

    document.getElementById("formula").textContent = formula;

}

function calcula() {
    printa('e')
    let qtdNumeros = numeros.length;
    for (let x = 0; x < qtdNumeros; x++) {
        switch (operadores[x]) {
            case '+':
                resultado = numeros[x] + numeros[x + 1];
                break
            case '-':
                resultado = numeros[x] - numeros[x + 1];
                break
            case 'x':
                resultado = numeros[x] * numeros[x + 1];
                break
            case '/':
                resultado = numeros[x] / numeros[x + 1];
                break
            default:
                console.log('Not sum');
        }
        numeros[x + 1] = resultado;

    }
    document.getElementById("resultado").textContent = resultado;
}

function apaga() {
    formula = '';
    resultado = '';
    numero = '';
    numeros = [];
    operadores = [];
    document.getElementById("formula").textContent = formula;
    document.getElementById("resultado").textContent = resultado;
}