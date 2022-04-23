const d = document, w = window;

export function scroll(btn, showBtn){
    const $btnArrowUp = d.querySelector(btn);

    w.addEventListener("scroll", (e) => {

        let hScroll = w.pageYOffset || d.documentElement.scrollTop;
    
        if(hScroll >= 55){
            $btnArrowUp.classList.add(showBtn); 
        }else{
            $btnArrowUp.classList.remove(showBtn);
        }
    });

    d.addEventListener("click", (e)=>{
        if(e.target.matches(btn) || e.target.matches(`${btn} *`)){
            w.scrollTo({
                behavior:"smooth",
                top: 0
            });
        }
    })
    
      
}