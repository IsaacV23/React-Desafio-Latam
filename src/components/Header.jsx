import headerBg from '../assets/Header.jpg'

const Header = () => {
  return (
    <header
      className="text-white text-center d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${headerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '250px',
        position: 'relative'
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.45)'
        }}
      ></div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1>¡Pizzería Mamma Mia!</h1>
        <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </div>
    </header>
  )
}

export default Header