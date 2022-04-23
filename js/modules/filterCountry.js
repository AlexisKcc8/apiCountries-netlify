import {paintCards} from './getCards.js'

const d = document;
const $containerCards = d.querySelector('.container-cards');
export function filter(){

    const $btnFilter = d.querySelector('.filter');
    const $listOptions = d.querySelector('.filter__container-options');

    d.addEventListener('click', e=>{
        if(e.target.matches('.filter') || e.target.matches('.filter *')){
            $listOptions.classList.toggle('showRegions');
        }else{
            $listOptions.classList.remove('showRegions');

        }

        if(e.target.matches('.filter__option')){
            let region = e.target.textContent.toLowerCase();
            console.log(region);
            regionCountry(region);
        }
        
    })
    
}

async function regionCountry(region){
    try {
        let res = await fetch(`https://restcountries.com/v3.1/region/${region}`);

        if(res.status !== 200){
            throw {status: res.status, statusText: res.statusText}
        }

        let json = await res.json();
        console.log(json);
        paintCards(json, $containerCards);

    } catch (error) {
        let message = error.statusText || "ocurrio un error";
    }
}