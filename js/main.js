// selecionar o botão menu
// selecionar a navegação
// fazer função d click para abrir efechar menu
    // verificar se a navegação possuir a classe is-visible no click, retirá-la, caso contrário vai acrescentar

    const button = document.querySelector(".btn-mobile")
const menuMobile = document.querySelector(".nav-primary");


button.addEventListener( 'click', function(e){
    e.preventDefault();
 
    if(menuMobile.classList.contains("nav-primary")){
        menuMobile.classList.remove("nav-primary");
        menuMobile.classList.add("nav-primary.is-visible")
    }else{
        menuMobile.classList.remove("nav-primary.is-visible");
        menuMobile.classList.add("nav-primary")
    }

})