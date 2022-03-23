let numeriCasuali = [];

let arrayNumeriUtente = [];

let numeriCorretti = [];

for (i=0; i<5; i++) {
    numeriCasuali.push(getRandomInt(1, 100))
}

const numeriDaMemorizzare = document.getElementById("numeri-da-memorizzare");

numeriDaMemorizzare.innerHTML = `Hai 5 secondi per imparare questi numeri: ${numeriCasuali}`

setTimeout (numeriDisappear , 5000 );

setTimeout (inserimentoNumeri , 5001 );

setTimeout (numeriAppear , 6000)

for (let i = 0; i < arrayNumeriUtente.length; i++) {
    if (!arrayNumeriUtente.includes(numeriCasuali)) {
        numeriCorretti.push(arrayNumeriUtente(i));
    }
}







function inserimentoNumeri () {
    
    for (i=0; i < 5; i++) {
        let numeriUtente = parseInt (prompt ("Inserisci uno dei numeri che hai memorizzato"));
        arrayNumeriUtente.push (numeriUtente);
    }

    console.log (`I numeri inseriti dall'utente sono: ${arrayNumeriUtente}`)


}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function numeriDisappear () {
    numeriDaMemorizzare.style.display = "none";
}

function numeriAppear () {
    document.getElementById("risultato-numeri").innerHTML = `I numeri da memorizzare erano ${numeriCasuali}`
    document.getElementById("risultato-finale").innerHTML = `Hai indovinato ${numeriCorretti.length} numeri: ${numeriCorretti}`
}

function shuffle (numeriCasuali) {
    numeriCasuali.sort ( () => ( Math.random () - 0.5 ))
}