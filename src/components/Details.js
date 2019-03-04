import React, { Component } from "react";
import { ProductConsumer } from "../context.js";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

//info about detailProducts comes from data.js(obj detailProduct)
//via contex.js (it's defined in state object (second field or property) in context.js) and ProductConsumer, that needs to be
//imported in this one component.
// always-always need a function to work with data from context
//in that func need to make a destracture of an object (in my case detailProduct)
//destructing all fields in const and when get an access to all of the info in th obj
//
export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}

              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end title */}

              <div className="row">
                {/* product info */}
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="prodInfo" />
                </div>
                {/* product text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>product: {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by: <span>{company}</span>
                  </h4>
                  <h4>
                    price: <span>$</span>
                    {price}
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info aboout product:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* buttons */}
                  <div>
                    <Link to="/">
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      //cart is a prop for styled compnents
                      // this prop makes border and background yellow
                      //prop is sent to the Button.js
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "in Cart" : "add to Cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
