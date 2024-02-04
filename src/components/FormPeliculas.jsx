import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PeliculaCard from "./PeliculaCard";

const FormPeliculas = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    genero: "comedia",
  });

  const [peliculas, setPeliculas] = useState([]);

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

    if (!formData.nombre.trim() || !formData.descripcion.trim()) {
      alert("Por favor, completa todos los campos del formulario.");
      return;
    }

    const nuevaPelicula = { ...formData };
    const nuevasPeliculas = [...peliculas, nuevaPelicula];
    localStorage.setItem("peliculas", JSON.stringify(nuevasPeliculas));
    setPeliculas(nuevasPeliculas);

    alert("Película agregada correctamente.");

    setFormData({
      nombre: "",
      descripcion: "",
      genero: "comedia",
    });
  };

  const handleEliminar = (index) => {
    const nuevaLista = [...peliculas];
    nuevaLista.splice(index, 1);

    localStorage.setItem("peliculas", JSON.stringify(nuevaLista));
    setPeliculas(nuevaLista);

    alert("Película eliminada correctamente.");
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre:</label>
          <input
            type="text"
            name="nombre"
            minLength={5}
            maxLength={30}
            value={formData.nombre}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Descripción:</label>
          <textarea
            name="descripcion"
            minLength={10}
            maxLength={80}
            value={formData.descripcion}
            onChange={handleChange}
            className="form-control"
            required
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
        <div className="text-center mt-4">
          <button type="submit" className="btn btn-dark">
            Agregar
          </button>
        </div>
      </form>

      {peliculas.length > 0 && (
        <div className="row mt-4">
          {peliculas.map((pelicula, index) => (
            <PeliculaCard
              key={index}
              pelicula={pelicula}
              onEliminar={() => handleEliminar(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FormPeliculas;
