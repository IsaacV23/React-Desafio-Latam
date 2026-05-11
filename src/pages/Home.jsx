import { useEffect, useState } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  // consumir API
  const getPizzas = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas");

      const data = await response.json();

      setPizzas(data);

    } catch (error) {
      console.error("Error al obtener pizzas:", error);
    }
  };

  // ejecutar al cargar
  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <div>
      <Header />

      <div className="container mt-5">
        <div className="row">
          {pizzas.map((pizza) => (
            <div className="col-md-4" key={pizza.id}>
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;