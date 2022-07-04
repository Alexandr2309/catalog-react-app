import React, { useContext, useEffect, useState } from 'react';
import DiscountContext from '../context';
import { createString } from '../utils/helpFunc';
import Media from 'react-media';

const Stats = ({ products }) => {
  const { discount, setDiscount } = useContext(DiscountContext);
  function countAll() {
    let sum = 0;
    for (let elem of products) {
      sum += +elem.price;
    }
    return sum;
  }

  const textStyles = {
    color: '#555b6e',
    fontSize: '22px',
    background: '#faf9f9',
    maxWidth: '50vw',
    margin: '0 auto',
    borderRadius: '0 0 15px 15px',
    padding: '10px',
  };
  const changeText = {
    fontSize: '18px',
    lineHeight: 1.5,
    padding: '10px 15px',
    boxSizing: 'border-box',
  };
  
  return (
    <Media
      queries={{
        change: '(max-width: 998px)',
      }}
    >
      {(matches) => (
        <div
          style={matches.change ? { ...textStyles, ...changeText } : textStyles}
        >
          <p style={{ marginBottom: '10px' }}>
            Количество товаров в корзине -{' '}
            <span style={{ fontWeight: '700' }}>{products.length || 0}</span>
          </p>
          Общая стоимость товаров в корзине -{' '}
          <span style={{ fontWeight: '700' }}>
            {products.length > 0
              ? discount > 0
                ? createString(
                    products.length > 1 ? countAll() : products[0].price,
                    discount
                  )
                : `${products.reduce((a, b) => +a.price + +b.price, {
                    price: 0,
                  })} руб`
              : 'Добавьте товар'}
          </span>
        </div>
      )}
    </Media>
  );
};

export default Stats;
