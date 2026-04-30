const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card mb-4 shadow">
      <img src={img} className="card-img-top" alt={name} />

      <div className="card-body text-center">
        <h5 className="card-title text-capitalize">
          Pizza {name}
        </h5>

        <p className="text-muted">Ingredientes:</p>

        <ul className="list-unstyled">
          {ingredients.map((ing, index) => (
            <li key={index}>🍕 {ing}</li>
          ))}
        </ul>

        <h4 className="mt-3">
          Precio: ${price.toLocaleString()}
        </h4>

        <div className="d-flex justify-content-between mt-3">
          <button className="btn btn-outline-secondary">Ver Más 👀</button>
          <button className="btn btn-dark">Añadir 🛒</button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza