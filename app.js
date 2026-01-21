const express = require("express");

const app = express();


const PORT = 3000;


const productsData = [
     { id: 1, name: 'Portátil HP', price: 799, category: 'electrónica', stock: 15 },
     { id: 2, name: 'iPhone 14', price: 999, category: 'electrónica', stock: 25 },
     { id: 3, name: 'Camiseta Nike', price: 29, category: 'ropa', stock: 50 },
     { id: 4, name: 'Zapatillas Adidas', price: 89, category: 'ropa', stock: 30 },
     { id: 5, name: 'Mesa IKEA', price: 149, category: 'hogar', stock: 10 },
     { id: 6, name: 'Silla oficina', price: 199, category: 'hogar', stock: 20 },
     { id: 7, name: 'Auriculares Sony', price: 159, category: 'electrónica', stock: 40 },
     { id: 8, name: 'Teclado mecánico', price: 129, category: 'electrónica', stock: 18 },
     { id: 9, name: 'Pantalón Levi\'s', price: 79, category: 'ropa', stock: 35 },
     { id: 10, name: 'Chaqueta North Face', price: 199, category: 'ropa', stock: 22 },
     { id: 11, name: 'Lámpara LED', price: 45, category: 'hogar', stock: 60 },
     { id: 12, name: 'Alfombra', price: 69, category: 'hogar', stock: 15 },
     { id: 13, name: 'Tablet Samsung', price: 399, category: 'electrónica', stock: 12 },
     { id: 14, name: 'Smart TV LG 55"', price: 699, category: 'electrónica', stock: 8 },
     { id: 15, name: 'Sudadera Puma', price: 49, category: 'ropa', stock: 45 },
     { id: 16, name: 'Estantería', price: 89, category: 'hogar', stock: 14 },
     { id: 17, name: 'Ratón inalámbrico', price: 25, category: 'electrónica', stock: 70 },
     { id: 18, name: 'Gafas de sol Ray-Ban', price: 159, category: 'ropa', stock: 28 },
     { id: 19, name: 'Sofá 3 plazas', price: 599, category: 'hogar', stock: 5 },
     { id: 20, name: 'Cafetera Nespresso', price: 179, category: 'hogar', stock: 25 },
];


function getProductsByCategory(category) {

     return productsData.filter((p) => p.category === category);
};


function renderProductsPage(tittle, products) {

     const items = products

     .map(

     (p) => `<li>${p.name} - ${p.price}€ (stock: ${p.stock})</li>`

     )

     .join("");

        return `

            <h1>${tittle}</h1>

            <p>Total productos: ${products.length}</p>

            <p><a href="/">Volver a Home</a></p>

            <ul>

            ${items}
            
            </ul>

        `;
}


app.get("/", (req, res) => {

     res.send(`

     <h1>Bienvenido</h1>

     <p>Eligue una categoria</p>

     <ul>

        <li><a href="/electronica">Electronica</a></li>

        <li><a href="/ropa">Ropa</a></li>

        <li><a href="/hogar">Hogar</a></li>

        <li><a href="/productos/baratos">Productos baratos</a></li>

        <li><a href="/productos/caros">Productos caros</a></li>

    </ul>

    <p><a href="/productos">Ver todos los productos</a></li>

    `);
});


app.get("/electronica", (req, res) => {

    const productos = getProductsByCategory("electrónica");

    res.send(renderProductsPage("productos de electronica", productos));
});


app.get("/ropa", (req, res) => {

    const productos = getProductsByCategory("ropa");

    res.send(renderProductsPage("Productos de Ropa", productos));
});


app.get("/hogar", (req, res) => {

    const productos = getProductsByCategory("hogar");

    res.send(renderProductsPage("Productos del hogar", productos));
});


app.get("/productos", (req, res) => {

    res.send(renderProductsPage("Todos los productos", productsData))
})


app.get("/productos/baratos", (req, res) => {

    const baratos = productsData.filter(p => p.price < 100);

    res.send(renderProductsPage("Productos baratos", baratos));
});


app.get("/productos/caros", (req, res) => {

    const caros = productsData.filter(p => p.price >= 100);

    res.send(renderProductsPage("Productos caros", caros));
});


app.listen(PORT, () => {

    console.log(`Servidor en http://localhost:${PORT}`);
});