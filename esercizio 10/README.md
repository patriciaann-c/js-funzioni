# Esercizio 10
Un tracker di spedizioni usa codici numerici. Scrivi una funzione che riceve un codice (1, 2, 3) e restituisce "In elaborazione" per 1, "Spedito" per 2, "Consegnato" per 3. Se il codice non esiste, restituisce "Stato sconosciuto".

## Ragionamento
- Dichiara la FUNZIONE
    - usa lo switch per 
        - case 1, restituisce "In elaborazione"
        - case 2, restituisce "Spedito"
        - case 3, restituisce "Consegnato"
        - default restituisce "Stato sconosciuto"

## Codifica
``` js
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
```