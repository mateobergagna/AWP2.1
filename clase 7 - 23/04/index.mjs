import express from 'express'

// Defino el puerto donde va a correr el servidor
const puerto = 3000

// Creo la aplicación (servidor)
const app = express()

// Middleware para poder leer JSON que manda el cliente (req.body)
app.use(express.json())

// Array global de productos (simula base de datos)
const productos = [
    { id: 1, nombre: 'camiseta', precio: 2005 },
    { id: 2, nombre: 'pantalon', precio: 1000 }
]



// ---------------- RUTAS ----------------

// Ruta raíz
app.get('/', (req, res) => {
    // Respuesta simple de texto
    res.send('Hola expressJS en /')
})


// Ruta usuarios (devuelve HTML)
app.get('/usuarios', (req, res) => {
    res.send('<h1>Hola usuarios</h1>')
})


// Ruta que devuelve JSON
app.get('/json', (req, res) => {

    const miObjeto = {
        materia: 'AW2'
    }

    // Express convierte automáticamente el objeto a JSON
    res.json(miObjeto)
})


// Ruta "objetoJS" (aunque en realidad devuelve HTML)
app.get('/objetoJS', (req, res) => {

    const miObjeto = {
        materia: 'AW2'
    }

    // Este objeto no se usa (no rompe, pero no tiene efecto)
    res.send('<h1>Hola Objeto JS</h1>')
})


// Ruta que devuelve TODOS los productos
app.get('/productos', (req, res) => {

    // ❌ ERROR: antes no devolvías nada
    // ✅ Ahora devolvemos el array
    res.json(productos)
})


// Ruta que devuelve UN producto por ID
app.get('/productos/:id', (req, res) => {

    // Obtengo el id de la URL y lo convierto a número
    const id = parseInt(req.params.id)
    console.log(id)

    // Filtro los productos que coinciden con el id
    const productosFiltrados = productos.filter(p => p.id === id)

    // Si encuentra alguno → lo devuelve
    if (productosFiltrados.length > 0) {
        return res.json(productosFiltrados) // ⚠️ return evita doble respuesta
    } 
    else {
        return res.status(404).json({ error: 'Producto no encontrado' })
    }

    // ❌ ELIMINADO: esto causaba el error de doble respuesta
    // res.json(productos)
})



// Ruta POST (para agregar producto)
app.post('/post', (req, res) => {

    // Datos que manda el cliente
    const datosCliente = req.body

    // ❌ No validás id (no rompe, pero ojo)
    // Agregás el producto al array
    productos.push(datosCliente)

    // Respuesta de éxito
    res.status(201).json({ mensaje: "Producto dado de alta" })
})



// Levantar el servidor
app.listen(puerto, () => {
    console.log(`Servidor corriendo http://localhost:${puerto}`)
})