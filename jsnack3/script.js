const numeriPari = []
let number = 0

for (let i = 0 ; i < 6 ; i++) {
    number = parseFloat (prompt ("Inserisci il " + (i + 1) + "º numero"))
    if ( number !== parseInt (number) ){
        console.log ("Inserisci un numero intero, perfavore")
        i--

    } else if ( number % 2 === 0 ) {
        numeriPari.push(number)
    }
}

console.log ("Ho inserito in un array solo i numeri pari che mi hai dato: (" + numeriPari + ")")