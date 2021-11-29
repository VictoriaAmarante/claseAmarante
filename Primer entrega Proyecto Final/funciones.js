const enStock = (quantity,stock) =>{
    if(quantity > stock){
        alert(`No tenemos suficiente stock, el stock disponible es ${stock}`);
        return false;
    }
    else return true;
}


const agregarAlCarrito = (option, quantity) => {
    const encontrado = piedra.find(product=>product.id === option) 
    if(enStock(quantity, encontrado.stock)){
        let valor = (quantity * encontrado.price)
        carrito += (quantity * encontrado.price);
        piedra[option-1].stock -= quantity;
        alert(`Se agrego ${quantity} unidades de ${encontrado.name} con un valor de ${valor}`);
    }
}


const mostrarMenu = () =>{
    let menu = "Escoge un Producto: \n";
    piedra.forEach((product)=>{
        menu += product.id + ".-" + product.name + "\n";
    });
    menu += (piedra.length + 1) + ".-Salir" ;
    return parseInt(prompt(menu));
    
};
