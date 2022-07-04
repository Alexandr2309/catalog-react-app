import React from 'react';
import empty from '../images/empty-basket.png';

const EmptyBasket = () => {
  const divStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '15vw',
    maxHeight: '20vh',
    margin: '30px auto',
  };
  const titleStyle = { fontSize: '24px', fontWeight: '700', color: '#faf9f9' };

  return (
    <div>
      <h3 style={{ ...titleStyle }}>Список пуст</h3>
      <div style={{ ...divStyle }}>
        <img
          src={empty}
          alt='empty-basket'
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
    </div>
  );
};

export default EmptyBasket;
