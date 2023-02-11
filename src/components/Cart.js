import { useSelector, useDispatch } from "react-redux";
import { removeItem, increase, decrease, total } from "@/features/CartSlice";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState, useEffect } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const allItems = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(total());
  }, [cartItems]);
  return (
    <div className="flex flex-col justify-around z-30 absolute float-right right-2 bg-slate-300">
      {cartItems.map((item, i) => (
        <div className="flex flex-row justify-between space-x-10" key={i}>
          <h4>{item.name}</h4>
          <h4>${item.price}</h4>
          <div className="flex flex-row space-x-4 items-center">
            <AiOutlineMinus onClick={() => dispatch(decrease(item.name))} />
            <h5>{item.quantity}</h5>
            <AiOutlinePlus onClick={() => dispatch(increase(item.name))} />
          </div>
          <button
            className=" p-1  text-[#191919] border-2 rounded-2xl border-[#191919] text-sm font-bold hover:bg-[#191919] hover:text-white"
            onClick={() => dispatch(removeItem(item.name))}
          >
            remove item
          </button>
        </div>
      ))}
      <h2>
        Amount: <span>{allItems.amount}</span>
      </h2>
      <h2>
        Total: <span>{allItems.total}</span>
      </h2>
      <button className=" p-1  text-[#191919] border-2 rounded-2xl border-[#191919] text-sm font-bold hover:bg-[#191919] hover:text-white">
        Checkout
      </button>
    </div>
  );
};

export default Cart;
