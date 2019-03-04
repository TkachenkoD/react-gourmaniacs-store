import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}

//<CartList {...value} /> this type of syntax works as well
//it described in a book page 98, see my comments
//in CartList component can be destructured exactly needed field
//I got {cart} it works see exp:
//export default function CartList({ cart }) {code here}

//see comments in package.json file in Cart folder
//that explain how this file gets simular to index.js
//Cart.js becomes main file in the CART's component tree
//package.json file in Cart folder makes folder Cart and file Cart.js
//simular to index.js
//this means that all components ftrom the Cart
//all files that build CART - go to that Cart.js.file
//and then that file imports into App.js
