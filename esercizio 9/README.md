# Esercizio 9
Etichetta l'utente in base alla sua età. Sotto i 18 anni "Minorenne", "Giovane Adulto" tra 18 e 35, "Adulto" se tra 36 e 60, "Senior" oltre 60.

## Ragionamento
- Chiedi all'utente la sua età
- SE ha meno di 18 anni
    - RETURN "Minorenne"
- ALTRIMENTI SE ha l'età tra i 18 e 35
    - RETURN "Giovane Adulto"
- ALTRIMENTI SE ha l'età tra i 36 e 60 anni
    - RETURN "Adulto"
- ALTRIMENTI se ha più di 60 anni
    - RETURN "Senior"

## Codifica
``` js
const age = Number(prompt("Inserisci la tua età"));

function getAge(age) {

    if (age < 18) {
        return "Minorenne"
    } else if (age >= 18 && age <= 35) {
        return "Giovane adulto"
    } else if (age >= 36 && age <= 60) {
        return "Adulto"
    } else if (age > 60) {
        return "Senior"
    }
}

const etichetta = getAge(age);
console.log(etichetta);
```