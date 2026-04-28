//Modulo http
import http from 'node:http'
import fsp from 'node:fs/promises'
import path from'node:path'


//Creamos una instancia de servidor
const app = http.createServer(async (peticion, respuesta) => {

    if (peticion.method === 'GET') {

        if (peticion.url === '/usuarios') {
            respuesta.statusCode = 200
            return respuesta.end('ruta usuarios /usuarios')
        }

        if (peticion.url === '/raiz') {
            respuesta.statusCode = 200
            return respuesta.end('ruta raiz /')
        }
    }

    if (peticion.method === 'POST') {
        if (peticion.url === '/') {

            const ruta = './contenido.txt'
            await fsp.writeFile(ruta,'Contenido falso')

            respuesta.statusCode = 200
            return respuesta.end('POST recibido en /')
        }
    }

    if (peticion.method === 'DELETE') {
        if (peticion.url === '/') {
            respuesta.statusCode = 200
            return respuesta.end('DELETE recibido en /')
        }
    }

    // Si ninguna ruta coincide
    respuesta.statusCode = 404
    return respuesta.end('No se encontro la ruta')

})

// Abrimos puerto
app.listen(3000, () => {
    console.log(`Servidor escuchando en http://localhost:3000`)
})