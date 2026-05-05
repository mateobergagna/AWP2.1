import productos from "./productos.mjs"

// Obtener todos los productos
export function obtenerProductos(req, res) {
    res.json(productos)
}

// Obtener un producto por ID
export function obtenerProducto(req, res) {

    // Obtener ID desde la URL
    const id_producto = Number(req.params.id)

    // Filtrar productos
    const productosFiltrados = productos.filter((producto) => {
        return Number(producto.id) === id_producto
    })

    // Respuesta
    if (productosFiltrados.length > 0) {
        res.json(productosFiltrados)
    } else {
        res.status(404).json({
            mensaje: 'Producto no encontrado'
        })
    }
}