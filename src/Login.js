import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './Context'; // Asegúrate de que la ruta de importación sea correcta
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

const Login = () => {
  const { login } = useContext(AppContext);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    const role = username === 'admin' ? 'admin' : 'cliente';
    login({ username, role });
    navigate('/'); // Redirige al usuario a la página principal después del inicio de sesión
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre de Usuario</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu nombre de usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
              <Form.Text className="text-muted">
                Ingresa estilo de cuenta.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Iniciar Sesión
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;


