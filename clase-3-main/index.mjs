// console.log("Todo ok")

import fsp from 'node:fs/promises';
import path from 'node:path';

try {
    const ruta = path.join('./texto.txt');

    const contenido = await fsp.readFile(ruta, 'utf-8');
    console.log(contenido);
} 
catch (e) {
    console.log(e);
}