import "../App.css";
import { useState } from "react";
import axios from "axios";

//Creando cliente axios para los requests
const client = axios.create({
  baseURL: "http://localhost:3001",
});

function CreateSpaceship() {
  //Estado de los inputs del formulario
  const [name, setName] = useState("");
  const [weight, setWeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [power, setPower] = useState(0);
  const [fuel, setFuel] = useState("Petróleo refinado");
  const [canTransport, setCanTransport] = useState(true);
  const [speed, setSpeed] = useState(0);

  function handleSubmit(e) {
    const formData = { name, weight, width, power, fuel, canTransport, speed };

    //Llamando función post para mandar el POST al backend y crear la nave
    post(formData);
  }

  function post(data) {
    client
      .post("/spaceships", {
        name: data.name,
        weight: Number(data.weight),
        width: Number(data.width),
        power: Number(data.power),
        fuel: data.fuel,
        canTransport: data.canTransport,
        speed: Number(data.speed),
      })
      .then(() => alert("Nave creada!"));
  }

  return (
    <div className="main-form">
      <form onSubmit={handleSubmit} className="create-ship-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          className="input"
        />
        <input
          className="input"
          type="number"
          name="weight"
          placeholder="Weight"
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          className="input"
          type="number"
          name="width"
          placeholder="width"
          onChange={(e) => setWidth(e.target.value)}
        />
        <input
          className="input"
          type="number"
          name="power"
          placeholder="power"
          onChange={(e) => setPower(e.target.value)}
        />
        <div className="div-label">
          <label htmlFor="fuel">Tipo de combustible</label>
          <select
            name="fuel"
            value={fuel}
            onChange={(e) => setFuel(e.target.value)}
            className="input "
          >
            <option name="Petróleo refinado" value={"Petróleo refinado"} id="1">
              Petróleo refinado
            </option>
            <option
              name="Celdas fotovoltaicas"
              value={"Celdas fotovoltaicas"}
              id="2"
            >
              Celdas fotovoltaicas
            </option>
            <option name="Sólido" value={"Sólido"} id="3">
              Sólido
            </option>
            <option name="NO4 + UDMH" value={"NO4 + UDMH"} id="4">
              NO4 + UDMH
            </option>
          </select>
        </div>
        <div className="div-label">
          <label htmlFor="canTransport">Puede transportar carga?</label>
          <select
            className="input"
            name="canTransport"
            value={canTransport}
            onChange={(e) => setCanTransport(e.target.value)}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>
        <input
          className="input"
          type="number"
          name="speed"
          placeholder="speed"
          onChange={(e) => setSpeed(e.target.value)}
        />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}

export default CreateSpaceship;
