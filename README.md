#Proyecto  6, Mi primer Back-End

- Modelos para peliculas y plataformas
- CRUD completo para los modelos

## Utilidades

- Crear, Postear, Actualizat y eliminar peliculas .
- Crear, Postear, Actualizat y eliminar plataformas. 
- Postear las diferetes peliculas en las plataformas.

## Tecnologias

- [Visual Studio Code] - El mejor editor de código.
- [Node.js] - Para el entorno de construcción de Javascript.
- [Dotenv] - Para la carga de variables .env.
- [Express] - Nuestro framework de trabajo de backend.
- [Mongoose] - Para crear nuestros modelos en la base de datos.
- [Nodemon] - Para el desarrollo de nuestro backend.

<img width="50" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript"/>
<img width="50" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js"/>
<img width="50" src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" alt="Express" title="Express"/>
<img width="50" src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png" alt="mongoDB" title="mongoDB"/>


## Istalación
Este proyecto requiere de [Node.js](https://nodejs.org/) v18+ para arrancar

Para instalarlo deberemos comenzar por los siguientes comando:

```sh
cd Proyecto-6
npm init -y
```
**Nota**: Este comando lo ultilazermos para generar el archivo *package.json*

Despues instalaremos nuestras dependencias

```sh
npm i -D nodemon
```



Una vez creado el *package.json* y las dependencias, añadiremos todas las librerias necesarias para proyecto, en este proyecto han sido los siguiente:

```sh
npm i express mongoose dotenv 
```

- [express] - Para tener una conexion con el servidor
- [mongoose] - Para la base de datos
- [dotenv] - Para poder acceder a las variables de entorno



## Desarrollo

- Creé modelos para las dos base de datos, una para las peliculas y otra para las plataformas.
- Creé el CRUD completo para poder realizar las distintas funciones que nos ayudara a su fincionamiento correcto.
- Creé el archivos de rutas, el archivo de configuración y el archivo de API.
- La carpeta API contiene los siguientes archivos: *Controllers, Models, routers*.
- Creé la carpeta donde ira la *semilla*, que es desde donde se obtendra nuestros datos de peliculas.

- Las diferentes URLs para realizar los post tanto de peliculas como de plataformas son los siguientes: 

```sh
http://localhost:3000/api/v1/peliculas
http://localhost:3000/api/v1/plataformas
```

- Tambien hay diferentes URLs independientemente para lo que quieras hacer,

*Es decir si quieres buscar por tiempo la URL termina en: 
```sh
http://localhost:3000/api/v1/peliculas/tiempo/:tiempo
```
*Es decir si quieres buscar por categoria la URL termina en: 
```sh
http://localhost:3000/api/v1/peliculas/categoria/:categoria
```
*Es decir si quieres buscar por "id" la URL termina en: 
```sh
http://localhost:3000/api/v1/peliculas/:id
http://localhost:3000/api/v1/plataformas/:id
```

## Licencia

Mi primer servidor con conexion a BBDD y api-rest, De Daniel Yepes Carrillo


   [Visual Studio Code]: <https://code.visualstudio.com>
   [Node.js]: <https://nodejs.org/es>
   [Dotenv]: <https://www.npmjs.com/package/dotenv>
   [Mongoose]: <https://mongoosejs.com>
   [Express]: <https://expressjs.com/es/>
   [GitHub]: <https://github.com/DaniYeCa


