import express from 'express'

const PUERTO = 3000

const app = express()

//Middleware
function middleware1(req, res, next){
    console.log ('middleware1')
    next()
}

//La ruta en use es un prefijo 
app.use (middleware1)

app.get('/', (req, res)=>{
    console.log('repuesta final')
    res.send('Hola')
})

app.get('/saludo', (req, res)=>{
    console.log('repuesta final')
    res.send('Hola')
})

app.listen(PUERTO, ()=>{
    console.log(`http://localhost:${PUERTO}`)
})
