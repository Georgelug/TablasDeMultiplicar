const fs = require('fs'); // importacion del modulo fs (file system) el cual nos permite manipular el file sistem y hacer operaciones CRUD de archivos
require('colors');

const crearArchivo = async (base = 1,listar,limiteSuperior = 10) => {
    try {
        
        let salida = '';
        for(let i = 1 ; i <= limiteSuperior ; i++){
            salida += `${ base } * ${ i } = ${ i * base }\n`
        }
        if(listar){
            console.log('============='.red)
            console.log(`Tabala del: ${base}`.bold)
            console.log('============='.red)
            console.log(salida.cyan.italic)
        }
        //writeFile se escribe un archivo, recibiendo un path (en este caso es en la raiz del archivo), el string o a arreglo que se va a escribir y un call back para recibir errores
        //writeFileSync se escribe un archivo, recibiendo un path (en este caso es en la raiz del archivo) y el string o a arreglo que se va a escribir
        fs.writeFileSync(`./output/tabla-${base}.txt`, salida)
        console.log()
        return `tabla-${base}.txt`
    } catch (error) {
        throw error
    }
}

module.exports = { crearArchivo }