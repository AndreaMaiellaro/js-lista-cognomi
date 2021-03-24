var mioArray = ['rossi', 'bianchi', 'neri', 'verdi', 'gialli'];
console.log(mioArray);

var cognomeUtente = prompt('Inserisci il tuo cognome');
console.log(cognomeUtente);

mioArray.push(cognomeUtente);

console.log(mioArray);

mioArray.sort();
alert(mioArray);
 
for ( i = 1 ; i <= mioArray.length ; i++ ) {
    mioArray++;

    alert(cognomeUtente);
}

//while ( i = 1 ; i < mioArray.length ; i++ ) {
    //mioArray++;
    //console.log(mioArray);
//}