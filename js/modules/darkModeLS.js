

const d = document, ls = localStorage;

export function darkMode(btnDarkMode, classDark){
    const $btnDarkMode = d.getElementById(btnDarkMode);

    //? para recolectar todos los elementos que tengan ese data-atribute
    const $elementsDark = d.querySelectorAll("[data-dark]")

    let moon = "🌜 Dark Mode", sun = "🌞 Light Mode";

    const themeLigthMode = ()=>{
        $elementsDark.forEach(element => {
            element.classList.remove(classDark);
            element.style.transition = "background-color .4s ease-in-out"
        });
        $btnDarkMode.textContent = moon;
        ls.setItem("theme", "light");
    }
    const themeDarkMode = ()=>{
        
        $elementsDark.forEach(element => element.classList.add(classDark));
        $btnDarkMode.textContent = sun;
        ls.setItem("theme", "dark");
    }
    d.addEventListener("click",(e)=>{

        
        if(e.target === $btnDarkMode){
            
            if($btnDarkMode.textContent === moon){
                themeDarkMode();
                
            }else{
              
                themeLigthMode();
            }
        }
        
    });

    d.addEventListener("DOMContentLoaded", e=>{
        
        if(ls.getItem("theme") === null)ls.setItem("theme", "light")

        if(ls.getItem("theme") === "light")themeLigthMode()
        
        if(ls.getItem("theme") === "dark") themeDarkMode()
    });

}