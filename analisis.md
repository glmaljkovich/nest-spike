## Sintaxis

Es Node con typescript.

**Pros**: los errores de runtime rara vez pasan lo que nos permite concentrarnos en
problemas de logica del dominio.\
**Cons**: Tiene mucha carga de generar tipos e interfaces para un proyecto chico.

## Documentacion

**Pros:** Tiene recetas sobre como hacer varias cosas (conexion con dbs, auth, swagger, etc) \
**Cons:** es medio escueta en la parte de testing. Te las tenes que rebuscar en SO. No tiene un link a la API directamente, por lo cual puede faltar info.

## BBDD

**Pros:** Por default viene integrado con TypeORM que provee una unica interfaz
para comunicarse con un monton de motores de base de datos SQL y NoSQL.
Tambien tiene soporte para Sequelize y Mongoose.

## Estructura

Usa la idea de modulos para encapsular controladores, servicios y repositorios,
exponiendo solo lo necesario de cada uno al resto de modulos via un sistema de
inyeccion de dependencias.

**Pros:** Nos ahorra instanciar esas dependencias explicitamente.
Tiene una CLI que se encarga de buena parte del boilerplate \
**Cons:** Andas revoleando imports por todos lados solo para tipar cosas que ni siquiera se instancian en donde los importas. Podria tener un manejador de dependencias que se importe una vez por archivo y simplemente le pases strings.
Hacer cambios es bastante lento, siempre terminas tocando muchos archivos por el sistema de inyeccion de dependencias.


## tests

**Pros**: Usa jest con supertest, que nos permite hacer tanto test de unidad como de integracion. \
**Cons**: De vuelta, el sistema de tipos e inyeccionde de dependencias agrega friccion a los tests
que constantemente tienen que ser refactorizados para agregar mocks.
