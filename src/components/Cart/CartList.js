import React from "react";
import CartItem from "./CartItem";

export default function CartList({ value }) {
  const { cart } = value;
  console.log(value, cart);

  return (
    <div className="container-fluid">
      {cart.map(item => {
        // console.log(item);
        return <CartItem key={item.id} item={item} value={value} />;
      })}
    </div>
  );
}

//in  <CartItem key={item.id} item={item} value={value} />;
// here item={item} is an product, taken from CART
//value={value}we pass the rest of data and methods from
//function CartList({ value })
// but Context API works as well
//it just demostration of prop drill

//CartItem value1={}
//function CartList({ value1 })
//value1 have to be in braces
//mean an atribute name
