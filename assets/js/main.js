/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Mail
Chiedi all'utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" */


//gioco dadi


// genero numeri casuali
const userNumber = Math.floor(Math.random() * 6) + 1;
console.log(userNumber);

const pcNumber = Math.floor(Math.random() * 6) + 1;
console.log(pcNumber);

//confronto i risultati e stabilisco il vincitore
if (userNumber > pcNumber) {
    console.log('user win');
    
} else if ( userNumber < pcNumber) {
    console.log('pc win');

} else {
    console.log('Draw');
};


// verifica della mail 

const whiteList = ['mariorossi@gmail.com', 'luigiesposito@gmail.com', 'andreamarconi@gmail.com'];

const mailForm = document.querySelector('form');


mailForm.addEventListener('submit', function(e) {

    //impedisco il refresh della pagina dopo aver cliccato su 'verifica'
    e.preventDefault();

    const userCheck = document.querySelector('input').value;
    console.log('la tua e-mail è', userCheck);

    if (whiteList.includes(userCheck)) {
        console.log('Benvenuto');

    } else {
        console.log('Non sei presente nella lista');
    }


});

