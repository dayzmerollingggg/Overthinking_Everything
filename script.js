window.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const menu = document.querySelector('.navbarheader');
    let buttonClick = false;
    hamburgerButton.addEventListener('click', () => {
        if(!buttonClick){
            menu.style.setProperty("display","inline","important");
            buttonClick = true;
        }
        else{
            menu.style.setProperty("display","none","important");
            buttonClick = false;
        }
        
    });
});