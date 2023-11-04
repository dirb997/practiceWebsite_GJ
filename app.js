const menu = document.querySelector('#mobileMenu');
const menuLink = document.querySelector('.navBar_menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLink.classList.toggle('active');
})