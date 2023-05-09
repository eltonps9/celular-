function clicou(num) {
    var numer = document.querySelector('.respo').innerHTML;
    document.querySelector('.respo').innerHTML = numer + num;

}

function igual(num) {
    var numer = document.querySelector('.respo').innerHTML;
    if (numer) {
        document.querySelector('.respo').innerHTML = eval(numer);
    }
}

function limpar() {
    var numer = document.querySelector('.respo').innerHTML = "";

}


var calc = document.querySelector('.calc');
var calculadora = document.querySelector('.calculadora');
var google = document.querySelector('.google');

calculadora.addEventListener('click', () => {
    if (calc.style.display == "none") {
        calc.style.display = 'flex';
        google.style.display = 'none';
        document.querySelector('.respo').innerHTML = "";

    } else {
        calc.style.display = 'none';
    }
});