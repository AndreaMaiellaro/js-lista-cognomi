var mioArray = ['rossi', 'bianchi', 'neri', 'verdi', 'gialli'];
console.log(mioArray);

var cognomeUtente = prompt('Inserisci il tuo cognome');
console.log(cognomeUtente);

mioArray.push(cognomeUtente);

console.log(mioArray);

mioArray.sort();
console.log(mioArray);
alert(mioArray) ;
 
for ( i = 1 ; i <= mioArray.length ; i++ ) {
    mioArray++;

    console.log(mioArray);
}

//while ( i = 1 ; i < mioArray.length ; i++ ) {
    //mioArray++;
    //console.log(mioArray);
//}