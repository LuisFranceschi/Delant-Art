import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AppContext } from './Context';

const HomePage = () => {
  const { productos } = useContext(AppContext);

  const cardStyle = {
    width: 'calc(33.333% - 20px)',
    margin: '10px',
    marginTop: '70px', // Adjusted margin from the top
    marginLeft: '25px',
    flex: '1 0 30%',
    overflow: 'hidden',
    transition: 'transform 0.3s ease-in-out',
    borderRadius: '1.0rem'
  };

  // Add hover effect to scale up the card on hover
  const handleMouseOver = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = 'none';
  };

  const bannerStyle = {
    background: 'linear-gradient(to left, #A1FFCE, #FAFFD1), url("/logo.jpeg")', // Gradient with logo background
    backgroundSize: 'cover', // Ensure the logo covers the entire banner
    padding: '20px',
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '3rem', // Increased font size for better visibility
    fontWeight: 'bold',
    fontFamily: 'cursive, sans-serif', // New font style
    color: '#333', // Font color to contrast with background
  };

  const imageMap = {
    Superheroes: ['Superman.jpeg', 'Captain America.jpeg'],
    Cocina: ['cocina blanco.jpeg', 'cocina negro.jpeg'],
    Picantes: ['naked.jpeg', 'sirvienta.jpeg'],
  };

  const getImageStyle = (index, tipo) => ({
    width: '50%',
    height: '90px',
    objectFit: 'cover',
    opacity: 0.9 + (0.1 * (1 - index / (imageMap[tipo].length - 1))),
    position: 'absolute',
    top: `${index * 60}px`,
    zIndex: index,
  });
  const buttonStyle = {
    backgroundColor: '#333',
    borderColor: '#333',
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: '1px',
    transition: 'background-color 0.3s ease-out',
    marginTop: '10px',
    textDecoration: 'none', // Remove underline
    display: 'inline-block',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div className="container mt-5">
      <div className="banner" style={bannerStyle}>
        Delant-Art, para dar estilo a tus comidas!
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {Object.keys(productos).map(tipo => (
          <Card
            key={tipo}
            style={cardStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <div style={{ position: 'relative', height: '150px' }}>
              {imageMap[tipo].map((image, index) => (
                <img
                  key={index}
                  src={`/${image}`}
                  style={getImageStyle(index, tipo)}
                  alt={`${tipo} ${index + 1}`}
                />
              ))}
            </div>
            <Card.Body>
              <Card.Title>{tipo}</Card.Title>
              <Card.Text>
                Explora nuestros diseños únicos!
              </Card.Text>
              <Button as={Link} to={`/productos/${tipo}`} style={buttonStyle}  className="btn btn-primary">  Ver Productos</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
