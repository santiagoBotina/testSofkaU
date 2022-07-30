import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Spaceships from "./pages/spaceships/Spaceships";
import CreateSpaceship from "./components/CreateSpaceship.jsx";

//Función principal, gestionando las rutas y seteando la navbar para los links a las diferentes páginas
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Reto técnico sofkaU</h2>
      </header>
      <main>
        <navbar className="navbar">
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/spaceships">Ver Naves</Link>
          </p>
          <p>
            <Link to="/new">Crear Nave</Link>
          </p>
        </navbar>
      </main>
      {/*Componente Routes*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spaceships" element={<Spaceships />} />
        <Route path="/new" element={<CreateSpaceship />} />
      </Routes>
      <footer>
        <h4>Hecho con ♥️ por Santiago Botina</h4>
      </footer>
    </div>
  );
}

export default App;
