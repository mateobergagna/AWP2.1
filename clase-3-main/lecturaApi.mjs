// console.log("Todo ok")

import fsp from 'node:fs/promises';
import path from 'node:path';

try {
    //Leemos la api via fetch y me devuelve un objeto con la respuesta
    const respuesta = await fetch('https://69d51288d396bd74235e4f26.mockapi.io/Productos')

    //Extrae el cuerpo en formato JSON y convertilo a un arreglo/objeto
    const productos = await respuesta.json();
    const ruta = path.join('./datosApi.json');

    // Convertimos el un objeto js - Arreglo u objeto a un JSON
    const datosAguardar = JSON.stringify(productos, null, 4);

    await fsp.writeFile(ruta,datosAguardar);
    
} 
catch (e) {
    console.log(e);
}

