
const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')
require('colors');

console.clear() // se limpia consola

// console.log(process.argv) // immprime los procesos al mommento de ejecutar el script
// se obtiene cierta info.en forma de objeto literal no tan relevante y similar al anterior comando, pero al mandarle parametros desde la ejecucion del script lo obtiene y lo transforma aun llave y valor en caso de que se un string y un valor
console.log(argv) // 

crearArchivo(argv.b,argv.l,argv.h)
    .then(nombreArchivo => console.log('el archivo',`${nombreArchivo}`.yellow, 'ha sido creado exitosamente'.green))
    .catch(err => console.log(`${err}`.red))


// console.log(process.argv) // se obtienen los argumentos que se reciben desde la ejecucion de este programa

// const[,,arg3 = '--base=5'] = process.argv // se obtiene el 3er argumento de la lista de argumentos que se obtiene al ejecutarse este programa
// const[ , base] = arg3.split('=') 
