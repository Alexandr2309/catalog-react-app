import React, { useContext, useState } from 'react';
import DiscountContext from '../context';
import styled from 'styled-components';
import CustomComponent from './StyledComponents';

const Discount = () => {
  const { discount, setDiscount } = useContext(DiscountContext);
  const [value, setValue] = useState('');

  const inputStyles = {
    backgroundColor: '#eee',
    verticalAlign: 'top',
    outline: 'none',
    padding: 0,
    height: '40px',
    lineHeight: '40px',
    textIndent: '10px',
    display: 'inline-block',
    width: '50%',
    textAlign: 'center',
    boxSizing: 'border-box',
    border: '1px solid #ddd',
    fontSize: '20px',
    borderRadius: '3px',
    WebkitBoxShadow: '0px 5px 10px 2px rgba(34, 60, 60, 0.1) inset',
    MozBoxShadow: '0px 5px 10px 2px rgba(34, 60, 60, 0.1) inset',
    boxShadow: '0px 5px 10px 2px rgba(34, 60, 60, 0.1) inset',
  };

  const editDiscount = () => {
    if(!value) {
      alert('Данный формат ввода не поддерживается');
      return;
    }
    if(+value < 0 || +value > 100) {
      alert('Скидка не может быть значением в диапазоне от 0 до 100!');
      return;
    };
    setDiscount(+value);
  }
  const changeValue = (e) => {
    const formatValue = e.target.value.replace(/^([0-]+)([1-9]+)/,'$2');
    setValue(formatValue);
  }
  
  return (
    <CustomComponent.TagWrapper>
      <CustomComponent.Title>Текущая скидка = {discount}%</CustomComponent.Title>
      <div>
        <input
          type='number'
          min={0}
          max={100}
          step={1}
          style={inputStyles}
          value={value}
          onChange={changeValue}
        />
      </div>
      <CustomComponent.Button
      onClick={editDiscount}
      >Установить скидку</CustomComponent.Button>
      <CustomComponent.Button
        onClick={e => setDiscount(0)}
        style={{border: '2px solid red', background: 'none'}}
      >Убрать скидки</CustomComponent.Button>
    </CustomComponent.TagWrapper>
  );
};

export default Discount;
