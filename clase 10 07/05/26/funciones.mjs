import productos from "./productos.mjs";

export function obtenerProductos(req, res) {
    // Si productos es un objeto con .datos, devolvemos .datos
    res.json(productos.datos);
}

export function obtenerProducto(req, res) {
    const id = Number(req.params.id);
    
    // Buscamos dentro de productos.datos
    const productoEncontrado = productos.datos.find((p) => Number(p.id) === id);

    if (productoEncontrado) {
        res.json(productoEncontrado);
    } else {
        res.status(404).json({ mensaje: 'El producto no existe' });
    }
}

export function modificarProducto(req, res) {
    const id = Number(req.params.id);
    const nuevosDatos = req.body;
    let modificado = false;

    productos.datos = productos.datos.map((p) => {
        if (Number(p.id) === id) {
            modificado = true;
            return { ...p, ...nuevosDatos, id }; 
        }
        return p;
    });

    if (modificado) {
        res.json({ mensaje: 'Se modificó el producto ' + id });
    } else {
        res.status(404).json({ mensaje: 'No se encontró el producto para modificar' });
    }
}

export function eliminarProducto(req, res) {
    const id = Number(req.params.id);

    const longitudOriginal = productos.datos.length;
    productos.datos = productos.datos.filter((p) => Number(p.id) !== id);

    if (productos.datos.length < longitudOriginal) {
        res.json({
            mensaje: 'producto eliminado',
            url: `http://localhost:3000/api/v1/productos/${id}`,
            status: 200,
            verbo: 'DELETE'
        });
    } else {
        res.status(404).json({ mensaje: 'El producto no existe' });
    }
}

export function altaProducto(req, res) {
    const cuerpo = req.body; 

    // IMPORTANTE: Asegúrate de que el body no venga vacío
    const nuevoId = productos.ultimo_id + 1;
    
    const productoFinal = {
        id: nuevoId,
        ...cuerpo // Quitamos el .datos de aquí si el body ya es el producto
    };

    productos.datos.push(productoFinal);
    productos.ultimo_id = nuevoId;

    res.status(201).json({ mensaje: 'Se dio de alta el producto', id: nuevoId });
}