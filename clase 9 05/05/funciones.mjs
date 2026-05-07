import productos from "./productos.mjs";

export function obtenerProductos(req, res) {
    res.json(productos)
}

export function obtenerProducto(req, res) {
    //Logica previa
    const id = Number(req.params.id)
    //Filter    
    const productosFiltrados = productos.filter((producto) => {
        return Number(producto.id) === id
    })
    if (productosFiltrados.length > 0) {
        res.json(productosFiltrados)
    }
    else {
        res.status(404).json({
            mensaje: 'El producto no existe'
        })
    }
}

export function eliminarProducto(req, res) {
    //Logica previa
    const id = Number(req.params.id)

    //Filter    
    const productosFiltrados = productos.filter((producto) => {
        return Number(producto.id) !== id
    })

    //Pisamos el original (sin reasignar)
    productos.length = 0
    productos.push(...productosFiltrados)

    //Verificamos si hay elementos en el arreglo
    const respuesta = {
        mensaje: 'producto eliminado',
        url: 'http://localhost:3000/api/v1/productos/' + id,
        status: 200,
        verbo: 'DELETE'
    }

    res.json(respuesta)
}
