import { useCart } from "../../context/CartContext";
import { Item } from "../Item/Item";
import Swal from "sweetalert2";

export const CartItem = ({ item }) => {
  const { removeItem } = useCart();

  const handleRemove = () => {
    removeItem(item.id); 
    
    Swal.fire({
      title: "Eliminado",
      text: "El producto se quitó del carrito",
      icon: "info",
      timer: 1500,
      showConfirmButton: false
    });
  };

  return (
    <Item {...item}>
      <button
        className="btn bg-delete primary"
        onClick={handleRemove}
      >
        Eliminar
      </button>
    </Item>
  );
};