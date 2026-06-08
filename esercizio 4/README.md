# Esercizio 4
Un professore deve convertire un voto numerico in un giudizio. Scrivi una funzione che restituisca "Insufficiente", "Sufficiente" o "Ottimo" in base al punteggio

## Ragionamento
- Chiedi all'utente di inserire un voto
- Dichiara FUNZIONE
    - IF voto < 6
        - stampa "Insufficiente"
    ELSE IF voto >= 6
        - stampa "Sufficiente"
    ELSE IF voto >= 8
        - stampa "Ottimo"
    - restituisci la funzione

## Codifica
``` js
// DICHIARAZIONE
let vote = Number(prompt("Inserisci un voto da 1 a 10"));

// FUNCTION
function calcVote(vote) {

    const language = navigator.language;

    if (vote < 6) {
        return language === "it" ? "Insufficiente" : "Insufficient";
    } else if (vote <= 9) {
        return language === "it" ? "Sufficiente" : "Good";
    } else {
        return language === "it" ? "Ottimo" : "Excellent";
    }
}

// RICHIAMO
const comment = calcVote(vote);

//OUTPUT
console.log(comment);
```