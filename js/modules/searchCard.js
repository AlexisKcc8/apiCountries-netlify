import {paintCards} from './getCards.js'

const d = document;
const $containerCards = d.querySelector('.container-cards');
export function searchCard(){
    const $form = d.getElementById('form-search');
    const $inpSearh = $form.inpSearch;
    d.addEventListener('keyup', e=>{
        if(e.target === $inpSearh){
            if(e.key === 'Escape'){
                e.target.value = " ";
            }else{

                getCard(e.target.value.toLowerCase());
            }


        }
    });
}

async function getCard(name){
    try {
        if(name === ' '){
            console.log('en espera')
        }else{
            let res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
            if(res.status !== 200) {
                throw {status: res.status, statusText: res.statusText}
            }
            let json = await res.json();
            console.log(json);
            paintCards(json, $containerCards);
        }
    } catch (error) {
        let message = error.statusText || "ocurrio un error"
        console.log(message);
    }
}