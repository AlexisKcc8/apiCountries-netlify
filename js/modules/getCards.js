
const d = document;

// seleccionar donde va a estar el contenido
const $containerCards = d.querySelector('.container-cards');

// seleccionar el contenido del template
const $template = d.getElementById('template-card').content;

// crear el fragment
const $fragment = d.createDocumentFragment();


export async function getData(){
    try {
        let res = await fetch('https://restcountries.com/v3.1/all');
        if(res.status !== 200) {
            throw {status: res.status, statusText: res.statusText}
        }

        let json = await res.json();
        paintCards(json, $containerCards);
        details(json);
        
    } catch (error) {
        let messageError = error.statusText || "Ocurrio un error";
        $containerCards.textContent = `Error: ${error.status} - ${messageError}`
    }
}


export const paintCards  = (array, container)=>{
    container.innerHTML = " "
    if(array !== " "){

        array.forEach((card)=>{
    
            //? 1.- primero tenemos que clonar el template
            const cloneT = $template.cloneNode(true);
    
            //? 2.- Buscamos los elementos dentro del clone y les asignamos los valores
            const $cardLayer = cloneT.querySelector('.card__layer');
            $cardLayer.setAttribute("card-country", card.name.common);
            

            const $flag = cloneT.querySelector('.card__flag');
            $flag.src = card.flags.png;
    
            const $name = cloneT.querySelector('.card__name-country');
            $name.textContent = card.name.common;
    
            const $population = cloneT.querySelector('.card__date-population');
            $population.textContent = card.population;
    
            const $region = cloneT.querySelector('.card__date-region');
            $region.textContent = card.region;
    
            const $capital = cloneT.querySelector('.card__date-capital');
            $capital.textContent = card.capital;
    
            //? 3.- insertamos el clone en el fragment
            $fragment.appendChild(cloneT);
            // console.log(card);
        })
    
        container.appendChild($fragment);
        // console.log(res);
        // console.log(json);
    }else{
        console.log('error');
    }
}

function details(array){
    const $modalDetail = d.querySelector('.modal-country')
    d.addEventListener('click', e=>{
        if(e.target.matches('.card *') ){
            let country = e.target.getAttribute('card-country');

            // console.log(array);
            const findCountry = array.find(c => c.name.common === country);
            // const resultFind = usuarios.find(usuarios => usuarios.id > 2);
            console.log(findCountry);

            $modalDetail.classList.toggle('show-modal');
        }
    });

}
// export default getData();