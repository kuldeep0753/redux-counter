import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../actions/cartAction";

const Cart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);
  return (
    <div className="cart">
      <h2>Number of Items: {state.numOfItems}</h2>
      <button className="green_button" onClick={() => dispatch(addItem())}>
        Add Item
      </button>
      <button
        className="red_button"
        disabled={state.numOfItems > 0 ? false : true}
        onClick={() => dispatch(deleteItem())}
      >
        Delete Item
      </button>
    </div>
  );
};

export default Cart;
