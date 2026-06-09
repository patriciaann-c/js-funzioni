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