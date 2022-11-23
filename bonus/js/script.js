const container = document.getElementById('container');

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

    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
        container.innerHTML += `
            <div class="fizzbuzz">
                FizzBuzz
            </div>
        `;
    }
    else if(i % 3 === 0){
        console.log("Fizz");
        container.innerHTML += `
            <div class="fizz">
                Fizz
            </div>
        `;
    }
    else if(i % 5 === 0){
        console.log("Buzz");
        container.innerHTML += `
            <div class="buzz">
                Buzz
            </div>
        `;
    }
    else{
        console.log(i);
        container.innerHTML += `
            <div>
                ${i}
            </div>
        `;
    }
}