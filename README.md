# Tienda con Express

## Descripción
En este ejercicio vas a crear un servidor web para una tienda online usando Express. Aprenderás a crear diferentes rutas y a manipular datos.

## 🎯 Objetivos
- Practicar la creación de rutas en Express
- Aprender a filtrar y manipular arrays de datos
- Generar páginas HTML dinámicas
- Trabajar con parámetros de ruta

## 🚀 Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Crea tu servidor en express en: `http://localhost:3000`

3. Inicia el servidor:
```bash
npm start
```

## ✅ Tareas a completar

### TODO 1: Página principal
Crea una ruta para `'/'` que muestre:
- Un mensaje de bienvenida a la tienda
- Enlaces a las diferentes categorías: Electrónica, Ropa, Hogar
- Un enlace a ver todos los productos

---

### TODO 2: Categoría Electrónica
Crea una ruta `'/electronica'` que muestre:
- Título "Productos de Electrónica"
- Número total de productos en esta categoría
- Lista de productos con: nombre, precio y stock

**Pista:** Crea una función que filtre por el tipo de producto. Esto te valdrá para electrónica y el resto de categorías, por ejemplo: `getProductsByCategory('electrónica')`

---

### TODO 3: Categoría Ropa
Crea una ruta `'/ropa'` similar a la anterior pero para productos de ropa.

---

### TODO 4: Categoría Hogar
Crea una ruta `'/hogar'` similar a las anteriores pero para productos del hogar.

---

### TODO 5: Todos los productos
Crea una ruta `'/productos'` que muestre TODOS los productos de la tienda.

---

### TODO 6: Productos baratos
Crea una ruta `'/productos/baratos'` que muestre solo productos con precio menor a 100€.

**Pista:** Usa el método `.filter()` sobre `productsData`

---

### TODO 7: Productos caros
Crea una ruta `'/productos/caros'` que muestre solo productos con precio mayor o igual a 100€.

---

### Aquí los datos con los que trabajar:
Puedes añadir más si lo vieras necesario

``` js
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
```
