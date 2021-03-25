var mioArray = ['rossi', 'bianchi', 'neri', 'verdi', 'gialli'];
console.log(mioArray);

var cognomeUtente = prompt('Inserisci il tuo cognome');
console.log(cognomeUtente);

mioArray.push(cognomeUtente);
console.log(mioArray);

mioArray.sort();
console.log(mioArray);

for (var i = 0; i < mioArray.length; i++ ) {
    var cognomeAttuale = mioArray[i];
    var contentUl = document.getElementById('lista').innerHTML;
    document.getElementById('lista').innerHTML = contentUl + '<li>' + cognomeAttuale + '</li>';
}

var indiceCognome = mioArray.indexOf(cognomeUtente) + 1 ;
console.log('la tua posizione è:', indiceCognome );
document.getElementById("demo").innerHTML = indiceCognome;

