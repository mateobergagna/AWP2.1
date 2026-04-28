import fsp from 'node:fs/promises';
import path from 'node:path';

try {
    const ruta = path.join('./texto.txt');
    await fsp.writeFile('./texto.txt', 'Hola, soy un texto nuevo')  
} 
catch (e) {
    console.log(e);
}