# Creador de tablas de multiplicar
Aplicación de node que permite crear archivos txt los cuales contienen tablas de multiplicar, con base en argumentos recibidos desde la ejecución de esta aplicación.

```
Opciones:
      --help     Muestra ayuda                                        [booleano]
      --version  Muestra número de versión                            [booleano]
  -b, --base     base o numero el cual se va a multiplicar del 1 al 10
                                                            [número] [requerido]
  -l, --listar   muestra la tabla de multiplicar creada
                                                     [booleano] [defecto: false]
  -h, --hasta    configura el limite superior para la tabla de multiplicar
                                                          [número] [defecto: 10]
```
### Dependencias
- yargs: dependencia que permite manejar los argumentos recibidos desde la ejecución de esta app directo de la terminal
- colors: dependencia que permite configurar el color de cadenas de caracteres

### nota: 
Ejecutar el comando ``` npm install ``` una vez se haya descargado o clonado el repositorio para que de esta forma se instalen las dependencias