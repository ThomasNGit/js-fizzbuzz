// Fizz Buzz test:
// scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi Buzz.
//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.


//creazione dell'array che verrà stampato
var array100 = new Array(100);

//popolo l'array con 100 elementi
for (var i = 0; i < 101; i++) {

    array100[i] = i; 

}


//stampo l'array 
for (var j = 1; j < array100.length; j++) {

    var numeroPrecedente = document.getElementById("numbers").innerHTML;

    console.log(array100[j]);

    document.getElementById("numbers").innerHTML = numeroPrecedente + '<li class="normal">' + j + '</li>';
    

    if (j % 15 === 0) {


         document.getElementById("numbers").innerHTML = numeroPrecedente +  '<li class="fizz">"FizzBuzz"</li>'

         console.log("FizzBuzz");
        

     } else if (j % 3 == 0) {

         document.getElementById("numbers").innerHTML = numeroPrecedente +  '<li class="buzz">"Fizz"</li>'

         console.log("Fizz");
        
     } else if (j % 5 == 0) {

         document.getElementById("numbers").innerHTML = numeroPrecedente +   '<li class="fizzbuzz">"Buzz"</li>'

         console.log("Buzz");
     }    
    //  } else {

    //      document.getElementById("numbers").innerHTML = numeroPrecedente +  array100[j];

    //      console.log(array100[j]);
        
    //  }

    
}