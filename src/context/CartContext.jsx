import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

/* -------------------------------------------------------------------------- */
/*                              CREAMOS CONTEXTO                              */
/* -------------------------------------------------------------------------- */
const CartContext = createContext();

/* -------------------------------------------------------------------------- */
/*                                 CUSTOM HOOK                                */
/* -------------------------------------------------------------------------- */
export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};

/* -------------------------------------------------------------------------- */
/*                                  PROVEEDOR                                 */
/* -------------------------------------------------------------------------- */
export const CartProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const isInCart = (item) => {
    const inCart = cart.some((element) => element.id === item.id);
    return inCart;
  };

const addItem = (item) => {
    if (isInCart(item)) {
      return false;
    }
    setCart([...cart, item]);
    return true;
  };
  //Eliminar del carrito
  const removeItem = (id) => {
    const updatedCart = cart.filter((element) => element.id !== id);
    setCart(updatedCart);

    //Forma funcional "prev"
    //setCart((prev) => prev.filter((element) => element.id !== id));
  };

  //Vacia el carrito
  const clearCart = () => {
    setCart([]);
  };

  //Total de items en carrito (para este caso sin quantity)
  const getTotalItems = () => {
    return cart.length;
  };

  //Total a pagar
  const getCartTotal = () => {
    return cart.reduce((acc, element) => acc + element.price, 0);
  };

  //Checkout
  const checkout = () => {
    alert("Su compra ha sido realizada 🎉");
    clearCart();
    navigate("/");
  };

  const values = {
    cart,
    addItem,
    clearCart,
    removeItem,
    getCartTotal,
    getTotalItems,
    checkout,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
