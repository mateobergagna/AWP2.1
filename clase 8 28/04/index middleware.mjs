import express from 'express'

const PUERTO = 3000

const app = express()

//Middleware
function middleware1(req, res, next){
    console.log('se ejecutó el middleware 1')
    const usuarioExiste = false

    if(usuarioExiste){
        next() // avanzar siguiente ------>
    }else{
         console.log('usuario NO existe NO puede pasar')
        res.send('usuario no registrado')
    }
}

//-------------------------->
app.get('/', middleware1 /*, middleware2, middleware3*/, (req, res)=>{
    console.log('repuesta final')
    res.send('Hola')
})

app.get('/', (req, res)=>{
    res.send('Hola')
})

app.listen(PUERTO, ()=>{
    console.log(`http://localhost:${PUERTO}`)
})
