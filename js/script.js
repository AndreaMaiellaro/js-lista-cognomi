var mioArray = ['rossi', 'bianchi', 'neri', 'verdi', 'gialli'];
console.log(mioArray);

var cognomeUtente = prompt('Inserisci il tuo cognome');
console.log(cognomeUtente);

mioArray.push(cognomeUtente);

console.log(mioArray);

mioArray.sort();
console.log(mioArray);
document.getElementById('lista cognomi').innerHTML = mioArray ;