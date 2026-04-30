import Header from '../components/Header'
import CardPizza from '../components/CardPizza'
import { pizzas } from '../pizzas' // 👈 IMPORTANTE

const Home = () => {
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
  )
}

export default Home