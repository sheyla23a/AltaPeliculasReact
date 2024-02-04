import React, { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FormPeliculas = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    genero: "comedia",
  });

  const [peliculas,setPeliculas] = useState([]);
  useEffect(() => {
    const storedPeliculas = JSON.parse(localStorage.getItem("peliculas")) || [];
    setPeliculas(storedPeliculas);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Descripción:</label>
        <textarea
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Género:</label>
        <select
          name="genero"
          value={formData.genero}
          onChange={handleChange}
          className="form-select"
        >
          <option value="comedia">Comedia</option>
          <option value="drama">Drama</option>
          <option value="infantil">Infantil</option>
        </select>
      </div>
      <div className="text-center mt-4 ">
        <button type="submit" className="btn btn-dark">
          Agregar
        </button>
      </div>
    </form>
  );
};

export default FormPeliculas;
