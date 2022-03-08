const ItemCount = ({ stop, initial, onAdd }) => {
  return (
    <div>
      <h2>Cantidad de unidades</h2>
      <div>
        <button>-</button>
        <input type="number" />
        <button>+</button>
      </div>
      <div>
        <button>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemCount;
