import React, { useContext } from 'react';
import EmptyBasket from './EmptyBasket';
import Card from './Card';
import style from '../styles/Basket.module.css';
import DiscountContext from '../context';

const Basket = ({ products, setProducts }) => {
  const { discount } = useContext(DiscountContext);

  return (
    <div>
      <h2 style={{ fontSize: '24px', color: '#faf9f9' }}>Корзина</h2>
      <div className={style.wrapper}>
        {products.length ? (
          products.map(({ id, name, price }) => {
            return (
              <Card
                key={Math.round(id + Math.random())}
                name={name}
                id={id}
                price={price}
                products={products}
                setProducts={setProducts}
              />
            );
          })
        ) : (
          <EmptyBasket />
        )}
      </div>
    </div>
  );
};

export default Basket;
