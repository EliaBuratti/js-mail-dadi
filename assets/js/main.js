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

randomNuber();

function randomNuber () {

const userNumber = Math.floor(Math.random() * 6) + 1;
console.log(userNumber);

const pcNumber = Math.floor(Math.random() * 6) + 1;
console.log(pcNumber);

//stampo in pagina i numeri

const diceUser = document.querySelector('.user').innerHTML = userNumber;

const dicePc = document.querySelector('.pc').innerHTML = pcNumber;

//confronto i risultati e stabilisco il vincitore + creo un elemento in pagina che comunica chi ha vinto

const resultEl = document.querySelector('.result');




if (userNumber > pcNumber) {
    console.log('user win');

    resultEl.insertAdjacentHTML('beforebegin', `<h2 class="winner">👈 User win.</h2>`);
    
} else if ( userNumber < pcNumber) {
    console.log('pc win');

    resultEl.insertAdjacentHTML('beforebegin', `<h2 class="winner">👉 Pc win.</h2>`);

} else {
    console.log('Draw');

    resultEl.insertAdjacentHTML('beforebegin', `<h2 class="winner">Draw.</h2>`);
}};

//rilancio i dadi
const retry = document.querySelector('.dice_game');

retry.addEventListener('click', function(){

    document.querySelector('.winner').remove();
    randomNuber();
});


// verifica della mail 

const whiteList = ['mariorossi@gmail.com', 'luigiesposito@gmail.com', 'andreamarconi@gmail.com'];

const mailForm = document.querySelector('.check_mail');


mailForm.addEventListener('submit', function(e) {

    //impedisco il refresh della pagina dopo aver cliccato su 'verifica'
    e.preventDefault();

    const userCheck = document.querySelector('input').value;
    console.log('la tua e-mail è', userCheck);

    if (whiteList.includes(userCheck)) {
        console.log('Benvenuto');

        mailForm.insertAdjacentHTML('beforeend', `<h2>Benvenuto <br>${userCheck}</h2>`)

    } else {
        console.log('Non sei presente nella lista');

        mailForm.insertAdjacentHTML('beforeend', '<h2>Non sei presente nella lista</h2>')
    }


});

