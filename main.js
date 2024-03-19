alert ("Bienvenido al supermercado ¡PocosPorductos!")
console.log ("Bienvenido al supermercado ¡PocosPorductos!")

const productos = [
    { id: 1, producto: "Arroz", precio: 120},
    { id: 2, producto: "Carne", precio: 100},
    { id: 3, producto: "Atun", precio: 150},
    { id: 4, producto: "Pera", precio: 120},
    { id: 5, producto: "Tomate",precio: 145},
    { id: 6, producto: "Vino", precio:155},
    { id: 7, producto: "CocaCola", precio:160},
    { id: 8, producto: "Manteca", precio: 170},
    { id: 9, producto: "Queso", precio: 200},
    { id: 10, producto: "Garbanzos", precio: 180},
    { id: 11, producto: "Aceite", precio: 130 },
    { id: 12, producto: "Leche", precio: 110 },
    { id: 13, producto: "Manzana", precio: 90 },
    { id: 14, producto: "Pan", precio: 70 },
    { id: 15, producto: "Pollo", precio: 135 },
    { id: 16, producto: "Pasta", precio: 125 },
    { id: 17, producto: "Huevos", precio: 85 },
    { id: 18, producto: "Pescado", precio: 190 },
    { id: 19, producto: "Avena", precio: 115 },
    { id: 20, producto: "Yogur", precio: 95 },
]
for (const producto of productos){
    console.log (producto.id, producto.producto,)
}

function sumarIva (precio){
    return precio * 1.21;
}


function preguntaAlCliente (){
    let preguntaAlCliente = prompt ("Que desea usted hacer: BUSCAR o FILTRAR")
    while (true){
        if (preguntaAlCliente !== "BUSCAR" && preguntaAlCliente !== "FILTRAR" && preguntaAlCliente !== "buscar" && preguntaAlCliente !== "filtrar" ){
            console.log ("Ingrese una opcion valida porfavor");
        preguntaAlCliente = prompt ("Que desea usted hacer: BUSCAR o FILTRAR")
        }
        else{
            break;
        }
    }

    // Filtrar Productos

    if (preguntaAlCliente === "FILTRAR" || preguntaAlCliente === "filtrar"){    
        const filtrarPrecio = Number (prompt ("Ingrese un monto especifico para filtrar | EJ: $100 , $200 "));
        const barato = productos.filter (productos => productos.precio <= filtrarPrecio )
        .sort ((a, b) => a.precio - b.precio);

        console.log ("¡Precios filtrardos de menor a mayor!");

        barato.forEach ( producto  => {
            console.log ( `Producto: ${producto.producto} | Precio: $${producto.precio}`)
        })
    }

    // Buscar productos (con precio e Iva)

    else if ( preguntaAlCliente === "BUSCAR" || preguntaAlCliente === "buscar"){
        let buscarProducto;
        const resultado = [];
        while (true){
            buscarProducto = Number (prompt ("Ingrese ID del producto que desea buscar" ))
                if (buscarProducto === 0){
                    console.log ("Ingreso un ID No valido")
                }
                else if (buscarProducto >   20 ){
                    console.log ("Ingreso un ID No valido")    
                }
                else{
                    break;
                }
            }
            const buscar = productos.find(producto => producto.id === buscarProducto);
                if (buscar){
                    resultado.push (buscar);
                }
                
            console.log("Resultado:");
            resultado.forEach(producto => {
                console.log(`Producto: ${producto.producto} | Precio: $${producto.precio} | Precio con IVA: $${sumarIva(producto.precio)}`);
            });
    }
   
}
preguntaAlCliente();