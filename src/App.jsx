import "bootstrap/dist/css/bootstrap.min.css";
import FormPeliculas from "./components/FormPeliculas";
import { Container } from "react-bootstrap";


function App() {
  return <>
  <section className=" text-center mt-4">
  <h1 className="bg-dark text-light">Formulario de Peliculas</h1>
  </section>
  <Container className="mt-4">
  <FormPeliculas></FormPeliculas>
  </Container>
  </>;
}

export default App;
