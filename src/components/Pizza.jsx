import { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  const getPizza = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/pizzas/p001"
      );

      const data = await response.json();

      setPizza(data);

    } catch (error) {
      console.error("Error obteniendo pizza:", error);
    }
  };

  useEffect(() => {
    getPizza();
  }, []);

  // loading
  if (!pizza) {
    return <h2 className="text-center mt-5">Cargando pizza... 🍕</h2>;
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="row g-0">

          <div className="col-md-6">
            <img
              src={pizza.img}
              className="img-fluid rounded-start h-100"
              alt={pizza.name}
            />
          </div>

          <div className="col-md-6">
            <div className="card-body">

              <h2 className="text-capitalize">
                Pizza {pizza.name}
              </h2>

              <hr />

              <p>{pizza.desc}</p>

              <h5>Ingredientes:</h5>

              <ul>
                {pizza.ingredients.map((ingredient, index) => (
                  <li key={index}>🍕 {ingredient}</li>
                ))}
              </ul>

              <h3 className="mt-4">
                Precio: ${pizza.price.toLocaleString()}
              </h3>

              <button className="btn btn-dark mt-3">
                Añadir 🛒
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Pizza;