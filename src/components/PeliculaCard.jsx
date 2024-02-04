const PeliculaCard = ({ pelicula, onEliminar }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-body ">
          <h5 className="card-title">{pelicula.nombre}</h5>
          <p className="card-text">{pelicula.descripcion}</p>
          <p className="card-text">
            <strong>Género:</strong> {pelicula.genero}
          </p>
          <div className="text-center">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onEliminar()}
          >
            Eliminar
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeliculaCard;
