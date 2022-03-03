import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function Header() {
  return (
    <header id="main-header">
      <NavBar />
      <ItemListContainer />
    </header>
  );
}

export default Header;
