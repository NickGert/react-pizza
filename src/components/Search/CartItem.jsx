import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, minusItem, removeItem } from "../../redux/cartSlice";

const CartItem = ({ id, title, types, price, count, imageUrl, sizes }) => {
  const { items } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      })
    );
  };

  const onClickMinus = () => {
    if (count > 0) {
      dispatch(minusItem(id));
    }
  };

  const onClickRemove = () => {
    if (window.confirm("Are you sure you want to delete ?")) {
      dispatch(removeItem(id));
    }
  };

  return (
    <>
      <div className="cart__item">
        <div className="cart__item-img">
          <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        </div>
        <div className="cart__item-info">
          <h3>{title}</h3>
          <p>
            {types} <br />
            {sizes}
          </p>
        </div>
        <div className="cart__item-count">
          <div
            onClick={onClickMinus}
            className="button button--outline button--circle cart__item-count-minus"
          >
            -
          </div>
          <b>{count}</b>
          <div
            onClick={onClickPlus}
            className="button button--outline button--circle cart__item-count-plus"
          >
            +
          </div>
        </div>
        <div className="cart__item-price">
          <b>{price * count} ₽</b>
        </div>
        <div className="cart__item-remove">
          <div
            onClick={onClickRemove}
            className="button button--outline button--circle"
          >
            X
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
