let numeriCasuali = [];

let arrayNumeriUtente = [];

for (i=0; i<5; i++) {
    numeriCasuali.push(getRandomInt(1, 100))
}

document.getElementById("numeri-casuali").innerHTML = `Hai 5 secondi per imparare questi numeri: ${numeriCasuali}`


setTimeout (numeriDisappear , 2900 );

setTimeout (myFunction , 3000 );

function myFunction () {
    
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
    const numeriGenerati = document.getElementById("numeri-casuali");
    numeriGenerati.style.display = "none";
}

function shuffle (numeriCasuali) {
    numeriCasuali.sort ( () => ( Math.random () - 0.5 ))
}