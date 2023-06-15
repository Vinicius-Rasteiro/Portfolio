const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.itens');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-ativo')
});

nav.addEventListener('click', () => {
    menu.classList.remove('menu-ativo')
});