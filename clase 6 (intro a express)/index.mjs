import express from 'express'

const app = express()
const puerto = 3100

// Middleware (por si después usás JSON)
app.use(express.json())

// GET /
app.get('/', (req, res) => {
    res.status(200)
    res.set('content-type', 'text/html')
    res.send('<h1>Hola expressJS en /usuarios</h1>')
})

// GET /usuarios
app.get('/usuarios', (req, res) => {
    res.send('<h1>Hola expressJS en /usuarios</h1>')
})

// POST /
app.post('/', (req, res) => {
    res.send('POST recibido en /')
})

// Servidor
app.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`)
})