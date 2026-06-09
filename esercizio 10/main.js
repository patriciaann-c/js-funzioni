const code = Number(prompt("inserisci il codice da 1 a 3"));

function getTracker(code) {

    switch (code) {
        case 1: return "In elaborazione";
        case 2: return "Spedito"
        case 3: return "Consegnato"
        default: return "Stato non esistente"
    }
}

console.log(getTracker(code));