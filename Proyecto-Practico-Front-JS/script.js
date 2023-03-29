const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const carritoCompra = document.querySelector('.navbar-shopping-cart');
const productosCarrito = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', togglemenuMobile);
carritoCompra.addEventListener('click', toggleproductosCarrito);

function toggleDesktopMenu(){
    const isproductosCarrito = productosCarrito.classList.contains('inactive');

    if(!isproductosCarrito){
        productosCarrito.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');

};

function togglemenuMobile(){
    const isproductosCarrito = productosCarrito.classList.contains('inactive');

    if(!isproductosCarrito){
        productosCarrito.classList.add('inactive');
    }

    menuMobile.classList.toggle('inactive');

};

function toggleproductosCarrito(){
    const isMenuMobile = menuMobile.classList.contains('inactive');
    const isDesktonMenu = desktopMenu.classList.contains('inactive');

    if(!isMenuMobile){
        menuMobile.classList.add('inactive');
    }else if(!isDesktonMenu){
        desktopMenu.classList.add('inactive');
    }

    productosCarrito.classList.toggle('inactive');

}


const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Pantalla',
    price: 420,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'computador',
    price: 820,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(array){

    for (product of array){
    
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
     
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image)
     
        
        // product = {name, price, image} -> product.image
     
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
     
        const productInfoDiv = document.createElement('div');
     
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
     
        /*con appendChild agregamos una etiqueta hijo a una etiqueta padre, en este caso la etiqueta p que corresponde a la constante productPrice la estamos metiendo dentro de la etiqueta div que tiene como consta productInfoDiv*/
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
     
        const productInfoFigure = document.createElement('Figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', '../curso-frontend-developer-practico/icons/bt_add_to_cart.svg');
     
        productInfoFigure.appendChild(productImgCart);
     
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
     
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
     
        cardsContainer.appendChild(productCard);
     };

}


renderProducts(productList);
