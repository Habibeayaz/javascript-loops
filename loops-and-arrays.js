// ==========================================
// Opdracht 1
// Schrijf een script dat iedere naam in onderstaande array vervangt door een koosnaampje, door er -"je" achter te plakken.
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 namen zou bevatten!
// ==========================================

const names = ["Henk", "Piet", "Fred", "Joop"];
for (let i = 0; i < 100; i++) {
    console.log(names);
    if (i = 100) {
        console.log ("Henk" + "je", "Piet" + "je", "Fred" + "je", "Joop" + "je");
    }
}


// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(names) geeft: ["Henk", "Piet", "Fred", "Joop"]
// Na jouw script zie je de aangepaste waardes:
// console.log(names) geeft: ["Henkje", "Pietje", "Fredje", "Joopje"]




// ==========================================
// Opdracht 2
// Schrijf een script dat ieder EVEN getal in onderstaande array met 2 vermenigvuldigd, en ieder ONEVEN getal met 3
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================

const number = [2, 4, 5, 29, 38];
console.log(number);
for (let i = 0; i<5; i++ ) {
    if (number[i] % 2 === 0) {
        console.log(number[i] * 2);
    } else {
        console.log(number[i] * 3);
    }
}

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(numbers) geeft: [2, 4, 5, 29, 38];
// Na jouw script zie je de aangepaste waardes:
// console.log(numbers) geeft: [ 4, 8, 15, 87, 76 ];

/// Dit is een andere manier. Gevonden op internet ///

const numbers = [2, 4, 5, 29, 38];
for ( let i = 0; i < numbers.length; i++ )
{
    if ( numbers[i] % 2 === 0)
    {
        numbers[i] *= 2
    } else {
        numbers[i] *= 3
    }
}



// ==========================================
// Opdracht 3
// Schrijf een script dat voor de maat van ieder vierkant in onderstaande array het volume uitrekent.
// Vervolgens moet de huidige waarde in de array overschreven worden met: "Het volume van [x] is [y]"
// Het volume is lengte x breedte x hoogte
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================

const squares = [30, 2, 8, 24, 11];

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(squares) geeft: [30, 2, 8, 24, 11];
// Na jouw script zie je de aangepaste waardes:
// console.log(squares) geeft: [
//   'Het volume van 30 is 27000',
//   'Het volume van 2 is 8',
//   'Het volume van 8 is 512',
//   'Het volume van 24 is 13824',
//   'Het volume van 11 is 1331'
// ]

/// OPDRACHT 3 ///
const squares = [30, 2, 8, 24, 11];
console.log(squares);
for ( let i = 0; i<squares.length; i++ ) {
    const volume = (Math.pow(squares.length[i], 3));
    console.log("Het volume van", squares[i], "is", Math.pow(squares[i], 3));
}
