const argv = require('yargs') // configuracion de yargas para obtener argumentos de la terminal
                            .option('b',{
                                alias: 'base',
                                type: 'number',
                                demandOption: true,
                                describe:'base o numero el cual se va a multiplicar del 1 al 10'
                            })
                            .option('l',{
                                alias: 'listar',
                                type: 'boolean',
                                default: false,
                                describe:'muestra la tabla de multiplicar creada'
                            })
                            .option('h',{
                                alias: 'hasta',
                                type: 'number',
                                default: 10,
                                describe:'configura el limite superior para la tabla de multiplicar'
                            })
                            .check( (argv,options) =>{
                                if ( isNaN(argv.b) ) throw 'La base tiene que ser un numero'
                                return true
                            } )
                            .argv;
module.exports = argv;