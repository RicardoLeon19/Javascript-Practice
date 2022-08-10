const carrito = [];

// Definir un producto

const producto = {
    nombre: 'Monitor 32 pulgadas',
    precio: 400
}
const producto2 ={
    nombre: 'Celular',
    precio: 800
}

//.op
carrito.push(producto2);
carrito.push(producto);


const producto3 = {
    nombre: 'Teclado',
    precio: 50
}
carrito.unshift(producto3);

console.log(carrito);

//Eliminar uiltimo elemento del carrito

carrito.pop();

console.log(carrito);


//Eliminar del inicio del carrito

carrito.shift();

carrito.splice(1,1);

console.table(carrito);