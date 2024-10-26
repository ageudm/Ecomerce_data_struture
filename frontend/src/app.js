import Error404Screen from './screens/error404acreen.js';
import HomeScreen from './screens/homeScreen.js';
import ProductSceen from './screens/productScreen.js';
import { parseRequestUrl } from './utils.js';

//================LISTA DE ROTAS OU URL=============================
const routes = {
    "/": HomeScreen,
    "/product/:id": ProductSceen,
}


//===============ROTAS PARA RENDERIZAR DADOS DAS PAGINAS====================
const router = async () => {
    const request = parseRequestUrl();
    const parseUrl = 
    (request.resource ? `/${request.resource}` : '/') + 
    (request.id ? '/:id' : '') + 
    (request.action ? `/${request.action}` : '');

    //===============Passar a url das paginas de forma dinamica no router
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;

    //====renderizar os produtos no documento
    const main = document.getElementById('main-container');
    main.innerHTML = await screen.render();
}

//=======================CARREGAR AS PAGINAS NA DOM
document.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);