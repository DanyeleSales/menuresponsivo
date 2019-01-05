   const button = document.querySelector(".btn-mobile")
    const menuMobile = document.querySelector(".nav-primary");


button.addEventListener( 'click', function(e){
    e.preventDefault();
 
    if(menuMobile.classList.contains("nav-primary")){
        menuMobile.classList.remove(".nav-primary");
        menuMobile.classList.add("is-visible")
    }else{
        menuMobile.classList.remove("is-visible");
            }

})
