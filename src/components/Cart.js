import React, { useState } from 'react';
import Footer from './Footer'; 
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { remove, incrementItemQuantity, decrementItemQuantity } from '../Store/CartSlice';
import Total from './Total';

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const handleRemover = (pid) => {
    dispatch(remove(pid));
  };

  const [quantityMap, setQuantityMap] = useState({});

  const handleIncrement = (itemId) => {
    dispatch(incrementItemQuantity(itemId));
    setQuantityMap((prevQuantityMap) => ({
      ...prevQuantityMap,
      [itemId]: (prevQuantityMap[itemId] || 0) + 1,
    }));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementItemQuantity(itemId));
    setQuantityMap((prevQuantityMap) => ({
      ...prevQuantityMap,
      [itemId]: (prevQuantityMap[itemId] || 0) - 1,
    }));
  };

  let totalPrice = 0;

  products.forEach((product) => {
    const quantity = quantityMap[product.id] || 0;
    totalPrice += product.price * quantity;
  });

  return (
    <>
      <Navbar />
      <div className="shopping-cart">
        <div className="title">Shopping Bag</div>
        {products.map((pro) => (
          <div key={pro.id} className="item">
            <div className="buttons">
              <span className="delete-btn" onClick={() => handleRemover(pro.id)}>
                <MdDelete />
              </span>
            </div>
            <div className="image">
              <img src={pro.w1} alt="" />
            </div>
            <div className="description">
              <span>{pro.h6}</span>
              <span>{pro.category}</span>
              <span>{pro.thing}</span>
            </div>
            <div className="quantity">
              <button
                className="plus-btn"
                type="button"
                name="button"
                onClick={() => handleIncrement(pro.id)}
              >
                <AiOutlinePlus />
              </button>
              <a>{quantityMap[pro.id] || 0}</a>
              <button
                className="minus-btn"
                type="button"
                name="button"
                onClick={() => handleDecrement(pro.id)}
              >
                <AiOutlineMinus />
              </button>
            </div>
            <div className="total-price">{pro.price}</div>
          </div>
        ))}
        <Total price={totalPrice} />
      </div>
      <Footer />
    </>
  );
};

export default Cart;
