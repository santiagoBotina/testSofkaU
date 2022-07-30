import "../../App.css";
import spaceship from "./spaceship.jpg";

//Componente Home, contiene la página principal con la introducción a la app con una simple imágen como ilustración de la temática
function Home() {
  return (
    <div className="Home">
      <main className="main-home">
        <article>
          <p>
            Bienvenidos a mi solución del reto técnico para entrar a sofkaU.
            Esta página fue realizada con React.js en el frontend y con Node y
            NestJs en el backend siguiendo los lineamientos del reto. Se
            utuiliza la programación orientada a objetos, se implementan
            interfaces, modelos y clases abstractas, una base de datos no
            relacional con mongoDB y funciones propias de cada clase, así como
            la posibilidad de crear una nave nueva y filtrar por diferentes
            campos.
            <br></br>Para filtrar selecciona el campo por el cual quieres
            filtrar y seguido ingresa el nombre, texto, etc que deseas encontrar
            como porpiedad de las naves, para volver a ver todas las naves
            puedes simplemente borrar el texto del input y presionar "filtrar"
            <br></br>Agradezco inmensamente su tiempo y espero cumpla las
            expectativas del reto! <br></br>
            <br></br>Santiago Botina Esparza
          </p>
          <img src={spaceship} alt="spaceship" width={700} />
        </article>
      </main>
    </div>
  );
}

export default Home;
