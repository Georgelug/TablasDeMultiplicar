# Creador de tablas de multiplicar
aplicacion de node que permite crear archivos de txt los cuales contienen tablas de multiplicar, con base en argumentos recibidos desde la ejecucion de esta aplicacion.

### Argumentos
- -b | --base : argumento obligatorio el cual es el valor por el cual se va a multiplicar de 0 hasta n valores (ver argumento -h)

- -l | --listar : argumento opcional que tiene por default falso, el cual permite listar o mostrar en consola la tabla de multiplicar

- -h | --hasta : argumento opcional que tiene por default 10, el cual permite configurar el limite superior de la tabla de multiplicar

### Dependencias
- yargs: dependencia que permite manejar los argumentos recibidos desde la ejecucion de esta app directo de la terminal
- colors: dependencia que permite configurar el color de cadenas de caracteres