import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Button, Collapse } from 'react-bootstrap';
import { AppContext } from './Context';

const ProductPage = () => {
  const { tipo } = useParams();
  const { productos } = useContext(AppContext);
  const [open, setOpen] = useState({});

  const handleToggle = (id) => {
    setOpen(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="container mt-5">
      <h2 style={{ fontFamily: 'Helvetica' }}>Delantales {tipo}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {productos[tipo].map((producto) => (
          <Card key={producto.id} style={{ margin: '15px', flex: '1 0 30%', maxWidth: 'calc(33.333% - 30px)' }}>
            <Card.Img 
              variant="top" 
              src={`/${producto.image}`}
              style={{ width: '60%', height: '200px', objectFit: 'cover', borderRadius: '1.0rem', cursor: 'pointer', transition: 'transform 0.3s ease-in-out' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'none'}
            />
            <Card.Body>
              <Card.Title>{producto.name}</Card.Title>
              <Card.Text>
                <strong>Precio:</strong> ${producto.price}
              </Card.Text>
              <Button 
                style={{ backgroundColor: '#333', borderColor: '#333', color: 'white', fontWeight: 'bold', letterSpacing: '1px', transition: 'background-color 0.3s ease-out', marginTop: '10px' }}
                onClick={() => handleToggle(producto.id)}
              >
                Comprar
              </Button>
              <Collapse in={open[producto.id]}>
                <div id="example-collapse-text">
                  <Card.Text>
                    El pago es a través de Yappy al <strong>6526-2730</strong> o por transferencia a la cuenta de ahorro de:<br/>
                    <strong>LUIS ALEJANDRO FRANCESCHI JIMENEZ</strong><br />
                    Banco General<br />
                    0472972936113
                  </Card.Text>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        ))}
      </div>
      <Link to="/" className="btn btn-secondary mt-3">Volver a la página principal</Link>
    </div>
  );
};

export default ProductPage;
