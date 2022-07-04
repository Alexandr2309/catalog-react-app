import './styles/App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Basket from './components/Basket';
import Stats from './components/Stats';
import DiscountContext from './context';
import Discount from './components/Discount';

function App() {
  const [products, setProducts] = useState([]);
  const [discount, setDiscount] = useState(0);

  const titleStyles = {
    fontSize: '28px',
    fontWeight: 700,
    padding: '15px 0',
    color: '#faf9f9',
  };

  return (
    <DiscountContext.Provider value={{ discount, setDiscount }}>
      <div className='App'>
        <header>
          <h1 style={{ ...titleStyles }}>Каталог товаров</h1>
        </header>
        <Form products={products} setProducts={setProducts} />
        <Discount />
        <Basket products={products} setProducts={setProducts} />
        <Stats products={products} />
      </div>
    </DiscountContext.Provider>
  );
}

export default App;
