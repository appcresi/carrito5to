let productoCarrito = localStorage.getItem("carrito")
let detalleCarritos = JSON.parse(productoCarrito)
let cantidadProctuctos = 0 ;

function cargarproductos() {
        for (let detalleCarrito of detalleCarritos) {
                let parrafo = document.createElement("tr");
                parrafo.id= detalleCarrito.id
                parrafo.innerHTML= `
                                <td><img src="${detalleCarrito.imagen}" alt="" id="imagenProducto"></td>
                                <td id="cantidadProducto">${detalleCarrito.cantidad}</td>
                                <td id="nombreProducto">${detalleCarrito.nombre}</td>
                                <td id="precioProducto">$${detalleCarrito.precio}</td>
                                <td>${detalleCarrito.cantidad*detalleCarrito.precio}</th>
                                <td><button id="btnEliminarCarrito" onclick="eliminarcarrito('${detalleCarrito.id}')">x</button></td>`
                document.getElementById("tablacarrito").appendChild(parrafo)  
                cantidadProctuctos = cantidadProctuctos + detalleCarrito.cantidad;
        }
        document.getElementById("cantidadCarrito").innerHTML = cantidadProctuctos;
        console.log(cantidadProctuctos)
}

cargarproductos()

function eliminarcarrito(id) {
        let cantidad = 0;
        let nodo = document.getElementById(id)
        nodo.remove()
        id = parseInt(id)
        let productoActualizados = detalleCarritos.filter(producto => producto.id !== id)
        localStorage.setItem("carrito", JSON.stringify(productoActualizados) )
        for (let productoActualizado of productoActualizados) {
                cantidad = cantidad + productoActualizado.cantidad;
        }
        document.getElementById("cantidadCarrito").innerHTML = cantidad;
}
