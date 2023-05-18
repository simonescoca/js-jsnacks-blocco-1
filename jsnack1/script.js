const numbersList = []
let sum = 0

for (let i = 0 ; i < 10 ; i++) {
    const number = parseFloat ( prompt ("Inserisci il " + (i + 1) + "º numero") )
    if ( isNaN (number) ) {
        console.log ("Perfavore, inserisci un numero")
        i--
    } else {
        numbersList.push(number)
        sum += number
    }
}

for (let i = 0 ; i < 10 ; i++){
    console.log ((i + 1) + ". " + numbersList[i])
}

console.log("Questi sono i numeri che hai scelto, e la loro somma è: " + sum)
