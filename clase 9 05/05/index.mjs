import express from "express"
import { obtenerProductos, obtenerProducto } from './funciones.mjs'

// Puerto
const PUERTO = 3000

// App
const app = express()

// GET /api/v1/productos → todos los productos
app.get('/api/v1/productos', obtenerProductos)

// GET /api/v1/productos/:id → producto por ID
app.get('/api/v1/productos/:id', obtenerProducto)

// Servidor
app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en http://localhost:${PUERTO}`)
})

// POST /api/v1/productos -> dar de alta un nuevo producto 

// PUT /api/v1/productos/:id -> modificar un producto 

// DELETE /api/v1/productos/:id

// Servidor
app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en http://localhost:${PUERTO}`)
})
