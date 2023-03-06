const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const carritoCompra = document.querySelector('.navbar-shopping-cart');
const productosCarrito = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', togglemenuMobile);
carritoCompra.addEventListener('click', toggleproductosCarrito);

function toggleDesktopMenu(){

    desktopMenu.classList.toggle('inactive');

};

function togglemenuMobile(){

    menuMobile.classList.toggle('inactive');

};

function toggleproductosCarrito(){

    productosCarrito.classList.toggle('inactive');

}