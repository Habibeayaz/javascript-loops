//// OPDRACHT 1////
const names = ["Henk", "Piet", "Fred", "Joop"];
for (let i = 0; i < 100; i++) {
    console.log(names);
    if (i = 100) {
        console.log ("Henk" + "je", "Piet" + "je", "Fred" + "je", "Joop" + "je");
    }
}

//// OPDRACHT 2 ////


const number = [2, 4, 5, 29, 38];
console.log(number);
for (let i = 0; i<5; i++ ) {
    if (number[i] % 2 === 0) {
        console.log(number[i] * 2);
    } else {
        console.log(number[i] * 3);
    }
}

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
console.log(numbers)

/// OPDRACHT 3 ///
const squares = [30, 2, 8, 24, 11];
console.log(squares);
for ( let i = 0; i<squares.length; i++ ) {
    const volume = (Math.pow(squares.length[i], 3));
console.log("Het volume van", squares[i], "is", Math.pow(squares[i], 3));
}

