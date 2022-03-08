import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import ItemListContainer from "./components/ItemListContainer";

const edad = 29;
const usuarios = ["Juan", "Pedro", "Maria"];

function App() {
  return (
    <>
      <Header />
      <Main nombre="Christian" apellido="Vionnet" />
      <Footer />
    </>
  );
}

export default App;
