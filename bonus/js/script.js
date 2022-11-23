const container = document.getElementById('container');
const fizzBuzzHtml = `
<div class="fizzbuzz">
    <span>
        FizzBuzz
    </span>
</div>
`;
const fizzHtml = `
<div class="fizz">
    <span>
        Fizz
    </span>
</div>
`;
const buzzHtml = `
<div class="buzz">
    <span>
        Buzz
    </span>
    <img class="hand hand-tl" src="./img/hand.png" alt=""> 
    <img class="hand hand-tr" src="./img/hand.png" alt=""> 
    <img class="hand hand-bl" src="./img/hand.png" alt=""> 
    <img class="hand hand-br" src="./img/hand.png" alt=""> 
</div>
`;
const fizzbuzz = 'FizzBuzz';
const fizz = 'Fizz';
const buzz = 'Buzz';

for (let i = 1; i <= 100; i++) {
    
    // console.log(i);
    /**
     * ! modifica:
     * ! prima di tutto chiedo se i === 0, oppure faccio partire i da 1
     *
     * chiedo se i fosse divisibile per 3 AND i fosse divisibile per 5
     * VERO
     *      fizzbuzz
     * FALSO
     *      chiedo se i fosse divisibile per 3
     *      VERO
     *          fizz
     *      FALSO
     *          chiedo se i fosse divisibile per 5
     *          VERO
     *              buzz
     * 
     * chiedendo prima se fosse divisibile per entrambi cosi
     * nel caso sia vero non ci sarebbe bisogno di richiedere se fosse divisibile 
     * per 3 o 5
     * In caso contrario gli chiedo se fosse divisibile per 3 (o 5 è indifferente)
     * cosi nel caso sia vero sappiamo per certo che non lo sarà per 5 perchè
     * il primissimo if ha dato come esito FALSE
     * In caso contrario chiediamo se fosse divisibile per 5
     */

    // queste variabili mi servono solo dentro il for le inizzializzo qui
    let injection, result;

    if(i % 3 === 0 && i % 5 === 0){
        result = fizzbuzz;
        injection = fizzBuzzHtml;
    }
    else if(i % 3 === 0){
        result = fizz;
        injection = fizzHtml;
    }
    else if(i % 5 === 0){
        result = buzz;
        injection = buzzHtml;
    }
    else{
        result = i;
        injection = `
            <div>
                ${i}
            </div>
        `;
    }
    console.log(result);
    container.innerHTML += injection;
}