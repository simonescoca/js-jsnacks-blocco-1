const invitati = [
    "Valentina",
    "Davide",
    "Emma",
    "Francesco",
    "Alessandro",
    "Luca",
    "Marta",
    "Giulia",
    "Matteo",
    "Lorenzo",
    "Giovanni",
    "Marco",
    "Giorgia",
    "Alice",
    "Sofia",
    "Leonardo",
    "Greta",
    "Anna",
    "Gabriele",
    "Aurora"
]

console.log ("Questi sono gli invitati \u2193")

for (let i = 0 ; i < invitati.length ; i++) {
    console.log ((i + 1) + ". " + invitati[i])
}


const chiSei = prompt ("Verifichiamo se sei nella lista degli invitati. Come ti chiami?")
let check = false

for (let i = 0 ; i < invitati.length ; i++) {
    if (chiSei === invitati[i]) {
        check = true
    }
}

if (check) {
    console.log ("Ben arrivato/a Signor/a " + chiSei + "!")

} else {
    console.log ("Lei non può entrare, non risulta nella lista")
}
