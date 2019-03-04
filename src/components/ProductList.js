import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
// import { storeProducts } from "../data";
//the import above - is for a "props drill". in this app
//we not use it. instead Context API resolves that/
import { ProductConsumer } from "../context";

//here data comes from  Context API(ProductProvider)
//Consumer - is another part(component) of Object.Context
//passing the data needs always-always a function with props
//valueInArrowFunc

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Our" title="products" />
            <div className="row">
              <ProductConsumer>
                {valueInArrowFunc => {
                  return valueInArrowFunc.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
