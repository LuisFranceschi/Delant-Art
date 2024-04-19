import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();


export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [productos, setProductos] = useState({
    Superheroes: [
      { id: 1, name: 'Superman', price: '10.00 US dollars', cantidad: 5, image: 'Superman.jpeg' },
      { id: 2, name: 'Captain America', price: '10.00 US dollars', cantidad: 5, image: 'Captain America.jpeg'},
      { id: 3, name: 'Wonder Woman', price: '10.00 US dollars', cantidad: 5, image: 'Wonder Woman.jpeg' },
      { id: 4, name: 'Flash', price: '10.00 US dollars', cantidad: 5, image: 'Wonder Woman.jpeg' },
      { id: 5, name: 'Spiderman', price: '10.00 US dollars', cantidad: 5, image: 'Spiderman.jpeg' },
      { id: 6, name: 'Batman', price: '10.00 US dollars', cantidad: 5, image: 'batman.jpeg' },
    ],
    Cocina: [
      { id: 1, name: 'My kitchen white', price: '10.00 US dollars', cantidad: 5, image: 'cocina blanco.jpeg' },
      { id: 2, name: 'My kitchen black', price: '10.00 US dollars', cantidad: 5, image:'cocina negro.jpeg' },
      { id: 3, name: 'Kiss Chef', price: '10.00 US dollars', cantidad: 5, image: 'kiss chef.jpeg' },
    ],
    Picantes: [
      { id: 1, name: 'Stripper', price: '10.00 US dollars', cantidad: 5, image:'naked.jpeg' },
      { id: 2, name: 'Maid', price: '10.00 US dollars', cantidad: 5, image:'sirvienta.jpeg' },
    ],
    
  });

  

  // Debugging: Log whenever productos is updated
  

  useEffect(() => {
    localStorage.setItem('productos', JSON.stringify(productos));
    localStorage.setItem('user', JSON.stringify(user));
  }, [productos, user]);

  const login = (usuario) => {
    setUser(usuario);
  };

  const logout = () => {
    setUser(null);
  };

  const actualizarCantidad = (tipo, id, cantidad) => {
    setProductos((prevState) => ({
      ...prevState,
      [tipo]: prevState[tipo].map((producto) =>
        producto.id === id ? { ...producto, cantidad } : producto
      ),
    }));
  };

  return (
    <AppContext.Provider value={{ user, productos, actualizarCantidad, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};