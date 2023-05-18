let sum = 0

for (let i = 0 ; i < 1 ; i++) {
    const number = prompt ("Inserisci un numero intero di 4 cifre")

    if ( parseFloat (number) !== parseInt (number) || 
        number.length !== 4 && parseInt (number) > 0 || 
        number.length !== 5 && parseInt (number) < 0 ) {
        console.log ("Inserisci un numero intero di 4 cifre, perfavore")
        i--
    
    } else if ( parseInt (number) < 0 ) {
        const absoluteValue = Math.abs ( parseInt (number) )
        const absoluteValueString = "" + absoluteValue
        for (let j = 1 ; j < absoluteValueString.length ; j++) {
            sum += parseInt(absoluteValueString[j])
        }
        sum -= parseInt (absoluteValueString[0])
        console.log ("La somma delle cifre di " + number + " è: " + sum)

    } else {
        for (let j = 0 ; j < number.length ; j++) {
            sum += parseInt (number[j])
        }
        console.log ("La somma delle cifre di " + number + " è: " + sum)
    }
}