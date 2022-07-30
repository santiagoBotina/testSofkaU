import "../../App.css";
import { useState, useEffect } from "react";

//Página que contiene todas las naves y el input para filtrar las naves
function Spaceships() {
  const [spaceships, setSpaceships] = useState([]);
  const [property, setProperty] = useState("name");
  const [value, setValue] = useState("");

  //Función para filtrar las naves de acuerdo a lo que pasa el cliente
  async function handleSubmit(e) {
    e.preventDefault();
    fetch("spaceships")
      .then((response) => response.json())
      .then((data) => {
        const dataFiltered = data.filter((s) => {
          if (property === "name" && value !== "") return s.name === value;
          if (property === "type" && value !== "") return s.type === value;
          if (property === "fuel" && value !== "") return s.fuel === value;

          if (value === "") return data;
        });
        //Set de estado de las naves para que sean actualizadas
        setSpaceships(dataFiltered);
      });
  }

  //UseEffect para hacer un request a la api del backend y traer las naves que serán mapeadas en el html
  useEffect(() => {
    fetch("spaceships")
      .then((response) => response.json())
      .then((data) => setSpaceships(data));
  }, []);

  return (
    <div className="App">
      <form
        method="get"
        action="/filter"
        onSubmit={handleSubmit}
        className="filter-form"
      >
        <select
          className="input-filter"
          name="options"
          value={property}
          onChange={(e) => setProperty(e.target.value)}
        >
          <option value="name">name</option>
          <option value="type">type</option>
          <option value="fuel">fuel</option>
        </select>
        <input
          className="input-filter"
          type="text"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Keyword"
        />
        <button className="filter-button">Filter</button>
      </form>
      <ul className="list">
        {spaceships.length <= 0 && <h3>No se encontraron naves</h3>}
        {spaceships.map((ship, i) => {
          return (
            <li key={i} className="ship">
              <p>
                <b>Name</b>: {ship.name}
              </p>
              <p>
                <b>Type</b>: {ship.type}
              </p>
              <p>
                <b>Weight</b>: {ship.weight}
              </p>
              <p>
                <b>Width</b>: {ship.width}
              </p>
              <p>
                <b>Power</b>: {ship.power}
              </p>
              <p>
                <b>Fuel</b>: {ship.fuel}
              </p>
              <p>
                <b>CanTransport</b>: {String(ship.canTransport)}
              </p>
              <p>
                <b>Speed</b>: {ship.speed}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Spaceships;
