import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom"; // Necesario para leer la categoría

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);

  // Extraemos la categoría de la URL
  const { category } = useParams();

  useEffect(() => {
    // 1. Hacemos el fetch directamente aquí (como en el video)
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al cargar los productos");
        }
        return res.json();
      })
      .then((data) => {
        // 2. Si hay una categoría en la URL, filtramos los datos
        if (category) {
          const filteredProducts = data.filter((pro) => pro.category === category);
          setProducts(filteredProducts);
        } else {
          // Si no hay categoría, guardamos todos los productos
          setProducts(data);
        }
      })
      .catch((error) => setErrors(error.message))
      .finally(() => setLoading(false));
      
  }, [category]); // 3. Importante: "category" debe estar en el array de dependencias

  if (loading) return <p>Cargando...</p>;
  if (errors) return <p>{errors}</p>;

  return (
    <section>
      <h1>Productos</h1>
      <ItemList products={products} />
    </section>
  );
};