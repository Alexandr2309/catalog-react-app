import React, { useContext } from 'react';
import remove from '../images/delete.png';
import { createString, tooltipToggle } from '../utils/helpFunc';
import DiscountContext from '../context';

const Card = ({ id, name, price, products, setProducts }) => {
  const { discount } = useContext(DiscountContext);
  const cardStyles = {
    background: '#faf9f9',
    borderRadius: '30px',
    margin: '15px 0px',
    padding: '15px 30px',
    border: '2px solid #ffd6ba',
    maxWidth: '40%',
  };
  const mainElementsStyles = {
    div: { display: 'flex', justifyContent: 'end', textAlign: 'right' },
    img: { height: 'auto', maxWidth: '24px', maxHeight: '24px' },
    h2: {
      fontSize: '22px',
      fontWeight: 700,
      textAlign: 'left',
      padding: '5px 0',
    },
    h3: {
      fontSize: '26px',
      fontWeight: 600,
      textAlign: 'left',
      padding: '5px 0',
      color: '#bcb8b1',
    },
    h5: { fontSize: '18px', opacity: 0.8, textAlign: 'right' },
  };

  const deleteProduct = (e) => {
    document.getElementById('tooltip').remove();
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div style={{ ...cardStyles }} data-role='product'>
      <div style={{ ...mainElementsStyles.div }}>
        <img
          onMouseEnter={tooltipToggle}
          onMouseLeave={(e) => {
            tooltipToggle.call(null, e, true);
          }}
          src={remove}
          alt='remove'
          style={{ ...mainElementsStyles.img }}
          onClick={deleteProduct}
        />
      </div>
      <h2 style={{ ...mainElementsStyles.h2 }}>{name}</h2>
      <h3 style={{ ...mainElementsStyles.h3 }}>
        {discount > 0 ? createString(price, discount) : price} руб
      </h3>
      <h5 style={{ ...mainElementsStyles.h5 }}>{id}</h5>
    </div>
  );
};

export default Card;
