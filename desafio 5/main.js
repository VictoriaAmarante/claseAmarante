class Pierdras {
    constructor(articulo, color, precio, cantidad) {
        this.articulo = articulo.toLowerCase();
        this.color = color.toLowerCase();
        this.precio = precio;
        this.cantidad = cantidad;
    }
    toString() {
        `Piedras articulo: ${this.articulo}\nColor de Piedras: ${this.color}\nPrecio: ${this.precio}\nCantidad de piedras ${this.cantidad}`
    }
    precioTotal() {
        let sumaTotal = precio * cantidad
        alert(`El precio final es de ${sumaTotal}`)
    }
}

const articulo = prompt('Ingrese el nombre del articulo que desea comprar')
const color = prompt('Ingrese el tipo de Piedras')
const precio = parseInt(prompt('Ingrese el precio de piedras en la pagina'))
const cantidad = parseInt(prompt('Ingrese la cantidad de iedras que desea llevar'))

const amatista1 = new Piedras (articulo, color, precio, cantidad)

console.log(zPiedras1)
amatista1.precioTotal()
