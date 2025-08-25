let productoDetalle = localStorage.getItem("detalle")
let detalleP = JSON.parse(productoDetalle)
let contador = 0;

function cargarproductos() {
        let parrafo = document.createElement("div");
        parrafo.id="boxproducto"
        parrafo.innerHTML= `<h2 id="nombreProducto">${detalleP.nombre}</h2>
                            <img src="${detalleP.imagen}" alt="" id="imagenProducto">
                            <p id="descripcionProducto">${detalleP.descripcion}</p>
                            <h3 id="precioProducto">$${detalleP.precio}</h3>
                            <p id="stockProducto">${detalleP.stock}</p>
                            <div id="boxContador">
                                <button id="btnSumaProducto" onclick="sumarcontador()">+</button>
                                <p id="contadorProducto">0</p>
                                <button id="btnRestarProducto" onclick="restarcontador()">-</button>
                            </div>
                            <button id="btnAgregarCarrito" onclick="agregarcarrito()">Agregar al Carrito</button>`
        document.getElementById("boxproductos").appendChild(parrafo)  
    
}

cargarproductos()

function sumarcontador() {
    if (contador < detalleP.stock) {
        contador = contador + 1;
        document.getElementById("contadorProducto").innerHTML = contador;
    }else{
        alert("Stock máximo. Pida una menor cantidad.")
    }
}

function restarcontador() {
    if (contador >0) {
        contador = contador - 1;
        document.getElementById("contadorProducto").innerHTML = contador;
    }
    
}

function agregarcarrito() {
    if (contador > 0) {
        let carrito = JSON.parse(localStorage.getItem("carrito"))
        if (carrito === null) {
            carrito = []
        }
        productonuevo={
            nombre: detalleP.nombre,
            id: detalleP.id,
            imagen: detalleP.imagen,
            descripcion: detalleP.descripcion,
            precio: detalleP.precio,
            cantidad: contador
        }
        carrito.push(productonuevo)
        localStorage.setItem("carrito", JSON.stringify(carrito) )
        window.location.href ="carrito.html";
    }else{
        alert("Elija la cantidad de productos que quiere comprar.")
    }
}