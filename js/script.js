var mioArray = ['rossi', 'bianchi', 'neri', 'verdi', 'gialli'];
console.log(mioArray);

var cognomeUtente = prompt('Inserisci il tuo cognome');
console.log(cognomeUtente);

mioArray.push(cognomeUtente);
console.log(mioArray);

mioArray.sort();
console.log(mioArray);
document.getElementById("lista").innerHTML = mioArray;


// var indiceCognome = mioArray.indexOf(cognomeUtente) + 1 ;
// console.log('la tua posizione è:', indiceCognome );
// alert('la tua posizione è:', indiceCognome );
 
for ( i = 0 ; i < mioArray.length ; i++ ) {
    var indiceCognome = mioArray.indexOf(cognomeUtente) + 1 ;
    console.log('la tua posizione è:', indiceCognome );
    document.getElementById("demo").innerHTML = indiceCognome;
}

//while ( i = 1 ; i < mioArray.length ; i++ ) {
    //mioArray++;
    //console.log(mioArray);
//}