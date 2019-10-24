// Fizz Buzz test:
// scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi Buzz.
//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

//creazione dell'array che verrà stampato
var array100 = new Array(100);

//popolo l'array con 100 elementi
for (var i = 0; i < 100; i++) {

    array100[i] = i + 1; 

}

//stampo l'array 
for (var j = 0; j < array100.length; j++) {

    console.log(array100[j]); 

}