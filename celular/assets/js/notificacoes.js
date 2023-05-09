function carregar() {
    var msge = document.getElementById('turno');
    var msG = document.getElementById('p');
    var msg = document.getElementById('tela');
    var data = new Date();
    var hora = data.getHours();
    var minut = data.getMinutes();
    var seg = data.getSeconds();

    if (hora < 10) { hora = `0${hora }` }
    if (minut < 10) { minut = `0${minut }` }
    if (seg < 10) { seg = `0${seg }` }

    msg.innerHTML = `${hora }:${minut}:${seg} `;
    msG.innerHTML = `Eltondev no comando`;

    if (hora >= 0 && hora < 12) {
        document.body.style.background = `blue`;
        msge.innerHTML = `Manhã`;
    } else if (hora >= 12 && hora < 18) {
        document.body.style.background = `red`;
        msge.innerHTML = `Tarde`;
    } else {
        document.body.style.background = `pink`;
        msge.innerHTML = `Noite`;

    }

}
//faz com que atualiza a cada segundo.
setInterval(carregar, 1000);



//apagar a tela do celular
var tela = document.querySelector('.area--cel--screen');
var power = document.querySelector('.power');
var calc = document.querySelector('.calc');
var ggl = document.querySelector('.ggl');
var google = document.querySelector('.google');

power.addEventListener('click', () => {
    if (tela.style.display == "none") {
        tela.style.display = 'block';
        calc.style.display = 'none';
        google.style.display = 'none';

    } else {
        tela.style.display = 'none';
    }
});


ggl.addEventListener('click', () => {
    if (google.style.display == "none") {
        google.style.display = 'flex';
        calc.style.display = 'none';

    } else {
        google.style.display = 'none';
    }
});