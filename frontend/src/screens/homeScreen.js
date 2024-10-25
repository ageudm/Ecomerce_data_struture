import data from '../../../backend/data.js';


//=================OBKECTO ECREEN PARA QUE GUARDA O METODO RENDER===============
const HomeScreen = {
    render: () => {
        const {products} = data; //importar a lista de produtos no arquivo data
        return `
        <ul class="products">
            ${products.map(product => `
            <li>
                <div class="product">
                    <a href="/#/product/${product._id}">
                        <img src="${product.image}" alt="${product.name}">
                    </a>
                    <div class="product-name">
                        <a href="/#/product/1">${product.name}</a>
                    </div>
                    <div class="product-brand">
                        ${product.brand}
                    </div>
                    <div class="product-price">
                        ${product.price}
                    </div>
                </div>
            </li>
            `
        ).join('')};
        </ul>`
    },
};

export default HomeScreen;