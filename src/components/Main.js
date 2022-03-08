import { useState, useEffect } from "react";
import Contador from "../contador";
import ItemCount from "../components/ItemCount";

let productosIniciales = [
  {
    id: 1,
    nombre: "Producto 1",
    price: 100,
  },
  {
    id: 2,
    nombre: "Producto 2",
    price: 200,
  },
  {
    id: 3,
    nombre: "Producto 3",
    price: 300,
  },
];

const Main = (props) => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);

  //useEffect(function [,array])

  //Este efecto se va a ejecutar despues de montado el componente y despues de cada render
  useEffect(() => {
    //Aca estoy simulando que hago un pedido a una API
    setTimeout(() => {
      setProductos(productosIniciales);
      setLoading(false);
    }, 3000);
  });

  console.log(productos);

  return (
    <main className="container">
      <h2>
        Bienvenido {props.nombre} {props.apellido}!
      </h2>
      <img src="#" />
      <p>La cantidad de productos es: 0</p>
      <p>{loading ? "Cargando..." : "Ya tenes los productos"}</p>
      <ul>
        {productos.map((producto, index) => {
          return;
          <li>{producto.nombre}</li>;
        })}
      </ul>
      <Contador />
      <ItemCount />
    </main>
  );
};

export default Main;
