import { useState } from "react";

const Contador = () => {
  const [dark, setDark] = useState(false); // Usar siempre los states con CONST. Entre () va el valor por default

  const toogleDarkMode = () => {
    setDark(!dark);
  };

  // let dark = true;
  // const toogleDarkMode = () => {
  //   console.log("Toggle Dark Mode");
  //   dark = !dark;
  //   console.log(dark);
  // };

  return (
    <div>
      <h1>Contador</h1>
      <p>El tema del sitio es: {dark.toString()}</p>
      <p>Mi contador actual va: 0</p>
      <button onClick={toogleDarkMode}>Toggle dark mode</button>
    </div>
  );
};

export default Contador;
