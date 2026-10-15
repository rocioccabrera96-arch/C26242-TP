import { Item } from "../Item/Item";
import { useCart } from "../../context/CartContext";
import "./ItemDetail.css";
import Swal from "sweetalert2"; // 1. Importamos la alerta

export const ItemDetail = ({ item }) => {
  const { addItem } = useCart();

  // 2. Creamos una función que haga ambas cosas al hacer clic
  const handleAddToCart = () => {
    addItem(item); // Primero agrega el producto a tu contexto
    
    // Luego muestra la alerta en pantalla
    Swal.fire({
      title: "¡Agregado!",
      text: `${item.name} se sumó a tu carrito 🐾`,
      icon: "success",
      timer: 2000,
      showConfirmButton: false
    });
  };

  return (
    <div className="detail-wrapper">
      <Item {...item}>
        {/* 3. Ejecutamos nuestra nueva función combinada */}
        <button
          className="btn bg-primary primary"
          onClick={handleAddToCart}
        >
          Agregar al carrito
        </button>
      </Item>
    </div>
  );
};