const productos = [
    {
        id: 1,
        nombre: "Refrigerador Samsung",
        imagen: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=300",
        precio: 899.99,
        stock: 15,
        descripcion: "Refrigerador de dos puertas con tecnología Twin Cooling Plus, capacidad de 28 pies cúbicos, dispensador de agua y hielo, y eficiencia energética ENERGY STAR."
    },
    {
        id: 2,
        nombre: "Lavadora LG",
        imagen: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=300",
        precio: 649.99,
        stock: 8,
        descripcion: "Lavadora de carga frontal con capacidad de 17kg, tecnología TurboWash 360°, motor Direct Drive inverter y 14 programas de lavado especializados."
    },
    {
        id: 3,
        nombre: "Microondas Panasonic",
        imagen: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=300",
        precio: 179.99,
        stock: 23,
        descripcion: "Microondas de 1.2 pies cúbicos con tecnología Inverter, 1200W de potencia, sensor automático de cocción y 13 programas preestablecidos."
    },
    {
        id: 4,
        nombre: "Televisor Smart TV 55\"",
        imagen: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300",
        precio: 749.99,
        stock: 12,
        descripcion: "Smart TV LED 4K UHD de 55 pulgadas con HDR10+, sistema operativo Android TV, Wi-Fi integrado y compatibilidad con Alexa y Google Assistant."
    },
    {
        id: 5,
        nombre: "Aire Acondicionado Split",
        imagen: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300",
        precio: 559.99,
        stock: 6,
        descripcion: "Aire acondicionado split de 12,000 BTU/h con tecnología inverter, filtro HEPA, control remoto inteligente y eficiencia energética clase A++."
    },
    {
        id: 6,
        nombre: "Lavavajillas Bosch",
        imagen: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300",
        precio: 799.99,
        stock: 9,
        descripcion: "Lavavajillas empotrable con capacidad para 14 servicios, 6 programas de lavado, tecnología PureDry y nivel de ruido de solo 44 dB."
    },
    {
        id: 7,
        nombre: "Aspiradora Robot",
        imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300",
        precio: 299.99,
        stock: 18,
        descripcion: "Robot aspirador con navegación láser LiDAR, mapeo inteligente, succión de 2000Pa, control por app móvil y autonomía de 150 minutos."
    },
    {
        id: 8,
        nombre: "Cafetera Espresso",
        imagen: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300",
        precio: 249.99,
        stock: 14,
        descripcion: "Cafetera espresso semiautomática con bomba de 15 bares, vaporizador de acero inoxidable, portafiltro profesional y depósito de agua de 1.5L."
    },
    {
        id: 10,
        nombre: "Secadora de Ropa",
        imagen: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=300",
        precio: 549.99,
        stock: 7,
        descripcion: "Secadora a gas con capacidad de 7.4 pies cúbicos, sensor de humedad automático, 10 ciclos de secado y tambor de acero inoxidable."
    },
    {
        id: 11,
        nombre: "Batidora KitchenAid",
        imagen: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300",
        precio: 349.99,
        stock: 11,
        descripcion: "Batidora de pie con motor de 325W, tazón de acero inoxidable de 4.8L, 10 velocidades y sistema de mezcla planetario con 3 accesorios incluidos."
    },
    {
        id: 12,
        nombre: "Tostadora 4 Rebanadas",
        imagen: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=300",
        precio: 79.99,
        stock: 26,
        descripcion: "Tostadora de 4 rebanadas con ranuras extraanchas, 7 niveles de tostado, funciones de descongelado y recalentamiento, y bandeja recogemigas extraíble."
    },
    {
        id: 13,
        nombre: "Licuadora de Alto Rendimiento",
        imagen: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300",
        precio: 199.99,
        stock: 19,
        descripcion: "Licuadora profesional de 1400W con jarra de vidrio de 2L, 6 cuchillas de acero inoxidable, 3 velocidades preestablecidas y función pulse."
    },
    {
        id: 14,
        nombre: "Horno Eléctrico",
        imagen: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=300",
        precio: 459.99,
        stock: 5,
        descripcion: "Horno eléctrico empotrable de 60cm con capacidad de 65L, convección forzada, 8 funciones de cocción, pantalla digital y limpieza pirolítica."
    },
    {
        id: 16,
        nombre: "Purificador de Aire",
        imagen: "https://images.unsplash.com/photo-1585338447937-7082f8fc763d?w=300",
        precio: 219.99,
        stock: 13,
        descripcion: "Purificador de aire con filtro HEPA H13, carbón activado, cobertura hasta 50m², indicador de calidad del aire y modo nocturno ultra silencioso."
    },
    {
        id: 19,
        nombre: "Procesador de Alimentos",
        imagen: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300",
        precio: 189.99,
        stock: 16,
        descripcion: "Procesador de alimentos multifunción con motor de 600W, tazón de 3L, 4 discos de corte intercambiables, función pulse y accesorios lavables en lavavajillas."
    },
    {
        id: 20,
        nombre: "Hervidor Eléctrico",
        imagen: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300",
        precio: 49.99,
        stock: 35,
        descripcion: "Hervidor eléctrico de acero inoxidable con capacidad de 1.7L, potencia de 2200W, apagado automático, protección contra funcionamiento en seco y base giratoria 360°."
    }
];

function cargarproductos() {
    for (let producto of productos) {
        let parrafo = document.createElement("div");
        parrafo.id="boxproducto"
        parrafo.innerHTML= `<h2 id="nombreProducto">${producto.nombre}</h2>
                            <img src="${producto.imagen}" alt="" id="imagenProducto">
                            <h3 id="precioProducto">$${producto.precio}</h3>
                            <button class="btnVer" id="${producto.id}" onclick="verdetalle('${producto.id}')">Ver</button>`
        document.getElementById("boxproductos").appendChild(parrafo)  
    }
}

cargarproductos()

function verdetalle(idProducto) {
    let detalleProducto = productos.find(producto => producto.id === parseInt(idProducto))
    let detalleJSON = JSON.stringify(detalleProducto)
    localStorage.setItem("detalle", detalleJSON )
    window.location.href ="detalle.html";
}
