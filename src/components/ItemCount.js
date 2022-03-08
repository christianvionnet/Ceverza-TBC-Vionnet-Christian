import { useState } from "react";

const ItemCount = (props) => {
  const [contador, setContador] = useState(props.initial);

  const onAdd = () => {
    if (props.stock != 0) {
      if (contador < props.stock) {
        setContador(contador + 1);
      }
    }
  };

  const onRestar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <h2>Cantidad de unidades</h2>
      <div>
        <button onClick={onRestar}>-</button>
        <p>{contador}</p>
        <button onClick={onAdd}>+</button>
      </div>
      <div>
        <button>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemCount;
