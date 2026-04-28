import http, { createServer } from 'node:http';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { datitos } from './obtenerDatos.mjs';
import { json } from 'node:stream/consumers';


try {

    const ruta = path.join('./archivo.json')
    const datos = await datitos()
    console.log(datos)

    const parseo = JSON.stringify(datos)
    await fsp.writeFile(ruta, parseo)

    const lectura = await fsp.readFile(ruta, 'UTF-8', 2)

    const server = createServer(async (req, res) => {

        if (req.method === 'GET') {
            if (req.url === '/usuarios') {
                res.end(lectura)
            }
            else {
                res.statusCode = 404
                res.end('Recurso no encontrado')
            }
        }
    });

    server.listen(3000, () => {
        console.log()

    })

}  catch (e) {
    console.log(e)
}
