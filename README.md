# APPrender
Este repositorio corresponde al front end de la aplicacion APPrender. APPprender es una aplicacion orientada a alumnos y docentes quienes pueden registrarse y contratar/ofrecer clases de distintos tipos. La aplicacion permite registrarse tanto como alumnos o profesores, buscar y publicar clases, comentar y calificar clases tomadas, asi como tambien contratarlas.

# Tecnologias
El proyecto esta realizado con las siguientes tecnologias:

- [React.Js](https://reactjs.org/)
- [MaterialUi](https://mui.com/)
- HTML
- CSS

#### Imagenes de la aplicacion funcionando:   

![image](https://user-images.githubusercontent.com/41348212/208121800-3d5a3e0a-bef7-44bc-bc0c-901a5a898345.png)

![image](https://user-images.githubusercontent.com/41348212/208122018-d7e2feec-28d4-46f1-a1f9-45cedbe8ab17.png)

## Instalacion y configuracion

Clonar el repositorio. Se necesitara "node" y "npm" instalado globalmente.  

Instalacion:

`npm install`  

Para ejecutar la aplicacion:

`npm start`  

El comando npm start abrira automaticamente la aplicacion en el navegador aunque se puede acceder en la siguiente direccion:

`http://localhost:[PORT]/`  

 # Estructura del proyecto
 El directorio raiz se encuentra compuesto de la siguiente manera:
  * public - Carpeta que contiene el html
  * src:
    * assets - imagenes y archivos para mock up
    * components - contiene los archivos de los componentes react
    * controller - Controladores de los distintos servicios
    * pages - contiene los archivos de las distintas paginas de la aplicacion
    * tools - contiene ruteo de la pagina y configuracion visual
    * app.js - Archivo con el componente app, es el componente principal de la aplicacion
    * index.js
  * .gitignore - Archivo que contiene una lista de archivos para ser ignorados por git
  * README.md - Archivo descriptivo con la informacion del proyecto
  * package-lock.json - Archivo default node
  * package.json - Archivo default node con las dependencias
