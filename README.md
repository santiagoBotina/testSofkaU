##Bienvenidos a mi aplicación desarrollada para el reto técnico de sofkaU

1. [Nombre]: Spaceship world

2. [Tecnologías]: Node/NestJs, React.js, MongoDB, Typescript, Javascript y git/github

3. [Instalación]: Clona el repo con

```bash
 $ git clone https://github.com/santiagoBotina/testSofkaU.git
```

Para levantar la aplicación hace falta que tengas instalado el cli de NestJs, lo puedes instalar con el comando

```bash
 $ npm i -g @nestjs/cli
```

Ahora que tienes NestJs, por favor ejecuta dentro de la carpeta "server" y "client" por separado:

```bash
 $ npm i
```

Seguido a eso, ejecutaremos "npm run start" en la carpeta "server" y "npm start" dentro de la carpeta "client" para inicializar
tanto el backend como el frontend

Si quieren ver la versión desplegada pueden visitarla aquí: https://frontend-testsofka-production.up.railway.app/
Esta versión desplegada se hizo con dos repos separados, uno para el backend y otro para el frontend ya que lastimosamente intenté
hacer el deploy con el monorepo pero siempre salía error al parecer por los archivos estáticos o algo relacionado. Este es el backend
desplegado: https://backend-testsofka-production.up.railway.app/spaceships con el método POST y GET a esa misma ruta.

Muchas gracias por su tiempo y que tengan un feliz día!
