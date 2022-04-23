import {getData} from './modules/getCards.js'
import {darkMode} from "./modules/darkModeLS.js"
import {searchCard} from "./modules/searchCard.js"
import {filter} from "./modules/filterCountry.js"
import {scroll} from "./modules/btnScroll.js"


const d = document;

d.addEventListener('DOMContentLoaded', () =>{
    

    getData();
    searchCard();
    filter();
    scroll('.btn__up', 'show-btn__up');

});

darkMode('btnDarkMode', 'classDarkMode');