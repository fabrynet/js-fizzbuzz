// scrivi un programma che stampi i numeri da 1 a 100.
// Per i multipli di 3 stampi “Fizz” al posto del numero.
// Per i multipli di 5 stampi "Buzz" al posto del numero.
// Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz" al posto del numero.

var btn = document.getElementById('btn');

btn.addEventListener('click',function(){

  for (var i = 1;i <= 100; i++) {
    if (i%3 == 0 && i%5 == 0) {
      list.innerHTML += "<li>FizzBuzz</li>";
    } else if (i%3 == 0) {
      list.innerHTML += "<li>Fizz</li>";
    } else if (i%5 == 0) {
      list.innerHTML += "<li>Buzz</li>";
    } else {
      list.innerHTML += "<li>" + i + "</li>";
    }
  }

});
