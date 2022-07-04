import React, { useState } from 'react';
import cl from '../styles/Form.module.scss';

const Form = ({ products, setProducts }) => {
  const [fields, setFields] = useState({ id: '', name: '', price: '' });

  function addProduct(e) {
    e.preventDefault();
    const isNotNumber =
      isNaN(parseInt(fields.price)) || isNaN(parseInt(fields.id));
    if (isNotNumber) {
      alert(
        'Ошибка в поле Идентификатор или Цена товара.' +
          'Можно вводить только числа!'
      );
      return;
    }
    if (products.some((item) => +item.id === +fields.id)) {
      alert('Товар с таким идентификатором существует, задайте другой');
      return;
    }
    if (!fields.name) {
      alert('Поле не может быть пустым');
      return;
    }

    setProducts([...products, fields]);
    setFields({ id: '', name: '', price: '' });
  }

  return (
    <div className={cl.wrapper}>
      <form action='#'>
        <h2 style={{ padding: '15px 0' }}>Добавить товар в корзину</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div className={cl.field}>
            <label htmlFor='id'>Идентификтор товара</label>
            <input
              className={cl.inp}
              type='text'
              id='id'
              value={fields.id}
              onChange={(e) => setFields({ ...fields, id: e.target.value })}
            />
          </div>
          <div className={cl.field}>
            <label htmlFor='name'>Название товара</label>
            <input
              className={cl.inp}
              type='text'
              id='name'
              value={fields.name}
              onChange={(e) => setFields({ ...fields, name: e.target.value })}
            />
          </div>
          <div className={cl.field}>
            <label htmlFor='price'>Цена товара</label>
            <input
              className={cl.inp}
              type='text'
              id='price'
              value={fields.price}
              onChange={(e) => setFields({ ...fields, price: e.target.value })}
            />
          </div>
        </div>
        <button className={cl.btn} onClick={addProduct}>
          Добавить товар
        </button>
      </form>
    </div>
  );
};

export default Form;
