//DICHIARAZIONE
const prezzo_base = 4;
const tariffa_extra = 5;
const orario_partenza = 9;
const orario_arrivo = 11;

// FUNZIONE
function calcTariffa(timeStart, timeEnd, basePrice, extraPrice) {

    const extraTime = timeStart - 12;
    const baseTime = timeEnd - timeStart
    const results = baseTime * basePrice + extraTime * extraPrice;

    return results;
}

// BUSINESS LOGIC
const totale_prezzo = (calcTariffa(timeStart, timeEnd, basePrice, extraPrice));

//OUTPUT
console.log(totale_prezzo);
