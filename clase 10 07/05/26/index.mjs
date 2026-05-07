import express from 'express'
import { obtenerProductos, obtenerProducto, eliminarProducto, altaProducto, modificarProducto } from './funciones.mjs'

const PUERTO = 3000

const app = express()

app.use(express.json()) //avisa a express que parsee los datos del json en formato http

//DEFINIENDO UNA API-REST

// GET /api/v1/productos ---> Todos
app.get('/api/v1/productos', obtenerProductos)

// GET /api/v1/productos/:id ---> Uno por id 
app.get('/api/v1/productos/:id', obtenerProducto)

// POST /api/v1/productos ---> Dar de alta un nuevo producto
app.post('/api/v1/productos', altaProducto)

// PUT /api/v1/productos/:id ---> Modificar un producto existente 
app.put('/api/v1/productos/:id', modificarProducto)
// DELETE /api/v1/productos/:id ---> Eliminar un producto

app.delete('/api/v1/productos/:id', eliminarProducto)

app.listen(PUERTO)