import React, { Component } from "react";

export default class AboutItem extends Component {
  render() {
    const { img, info, name } = this.props.passedProp;
    return (
      <div className="container py-5">
        <div className="row">
          {/* pic */}
          <div className="col-10 mx-auto col-md-6 my-3 text-center">
            <img src={img} className="img-fluid img-thumbnail" alt="prodInfo" />
          </div>
          {/* news about */}
          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <h2>{name} </h2>
            <p>{info} </p>
          </div>
        </div>
      </div>
    );
  }
}
